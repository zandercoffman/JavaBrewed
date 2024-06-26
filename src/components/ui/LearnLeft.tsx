import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, Controls, Background } from 'react-flow-renderer';
import { Bot, LoaderCircle } from 'lucide-react';
import { AIMessage } from './AIMessage';
import { UserMessage } from './UserMessage';

export function LeftSideLearnSide({ lesson, step, show, setNodeInfo, info, messages, setMessages, content, setContent }) {
    const [loading, setLoading] = useState(true);
    const [nodes, setNodes] = useNodesState([]);
    const [edges, setEdges] = useEdgesState([]);
    const [nodesAndEdges, setNodesAndEdges] = useState<object[]>([]);

    //Math calculations to place nodes around
    //an imaginary circle

    const ratioOfWidth = window.innerWidth * 0.458;
    const circleDiameter = ratioOfWidth - 60;
    const circleRadius = circleDiameter / 2;
    const stepCount = (lesson.steps && lesson.steps[`Step${step + 1}`] && lesson.steps[`Step${step + 1}`].Teach) ? Object.keys(lesson.steps[`Step${step + 1}`].Teach.good).length + Object.keys(lesson.steps[`Step${step + 1}`].Teach.bad).length : 7;
    const ratio = (2.5 * Math.PI) / stepCount; //Why does 2.5PI work? Is 2.5PI the new 2PI?
    
    let currentAngle = 0;

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    const getRandomPosition = useCallback(() => {
        const position = {
            x: circleRadius * Math.cos(currentAngle) + getRandomNumber(-20, 20),
            y: circleRadius * Math.sin(currentAngle) + getRandomNumber(-20, 20),
        };
        currentAngle += ratio;
        return position;
    }, [circleRadius, ratio]);

    useEffect(() => {
        setLoading(true); // Set loading to true when fetching new step data

        const initializeNodesAndEdges = () => {
            const initialNodes = [];
            const initialEdges = [];

            //TODO; cry
            //This took me 4 hours to realize the numbering
            //system was screwed up.
            //Added +1 because it would be screwed up, overlapping
            if (lesson.steps && lesson.steps[`Step${step}`] && lesson.steps[`Step${step}`].Teach) {
                lesson.steps[`Step${step}`].Teach.good.forEach((s, index) => {
                    initialNodes.push({ id: `Step${step}-${index}`, position: getRandomPosition(), data: { label: `${s}` } });
                });
                lesson.steps[`Step${step}`].Teach.bad.forEach((s, index) => {
                    initialNodes.push({ id: `Step${step}-${Object.keys(lesson.steps[`Step${step}`].Teach.good).length + 1 + index}`, position: getRandomPosition(), data: { label: `${s}` } });
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

        console.log(`Connected edge from ${source} to ${target}`);
        

        const sourceNode = nodes.find(node => node.id === source);
        const targetNode = nodes.find(node => node.id === target);

        console.log(JSON.stringify(sourceNode) + " - " + JSON.stringify(targetNode))

        const updatedStepContent = `${content[step - 1]} ${(content[step - 1] == "") ? sourceNode?.data.label : ""} ${targetNode?.data.label}`;


        setContent((step - 1), updatedStepContent);

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
                    <div className='w-[95%] h-[90%]'>
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
