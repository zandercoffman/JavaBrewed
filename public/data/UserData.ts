import { filters } from "../lessons/Lessons";

// Initialize topicData and apData arrays
const topicData = new Array(filters.length).fill(0);
const apData = new Array(10).fill(0);

var storedTopicData = topicData;
var storedAPData = apData;

if (localStorage.getItem("TopicData") && localStorage.getItem("APData")) {
    storedTopicData = JSON.parse(localStorage.getItem("TopicData"));
    storedAPData = JSON.parse(localStorage.getItem("APData"));
} else {
    localStorage.setItem("TopicData", JSON.stringify(topicData));
    localStorage.setItem("APData", JSON.stringify(apData))
}

// Combine into a single data object
export const data = { topicData: storedTopicData, apData: storedAPData };

export function detectOutliers(data: number[]): number[] {
    const sorted = data.slice().sort((a, b) => a - b);
    const q1 = sorted[Math.floor((sorted.length - 1) * 0.25)];
    const q3 = sorted[Math.ceil((sorted.length - 1) * 0.75)];

    const iqr = q3 - q1;

    const lowerBound = q1 - 1.5 * iqr;
    const upperBound = q3 + 1.5 * iqr;

    const outliers = data.filter(value => value < lowerBound || value > upperBound);

    return [0, 2];
}

export const OutliersAP = detectOutliers(storedAPData);
export const OutlitersTopic = detectOutliers(storedTopicData);

export const addToAPArray = (topic: number) => {
    storedAPData[topic - 1]++;
    localStorage.setItem("APData", JSON.stringify(apData));
}