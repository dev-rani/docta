import React, { useEffect, useState } from "react";
import { Container, Typography, Button, RadioGroup, FormControlLabel, Radio, TextField, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { nextQuestion, decreaseTimer } from "../features/examSlice";
import { useNavigate } from "react-router-dom";

const Exam: React.FC = () => {
    const { questions, currentQuestion, timer } = useSelector((state: RootState) => state.exam);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [descriptiveAnswers, setDescriptiveAnswers] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        const countdown = setInterval(() => {
            dispatch(decreaseTimer());
        }, 1000);

        if (timer <= 0) {
            clearInterval(countdown);
            navigate("/results");
        }

        return () => clearInterval(countdown);
    }, [timer, dispatch, navigate]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    if (!questions.length) {
        return <Typography variant="h6">Loading questions...</Typography>;
    }

    const currentQ = questions[currentQuestion];

    const handleSaveAnswer = () => {
        console.log("Saved Answer:", descriptiveAnswers[currentQuestion] || "");
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as string;
                setDescriptiveAnswers((prev) => ({ ...prev, [currentQuestion]: content }));
            };
            reader.readAsText(file);
        }
    };

    return (
        <Container>
            <Typography variant="h5" align="right">⏳ {formatTime(timer)} Minutes</Typography>
            <Typography variant="h4">Question {currentQuestion + 1}</Typography>
            <Typography>{currentQ.question}</Typography>
            {currentQ.type === "mcq" ? (
                <>
                    <RadioGroup>
                        {currentQ.options?.map((option: string, index: number) => (
                            <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                        ))}
                    </RadioGroup>
                    <Box display="flex" justifyContent="space-between" mt={2}>
                        <Button onClick={() => navigate("/results")} variant="contained" color="secondary">Finish Exam</Button>
                        <Button onClick={() => dispatch(nextQuestion())} variant="contained" color="primary">Next</Button>
                    </Box>
                </>
            ) : (
                <>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Write your answer here..."
                        value={descriptiveAnswers[currentQuestion] || ""}
                        onChange={(e) => setDescriptiveAnswers({ ...descriptiveAnswers, [currentQuestion]: e.target.value })}
                    />
                    <Box display="flex" justifyContent="flex-end" mt={2}>
                        <Button onClick={handleSaveAnswer} variant="contained">Save</Button>
                        <input type="file" accept=".txt" onChange={handleFileUpload} style={{ display: "none" }} id="upload-answer" />
                        <label htmlFor="upload-answer">
                            <Button component="span" variant="contained" sx={{ ml: 2 }}>Upload Answer</Button>
                        </label>
                    </Box>
                    <Box display="flex" justifyContent="space-between" mt={2}>
                        <Button onClick={() => navigate("/results")} variant="contained" color="secondary">Finish Exam</Button>
                        <Button onClick={() => dispatch(nextQuestion())} variant="contained" color="primary">Next</Button>
                    </Box>
                </>
            )}
        </Container>
    );
};

export default Exam;
