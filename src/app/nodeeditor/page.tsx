"use client"

import ReactFlow, { Node, Edge, addEdge, ReactFlowProps, useNodesState, useEdgesState, Controls, Background, MiniMap, ReactFlowActions, Connection } from 'react-flow-renderer';
import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from "@/components/ui/use-toast"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ClipboardCopy, Plus, Trash2 } from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function Page() {
    const [counter, setCounter] = React.useState(0);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [step, setStep] = useState(1);

    const { toast } = useToast()

    const handleNumberChange = (event: any) => {
        setStep(event.target.value);
    };

    const onConnect = useCallback(
        (params: Edge<any> | Connection) => {
            // Define the new edge with the desired properties
            const newEdge = {
                id: `e${params.source}-${params.target}`, 
                source: params.source,
                target: params.target,// custom ID format
                label: '',
                animated: false, // set the animated property to false
                type: "smoothstep"
            };
    
            // Add the new edge to the state
            setEdges((prevEdges) => addEdge(newEdge, prevEdges));
            setCounter((prevCounter) => prevCounter + 1);
        },
        [setEdges]
    );
    
    const handleEdgeLabelChange = (event: React.ChangeEvent<HTMLInputElement>, edgeId: string) => {
        const newLabel = event.target.value;
        setEdges((eds) =>
            eds.map((edge) =>
                edge.id === edgeId ? { ...edge, label: newLabel } : edge
            )
        );
    };

    const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>, nodeId: string) => {
        const newLabel = event.target.value;
        setNodes((nds) => 
            nds.map((node) => 
                node.id === nodeId ? { ...node, data: { ...node.data, label: newLabel } } : node
            )
        );
    };

    const handleEdgeAnimatedChange = (event: React.ChangeEvent<HTMLInputElement>, edgeId: string) => {
        const isAnimated = event.target.checked;
        setEdges((eds) =>
            eds.map((edge) =>
                edge.id === edgeId ? { ...edge, animated: isAnimated } : edge
            )
        );
    };

    const handleEdgeTypeChange = (event: React.ChangeEvent<HTMLSelectElement>, edgeId: string) => {
        const newType = event.target.value;
        setEdges((eds) =>
            eds.map((edge) =>
                edge.id === edgeId ? { ...edge, type: newType } : edge
            )
        );
    };

    const handleNodeDelete = (nodeId: string) => {
        toast({
            title: "Successfully deleted!",
            description: `You deleted Node #${nodeId}`,
        })
        setNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeId));
    };

    const handleEdgeDelete = (edgeId: string) => {
        setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== edgeId));
    };

    const handleAddNode = () => {
        const newNode = {
            id: `${nodes.length + 1}`, // Unique ID based on timestamp
            position: { x: 0, y: 0 },
            data: { label: `${nodes.length + 1}` } // Example label generation
        };

        setNodes((prevNodes) => [...prevNodes, newNode]);
    };


    return <>
        <style jsx>{`
            .react-flow__edge {
                animation: none !important;
            }
        `}</style>
        <main className="relative flex min-h-screen max-h-screen flex-col items-center overflow-hidden">
            <div className="flex flex-row gap-2 h-[90vh] w-screen m-3">
                <div className="w-1/2 h-full m-3">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        snapToGrid={true}
                        nodesDraggable={true}
                        nodesConnectable={true}
                        fitView
                        
                    >
                        <Background />
                        <Controls />
                    </ReactFlow>
                </div>
                <div className="flex flex-col gap-2 w-1/2 h-full m-3">
                    <div className='flex flex-row gap-2 h-[10%]'>
                        <p>Step:</p>
                        <div>
                            <input
                                type="number"
                                value={step}
                                onChange={handleNumberChange}
                                className='px-1 rounded-[0.5rem]'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col overflow-x-auto w-full h-[45%]'>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Nodes:
                        </h3>
                        <Table className=' overflow-auto'>
                            <TableCaption>
                                <div className='flex flex-row gap-4'>
                                    <div className='flex flex-row gap-2'>
                                        <Plus className='cursor-pointer' onClick={handleAddNode} />
                                        Add Node
                                    </div>
                                    <div className='flex flex-row gap-2'>
                                        <Sheet>
                                            <SheetTrigger className='flex flex-row gap-2'>
                                                <ClipboardCopy className='cursor-pointer'/>
                                                Copy All
                                            </SheetTrigger>
                                            <SheetContent className='!w-[42vw] !max-w-full'>
                                                <SheetHeader className='mb-2'>
                                                    <SheetTitle>Nodes</SheetTitle>
                                                    <SheetDescription>
                                                        Here are all of your nodes in a format to copy.
                                                    </SheetDescription>
                                                </SheetHeader>
                                                <textarea className='w-full h-[80%] p-2' autoCorrect="off" autoCapitalize="off">
                                                    {
                                                        "Boxes: {" + 
                                                        Object.keys(nodes).map((key, index) => {
                                                            return (
                                                                `\n\tBox${index + 1}: {id: 's${step}-${nodes[key].id}', position: ${JSON.stringify(nodes[key].position)}, data: ${JSON.stringify(nodes[key].data)}}`
                                                            );
                                                        }) + `\n},`
                                                    }
                                                </textarea>
                                                
                                            </SheetContent>

                                        </Sheet>

                                        
                                    </div>
                                </div>
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>(X, Y)</TableHead>
                                    <TableHead>Label</TableHead>
                                    <TableHead>Width</TableHead>
                                    <TableHead>Height</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    Object.keys(nodes).map((key, index) => {
                                        return <TableRow key={index}>
                                            <TableCell>{nodes[key].id}</TableCell>
                                            <TableCell>({nodes[key].position.x}, {nodes[key].position.y})</TableCell>
                                            <TableCell>
                                                <input 
                                                    type="text" 
                                                    value={nodes[key].data.label} 
                                                    onChange={(event) => handleLabelChange(event, nodes[key].id)}
                                                    className='w-20 rounded-[0.5rem] text-center'
                                                />
                                            </TableCell>
                                            <TableCell>{nodes[key].width}</TableCell>
                                            <TableCell>{nodes[key].height}</TableCell>
                                            <TableCell className='flex flex-row gap-2'><ClipboardCopy className='cursor-pointer' onClick={
                                                () => {
                                                    const obj = {
                                                        id: `s${step}-${nodes[key].id}`,
                                                        position: {
                                                            x: nodes[key].position.x,
                                                            y: nodes[key].position.y
                                                        },
                                                        data: nodes[key].data,
                                                    }

                                                    navigator.clipboard.writeText(JSON.stringify(obj));
                                                    toast({
                                                        title: "Successfully copied!",
                                                        description: JSON.stringify(obj),
                                                    })
                                                }
                                            }/>
                                            <Trash2 className='cursor-pointer' onClick={
                                                () => handleNodeDelete(`${nodes[key].id}`)
                                            }/></TableCell>
                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>

                    </div>
                    <div className='flex flex-col overflow-x-auto w-full h-[45%]'>
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            Edges:
                        </h3>
                        <Table>
                            <TableCaption>
                                <div className='flex flex-row gap-2'>
                                    <Sheet>
                                        <SheetTrigger className='flex flex-row gap-2'>
                                            <ClipboardCopy className='cursor-pointer'/>
                                            Copy All
                                        </SheetTrigger>
                                        <SheetContent className='!w-[52vw] !max-w-full'>
                                            <SheetHeader className='mb-2'>
                                                <SheetTitle>Nodes</SheetTitle>
                                                <SheetDescription>
                                                    Here are all of your nodes in a format to copy.
                                                </SheetDescription>
                                            </SheetHeader>
                                            <textarea className='w-full h-[80%] p-2' autoCorrect="off" autoCapitalize="off">
                                                {
                                                    "Edges: {" + 
                                                    Object.keys(edges).map((key, index) => {
                                                        return (
                                                            `\n\tEdge${index + 1}: {id: 'e${edges[key].source}-${edges[key].target}', source: "s${step}-${edges[key].source}", target: "s${step}-${edges[key].target}", animated: ${edges[key].animated || false}, type: ${JSON.stringify(edges[key].type || "bezier")}}`
                                                        );
                                                    }) + `\n},`
                                                }
                                            </textarea>
                                            
                                        </SheetContent>

                                    </Sheet>
                                </div>
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">ID</TableHead>
                                    <TableHead>Source</TableHead>
                                    <TableHead>Target</TableHead>
                                    <TableHead>Label</TableHead>
                                    <TableHead>Animated</TableHead>
                                    <TableHead>Edge Type</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    Object.keys(edges).map((key, index) => {
                                        return <TableRow key={index}>
                                            <TableCell>{`e${edges[key].source}-${edges[key].target}`}</TableCell>
                                            <TableCell>{edges[key].source}</TableCell>
                                            <TableCell>{edges[key].target}</TableCell>
                                            <TableCell>
                                                <input
                                                    type="text"
                                                    value={edges[key].label}
                                                    onChange={(event) => handleEdgeLabelChange(event, `e${edges[key].source}-${edges[key].target}`)}
                                                    className='w-20 rounded-[0.5rem] text-center'
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <input
                                                    type="checkbox"
                                                    checked={edges[key].animated || false}
                                                    onChange={(event) => handleEdgeAnimatedChange(event, `e${edges[key].source}-${edges[key].target}`)}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <select value={edges[key].type} onChange={(event) => handleEdgeTypeChange(event, `e${edges[key].source}-${edges[key].target}`)} className='px-1 rounded-[0.5rem]'>
                                                    <option value="straight">Straight</option>
                                                    <option value="step">Step</option>
                                                    <option value="smoothstep">Smooth Step</option>
                                                    <option value="bezier">Bezier Curve</option>
                                                </select>
                                            </TableCell>
                                            <TableCell>
                                                <Trash2 className='cursor-pointer' onClick={() => handleEdgeDelete(`e${edges[key].source}-${edges[key].target}`)} />
                                            </TableCell>
                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </main>
    </>
}