"use client"

import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import * as qna from '@tensorflow-models/qna';

var model: any;
export const loadModel = async () => {
    if (!model)
        model = await qna.load();
    return model;
}

export const findAnswers = async (question: string, passage: string) => {
    if (!model)
        model = await qna.load();
    const answers = await model.findAnswers(question, passage);
    return answers;
}

