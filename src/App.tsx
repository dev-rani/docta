import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import lightTheme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Exam from "./pages/Exam";
import Results from "./pages/Results";
import Home from "./pages/Home";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Router>
                <Box display="flex" flexDirection="column" minHeight="100vh">
                    <Header />
                    <Box component="main" flexGrow={1} p={{ xs: 2, sm: 3, md: 5 }}>
                        <Routes>
                            <Route path="/" element={<><Home /><Footer /></>} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/exam" element={<Exam />} />
                            <Route path="/results" element={<Results />} />
                        </Routes>
                    </Box>
                </Box>
            </Router>
        </ThemeProvider>
    );
};

export default App;