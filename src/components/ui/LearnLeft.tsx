import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Controls, Background } from 'react-flow-renderer';
import { Bot, LoaderCircle } from 'lucide-react';
import { AIMessage } from './AIMessage';
import { UserMessage } from './UserMessage';

export function LeftSideLearnSide({ lesson, step, show, setNodeInfo, info, messages, setMessages }) {
    const [loading, setLoading] = useState(true);
    const [nodes, setNodes] = useNodesState([]);
    const [edges, setEdges] = useEdgesState([]);
    const [nodesAndEdges, setNodesAndEdges] = useState<object[]>([]);

    const getRandomPosition = useCallback(() => ({
        x: Math.random() * 600 - 200,
        y: Math.random() * 600 - 200,
    }), []);

    useEffect(() => {
        setLoading(true); // Set loading to true when fetching new step data

        const initializeNodesAndEdges = () => {
            const initialNodes = [];
            const initialEdges = [];

            if (lesson.steps && lesson.steps[`Step${step}`] && lesson.steps[`Step${step}`].Teach) {
                lesson.steps[`Step${step}`].Teach.good.forEach((s, index) => {
                    initialNodes.push({ id: `Step${step}-${index}`, position: getRandomPosition(), data: { label: `${s}` } });
                });
                lesson.steps[`Step${step}`].Teach.bad.forEach((s, index) => {
                    initialNodes.push({ id: `Step${step}-${index}`, position: getRandomPosition(), data: { label: `${s}` } });
                });
            }

            return {
                nodes: initialNodes,
                edges: initialEdges
            };
        };

        if (nodesAndEdges[step]) {
            setNodes(nodesAndEdges[step].nodes);
            setEdges(nodesAndEdges[step].edges);
        } else {
            const updatedNodesAndEdges = initializeNodesAndEdges();

            setNodes(updatedNodesAndEdges.nodes);
            setEdges(updatedNodesAndEdges.edges);

            
        }
        

        setLoading(false);
    }, [getRandomPosition, lesson, setEdges, setNodes, step]);

    useEffect(() => {
        // Update nodes and edges when show is toggled
        if (!show) {
            if (nodesAndEdges[step]) {
                setNodes(nodesAndEdges[step].nodes);
                setEdges(nodesAndEdges[step].edges);
            } else {
                setNodes([]);
                setEdges([]);
            }
        }
    }, [show, setNodes, setEdges]);

    const onConnect = useCallback((params) => {
        const { source, target } = params;
        setNodeInfo(source)
        console.log(`Connected edge from ${source} to ${target}`);

        setEdges(prevEdges => addEdge(params, prevEdges));
        setNodesAndEdges(prevNodesAndEdges => ({
            ...prevNodesAndEdges,
            [step]: {
                nodes,
                edges: addEdge(params, edges)
            }
        }));

    }, [setEdges, setNodeInfo]);

    if (loading) {
        return <div className='w-full h-full loading'><LoaderCircle /></div>;
    }

    return (
        <div className='w-full h-full rounded-2xl ml-2 mr-2'>
            {show ? (
                <div className='flex flex-col-reverse w-full h-full gap-3'> 
                    <div className='w-full h-[10%]'> 
                        <div className='flex flex-row gap-3 bg-white rounded-[1rem]'>
                            <Bot className='w-20 h-20'/>
                            <div className='grid place-items-center'>
                                <div className='flex flex-col'>
                                    <div className="relative bg-gray-600 rounded-[2rem] px-4 py-3 chat-bubble-ai max-w-[90%]">
                                        {
                                            Object.keys(messages).map((messageID, index) => {
                                                const message = messages[messageID];
                                                if (index == step - 1) 
                                                    return <>{message.text}</>
                                                else
                                                    return null;
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[90%]'>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onConnect={onConnect}
                            snapToGrid={true}
                            nodesDraggable={true}
                            nodesConnectable={true}
                            fitView
                            className=''
                        >
                            <Background />
                            <Controls />
                        </ReactFlow>
                    </div>
                </div>
            ) : (
                <div className='flex flex-row w-full h-full'>
                    <div className='grid place-items-center w-[25%] h-full'>
                        <div className='flex flex-col'>
                            <Bot className='w-36 h-36'/>
                            <h1 className='text-3xl text-center'>Codi</h1>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-[75%] h-full m-12 bg-white rounded-[1rem] shadow-[0px_20px_20px_10px_#00000024] px-6 py-7 overflow-y-auto'>
                        {Object.keys(messages).map((messageId, index) => {
                                const message = messages[messageId];
                                const isLastAIMessage = message.type === 'ai' && index === Object.keys(messages).length - 1;
                                return message.type === 'ai' ? (
                                    <><AIMessage key={messageId} message={message.text} /></>
                                ) : (
                                    <UserMessage key={messageId} message={message.text} />
                                );
                            })}
                    </div>
                </div>
            )}
        </div>
    );
}
