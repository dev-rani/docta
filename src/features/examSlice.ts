import { createSlice } from "@reduxjs/toolkit";

// Define the Question type
interface Question {
    id: number;
    type: "mcq" | "descriptive";
    question: string;
    options?: string[];  // Only for MCQs
    answer?: string;  // Only for MCQs
}

// Function to randomly pick 5 MCQs + 5 Descriptive Questions
const getRandomQuestions = (): Question[] => {
    const allQuestions: Question[] = [
        { id: 1, type: "mcq", question: "What is React?", options: ["Library", "Framework", "Language", "Database"], answer: "Library" },
        { id: 2, type: "mcq", question: "What is Redux used for?", options: ["State Management", "Styling", "Database", "Security"], answer: "State Management" },
        { id: 3, type: "mcq", question: "What hook is used for side effects?", options: ["useState", "useEffect", "useReducer", "useMemo"], answer: "useEffect" },
        { id: 4, type: "mcq", question: "What is TypeScript?", options: ["Language", "Superset of JavaScript", "Framework", "CSS Preprocessor"], answer: "Superset of JavaScript" },
        { id: 5, type: "mcq", question: "What is JSX?", options: ["XML Syntax", "JavaScript Extension", "CSS Format", "Database Query"], answer: "JavaScript Extension" },
        { id: 6, type: "descriptive", question: "Explain the importance of useState in React." },
        { id: 7, type: "descriptive", question: "Describe the difference between useEffect and useLayoutEffect." },
        { id: 8, type: "descriptive", question: "What are props in React, and how do they work?" },
        { id: 9, type: "descriptive", question: "Explain the role of Redux Toolkit." },
        { id: 10, type: "descriptive", question: "What is the difference between Redux and Context API?" }
    ];

    const mcqQuestions = allQuestions.filter(q => q.type === "mcq").sort(() => 0.5 - Math.random()).slice(0, 5);
    const descQuestions = allQuestions.filter(q => q.type === "descriptive").sort(() => 0.5 - Math.random()).slice(0, 5);
    return [...mcqQuestions, ...descQuestions];
};

// Initial state with correct type
interface ExamState {
    questions: Question[];
    currentQuestion: number;
    timer: number;
    examStarted: boolean;
}

const initialState: ExamState = {
    questions: [],
    currentQuestion: 0,
    timer: 30 * 60,
    examStarted: false,
};

const examSlice = createSlice({
    name: "exam",
    initialState,
    reducers: {
        startExam: (state) => {
            state.questions = getRandomQuestions();  // ✅ Now correctly typed
            state.currentQuestion = 0;
            state.timer = 30 * 60;
            state.examStarted = true;
        },
        nextQuestion: (state) => {
            if (state.currentQuestion < state.questions.length - 1) {
                state.currentQuestion += 1;
            }
        },
        decreaseTimer: (state) => {
            if (state.timer > 0) {
                state.timer -= 1;
            }
        },
        resetExam: (state) => {
            state.questions = [];
            state.currentQuestion = 0;
            state.timer = 30 * 60;
            state.examStarted = false;
        },
    },
});

export const { startExam, nextQuestion, decreaseTimer, resetExam } = examSlice.actions;
export default examSlice.reducer;
