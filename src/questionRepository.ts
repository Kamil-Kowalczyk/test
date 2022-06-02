import { Question } from "./question";

export const QUESTIONS:Question[]=[
    {
        id:1,
        content:"What was first: an egg, a chicken or a human?",
        answers:['egg', 'chicken', 'human'],
        rightAnswerIndex:2,
        chosenAnswerIndex: -1
    },
    {
        id:2,
        content:"What is greater than 20: 1, 90 or 12?",
        answers:['1', '90', '12'],
        rightAnswerIndex:1,
        chosenAnswerIndex: -1
    },
    {
        id:3,
        content:"What is cheaper: a car, a bus or Twitter",
        answers:['car', 'bus', 'twitter'],
        rightAnswerIndex:0,
        chosenAnswerIndex: -1
    }
]