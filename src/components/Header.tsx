import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static" sx={{ backgroundColor: "#1976D2", padding: "10px 0" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Docta</Typography>

                {/* Navigation Links */}
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button color="inherit">How it Works</Button>
                    <Button color="inherit">Our Services</Button>
                    <Button color="inherit">Pricing & Insurance</Button>
                    <Button color="inherit">Inside Docta</Button>
                    <Button color="inherit">Reviews</Button>
                </Box>

                {/* Login & Download Buttons */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button color="inherit" onClick={() => navigate("/login")}>Login</Button>
                    <Button variant="contained" sx={{ backgroundColor: "#F50057", "&:hover": { backgroundColor: "#C51162" } }}>Download</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;