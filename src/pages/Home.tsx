import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import FavouriteClinic from "../components/FavouriteClinic";

const Home: React.FC = () => {
    return (
        <Container maxWidth="lg">
            {/* Hero Section */}
            <Paper elevation={3} sx={{ p: 4, textAlign: "center", borderRadius: 4, backgroundColor: "#E3F2FD" }}>
                <Typography variant="h3" fontWeight="bold" color="primary">Welcome to Docta</Typography>
                <Typography variant="h6" color="textSecondary" sx={{ mt: 1 }}>
                    Your trusted online medical platform for instant consultations.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 3, px: 4, py: 1.5, fontSize: "1rem" }}>
                    Get Started
                </Button>
            </Paper>

            {/* Your Favourite Online Clinic Section */}
            <Box sx={{ mt: 5 }}>
                <FavouriteClinic />
            </Box>
        </Container>
    );
};

export default Home;