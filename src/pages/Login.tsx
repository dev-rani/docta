import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { startExam } from "../features/examSlice";  // ✅ Import startExam

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(login());
        dispatch(startExam());  // ✅ Start exam before navigating
        navigate("/exam");
    };

    return (
        <Container>
            <Typography variant="h4">Customer Login</Typography>
            <TextField label="Email Address" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" fullWidth onClick={handleLogin}>
                Start Exam
            </Button>
        </Container>
    );
};

export default Login;
