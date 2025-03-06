import React from "react";
import { Container, Grid, Typography, Link, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#1976D2",
                py: 1, /* Small footer size */
                width: "100%",
                color: "white",
                textAlign: "center",
                mt: "auto" /* Ensures footer stays at bottom but scrolls with content */
            }}
        >
            <Container>
                <Grid container spacing={1} justifyContent="center" textAlign="center">
                    {/* Platform Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle2" fontWeight="bold">PLATFORM</Typography>
                        <Link href="#" display="block" color="inherit">Ask a doctor online</Link>
                        <Link href="#" display="block" color="inherit">Chat with a doctor</Link>
                        <Link href="#" display="block" color="inherit">Get the App</Link>
                    </Grid>

                    {/* Resources Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle2" fontWeight="bold">RESOURCES</Typography>
                        <Link href="#" display="block" color="inherit">Careers</Link>
                        <Link href="#" display="block" color="inherit">Blog</Link>
                        <Link href="#" display="block" color="inherit">Help & Support</Link>
                        <Link href="#" display="block" color="inherit">Affiliate</Link>
                    </Grid>

                    {/* Company Section */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="subtitle2" fontWeight="bold">COMPANY</Typography>
                        <Link href="#" display="block" color="inherit">About Us</Link>
                        <Link href="#" display="block" color="inherit">Contact Us</Link>
                        <Link href="#" display="block" color="inherit">Terms & Conditions</Link>
                        <Link href="#" display="block" color="inherit">Privacy Policy</Link>
                    </Grid>
                </Grid>

                {/* Social Media */}
                <Box mt={0.5} display="flex" justifyContent="center" gap={1}>
                    <Link href="#" color="inherit"><FacebookIcon fontSize="small" /></Link>
                    <Link href="#" color="inherit"><TwitterIcon fontSize="small" /></Link>
                    <Link href="#" color="inherit"><InstagramIcon fontSize="small" /></Link>
                </Box>

                {/* Copyright Notice */}
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    2023 © Docta App
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;