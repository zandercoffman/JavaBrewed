"use client";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import React, { useState } from "react";
import { ArrowBigUp } from "lucide-react";

export function RotateMatch(params: any) {
    const squareStyle = {
        width: "180px",
        height: "150px",
        backgroundColor: "white",
        position: "relative",
        borderRadius: "1rem",
        display: "grid",
        placeItems: "center",
    };

    const littlesquareStyle = {
        width: "40px",
        height: "40px",
        backgroundColor: "white",
        position: "relative",
        borderRadius: "1rem",
        display: "grid",
        placeItems: "center",
        transform: "translateY(30vh)"
    };

    const step = params.step;
    const boxes = step.Boxes;

    const [rotate, setRotate] = useState(0);
    const [boxState, setBoxState] = useState({ top: false, left: false, right: false });

    const submit = () => {
        let newBoxState = { top: boxState.top, left: boxState.left, right: boxState.right };

        if (rotate >= -90 && rotate < -45) {
            if (!boxes.Left.Right) {
                newBoxState.left = true;
            } else {
                params.setStep(params.stepNum + 1);
            }
        }

        if (rotate >= -45 && rotate < 45) {
            if (!boxes.Top.Right) {
                newBoxState.top = true;
            } else {
                params.setStep(params.stepNum + 1);
            }
        }

        if (rotate >= 45 && rotate < 90) {
            if (!boxes.Right.Right) {
                newBoxState.right = true;
            } else {
                params.setStep(params.stepNum + 1);
            }
        }

        setBoxState(newBoxState);
    };

    return (
        <div className="w-full h-full grid place-items-center">
            {/* Top motion div */}
            <motion.div
                style={{
                    ...squareStyle,
                    marginBottom: "20px",
                    border: boxState.top ? "2px solid red" : "none"
                }}
                animate={boxState.top ? { borderColor: ["red", "transparent", "red"] } : {}}
                transition={{ repeat: Infinity, duration: 0.5 }}
            >
                {boxes.Top.Text}
            </motion.div>

            {/* Middle motion div */}
            <motion.div style={{ ...squareStyle, visibility: "hidden" }}>
                Hello
                <ArrowBigUp />
            </motion.div>

            {/* Left motion div */}
            <motion.div
                style={{
                    ...squareStyle,
                    position: "absolute",
                    left: "20%",
                    top: "50%",
                    border: boxState.left ? "2px solid red" : "none"
                }}
                animate={boxState.left ? { borderColor: ["red", "transparent", "red"] } : {}}
                transition={{ repeat: Infinity, duration: 0.5 }}
            >
                {boxes.Left.Text}
            </motion.div>

            {/* Right motion div */}
            <motion.div
                style={{
                    ...squareStyle,
                    position: "absolute",
                    right: "20%",
                    top: "50%",
                    border: boxState.right ? "2px solid red" : "none"
                }}
                animate={boxState.right ? { borderColor: ["red", "transparent", "red"] } : {}}
                transition={{ repeat: Infinity, duration: 0.5 }}
            >
                {boxes.Right.Text}
            </motion.div>

            <div className="absolute bottom-0 ml-auto mr-auto mb-[18vh] w-[270px] h-[60px] px-3 py-2">
                {/* Middle motion div */}
                <div className="w-full grid place-items-center">
                    <motion.div
                        style={{
                            ...littlesquareStyle,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            backgroundColor: "white"
                        }}
                        animate={{ rotate: rotate }}
                        transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    >
                        <ArrowBigUp className="w-10 h-10" />
                    </motion.div>
                </div>
                {step.MainBox}
                <div className="flex flex-row gap-2 bg-gray-300 text-black px-2 rounded-[1rem]">
                    <input
                        type="range"
                        value={rotate}
                        min={-180}
                        max={180}
                        step={1}
                        onChange={(e) => setRotate(parseFloat(e.target.value))}
                    />
                    <h1>{rotate + 180}°</h1>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
    );
}
