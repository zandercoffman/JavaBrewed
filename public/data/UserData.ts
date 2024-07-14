import { filters, filterUnits } from "../lessons/Lessons";

// Initialize topicData and apData arrays
const topicData = new Array(filters.length).fill(0);
var apData = new Array(10).fill(0);

const apScoring = [
    { name: 'Unit 1', value: 5 },
    { name: 'Unit 2', value: 7.5 },
    { name: 'Unit 3', value: 17.5 },
    { name: 'Unit 4', value: 22.5 },
    { name: 'Unit 5', value: 7.5 },
    { name: 'Unit 6', value: 15 },
    { name: 'Unit 7', value: 7.5 },
    { name: 'Unit 8', value: 10 },
    { name: 'Unit 9', value: 10 },
    { name: 'Unit 10', value: 7.5 },
  ];

var storedTopicData = topicData;
var storedAPData = apData;

if (typeof window !== 'undefined') {
    try {
        const topicDataStr = localStorage.getItem("TopicData");
        const apDataStr = localStorage.getItem("APData");

        if (topicDataStr && apDataStr) {
            storedTopicData = JSON.parse(topicDataStr);
            storedAPData = JSON.parse(apDataStr);
        } else {
            localStorage.setItem("TopicData", JSON.stringify(topicData));
            localStorage.setItem("APData", JSON.stringify(apData));
        }
    } catch (error) {
        console.error("Error accessing localStorage:", error);
        localStorage.setItem("TopicData", JSON.stringify(topicData));
        localStorage.setItem("APData", JSON.stringify(apData));
    }
}

// Combine into a single data object
export const data = { topicData: storedTopicData, apData: storedAPData };

export function detectOutliers(data: number[]): { outliers: number[], outlierIndices: number[] } {
    /**
     * if (data.includes(0))
        return {outliers: [], outlierIndices: []};
     */

    const values = apScoring.map(unit => unit.value);

    const sorted = values.slice().sort((a, b) => a - b);
    const q1 = sorted[Math.floor((sorted.length - 1) * 0.25)];
    const q3 = sorted[Math.ceil((sorted.length - 1) * 0.75)];

    const iqr = q3 - q1;

    const lowerBound = q1 - 1.5 * iqr;
    const upperBound = q3 + 1.5 * iqr;

    const outliers: number[] = [];
    const outlierIndices: number[] = [];

    data.forEach((value, index) => {
        if (value < lowerBound || value > upperBound) {
            outliers.push(value);
            outlierIndices.push(index);
        }
    });

    return { outliers, outlierIndices };
}

// Usage example to get outliers in storedAPData and storedTopicData
export const { outliers: OutliersAP, outlierIndices: outlierIndicesAP } = detectOutliers(storedAPData);
export const { outliers: OutliersTopic, outlierIndices: outlierIndicesTopic } = detectOutliers(storedTopicData);

console.log("Outliers in AP Data:", OutliersAP);
console.log("Indices of Outliers in AP Data:", outlierIndicesAP);
console.log("Outliers in Topic Data:", OutliersTopic);
console.log("Indices of Outliers in Topic Data:", outlierIndicesTopic);

export const addToAPArray = (topic: number) => {
    const item = localStorage.getItem("APData");
    if (item) {
        const parsed = JSON.parse(item);
        parsed[topic - 1]++;
        localStorage.setItem("APData", JSON.stringify(parsed));
    } else {
        storedAPData[topic - 1]++;
        localStorage.setItem("APData", JSON.stringify(storedAPData));
    }
}

export const addToData = (unit: number, gotFilters: string[]) => {
    addToAPArray(unit);

    const item = localStorage.getItem("TopicData");
    if (item) {
        const parsed = JSON.parse(item);
        gotFilters.map(str => {
            const index = filters.indexOf(str);
            if (index !== -1) {
                parsed[index]++;
            }
        })
        localStorage.setItem("TopicData", JSON.stringify(parsed));
    } else {
        const filtersCount: number[] = new Array(filters.length).fill(0);
        gotFilters.map(str => {
            const index = filters.indexOf(str);
            if (index !== -1) {
                filtersCount[index]++;
            }
        })
        localStorage.setItem("TopicData", JSON.stringify(filtersCount));
    }

    
}