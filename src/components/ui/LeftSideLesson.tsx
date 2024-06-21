"use client"

import { LoaderCircle } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import ReactFlow, { Node, Edge, addEdge, ReactFlowProps, useNodesState, useEdgesState, Controls, Background } from 'react-flow-renderer';

const doStuff = (lesson: any, stepNum: number): { nodes: Node[], edges: Edge[] } => {
    var nodes: Node[] = [];
    var edges: Edge[] = [];

    const step = lesson.steps[`Step${stepNum}`];

    if (step.QuestionType === "default") {
        Object.keys(step.Boxes).forEach((boxKey) => {
            const box = step.Boxes[boxKey];
            nodes.push({
                id: box.id,
                position: box.position,
                data: box.data
            });
        });
        Object.keys(step.Edges).forEach((edgeKey) => {
            const edge = step.Edges[edgeKey];
            edges.push({
                id: edge.id,
                source: edge.source,
                target: edge.target,
                animated: edge.animated || false,
                label: edge.label || ""
            });
        });
    } else if (step.QuestionType === "question") {
        Object.keys(step.Boxes).forEach((boxKey, index) => {
            const box = step.Boxes[boxKey];

            nodes.push({
                id: box.QNode.id,
                position: {x: index * 300 + 40, y: 50},
                data: {
                    label: <div className={`noREACT`}>{box.QNode.label}</div>
                }
            });
            if (box.ANode) {
                nodes.push({
                    id: box.ANode.id,
                    position: { x: index * 300 + 40 + (((window.innerWidth /4) - .08 * window.innerWidth) / 3), y: 320 },
                    data: box.ANode
                });
            }
        });

    }

    return { nodes, edges };
};


const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  interface LeftSideLessonProps {
    lesson: any;
    step: number;
}

function getArr(length: number): number[] {
    const arr: number[] = [];
    for (let i = 0; i < length; i++) {
        let random: number;
        do {
            random = Math.floor(Math.random() * length);
        } while (arr.includes(random));
        arr.push(random);
    }
    return arr;
}


const LeftSideLesson: React.FC<LeftSideLessonProps> = (params: { lesson: any, step: number }) => {
    const [thisLesson, setThisLesson] = React.useState(params.lesson);
    const [thisStep, setThisStep] = React.useState(params.step);

    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = React.useState(0);
   
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
   
    const onConnect = React.useCallback(
        (params) => {
            const { source, target } = params;
            const char1 = [...source];
            const char2 = [...target];

            const answer = (char1[0] == 'q' && char2[0] == 'a') ? char2 : (char2[0] == 'q' && char1[0] == 'a') ? char1 : null;

            

            const isValidChar = (char1[0] == 'q' && char2[0] == 'a') || (char2[0] == 'q' && char1[0] == 'a');
            const isValidNum = char1[1] == char2[1];

            if (!isValidChar || !isValidNum)
                return;
            
            
            if (answer) {
                const element = document.querySelector(`[data-id="a${answer[1]}"]`);
                element.className += " !transition-all "
                element.className += " !shadow-sm !shadow-green-500";
            }
            console.log(`Connected edge from ${source} to ${target}`);

            setEdges((prevEdges) => addEdge(params, prevEdges));
            setCounter(counter + 1);
        },
        [counter, setEdges]
    );

    useEffect(() => {
        setLoading(true);
        const { nodes: updatedNodes, edges: updatedEdges } = doStuff(thisLesson, thisStep);
        setNodes(updatedNodes);
        setEdges(updatedEdges);
        
        if (document.querySelector(".react-flow__controls-fitview") && thisStep == Object.keys(thisLesson.steps).length) {
            setTimeout(() => {
                document.querySelector(".react-flow__controls-fitview").click();
            }, 500);
        }
            

        setLoading(false);
    }, [thisLesson, thisStep, setNodes, setEdges]);

    useEffect(() => {
        setThisStep(params.step);
        
    }, [params.step]);

    useEffect(() => {
        if (counter == 4) {
            window.location.href = "/lessons";
        }
    }, [counter])

    if (loading) {
        return <div className='w-full h-full loading'><LoaderCircle /></div>;
    }

    return (
        <>
            {thisStep == Object.keys(thisLesson.steps).length ? <><style jsx>{`.react-flow__edge-path {
    stroke: #b1b1b7;
    stroke-width: 5;
}`}</style></> : <></>}
            <div className='w-[100%] h-[100%]  rounded-2xl'>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    snapToGrid={true}
                    nodesDraggable={false}
                    nodesConnectable={(thisStep == Object.keys(thisLesson.steps).length) ? true : false}
                    fitView
                    
                >
                    <Background />
                    <Controls />
                </ReactFlow>
            </div>
        </>
    );
};

export default LeftSideLesson;