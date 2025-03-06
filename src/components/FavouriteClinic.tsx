import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Grid } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MedicationIcon from "@mui/icons-material/Medication";

const FavouriteClinic: React.FC = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", py: 4 }}>

            {/* Existing Section */}
            <Grid container spacing={4} alignItems="center">
                {/* Left Content */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" fontWeight="bold">Your Favourite Online Clinic</Typography>
                    <List sx={{ mt: 2 }}>
                        <ListItem><ListItemText primary="✅ Same Day Treatment" /></ListItem>
                        <ListItem><ListItemText primary="✅ Board-Certified Practitioners" /></ListItem>
                        <ListItem><ListItemText primary="✅ Satisfaction Guaranteed" /></ListItem>
                    </List>

                    {/* Google Play & Apple Store Icons */}
                    <Grid container spacing={2} alignItems="center" sx={{ mt: 3 }}>
                        <Grid item>
                            <img src="/images/folder/google-play.png" alt="Get it on Google Play" width="150" />
                        </Grid>
                        <Grid item>
                            <img src="/images/folder/game.png" alt="Download on the App Store" width="150" />
                        </Grid>
                    </Grid>

                    {/* Download Count & Ratings */}
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        <strong>5M+ Downloads</strong> &nbsp; | &nbsp; ⭐ <strong>4.8 (984K) Client Reviews</strong>
                    </Typography>
                </Grid>

                {/* Right Image */}
                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                    <img src="/images/folder/clinic-image.jpg" alt="Clinic" style={{ maxWidth: "80%", height: "auto", borderRadius: "8px" }} />
                </Grid>
            </Grid>

            {/* New Section - Smart and Affordable with Image on Left */}
            <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>

                {/* Left Side Image */}
                <Grid item xs={12} md={5} display="flex" justifyContent="center">
                    <img src="/images/folder/paitent.jpg" alt="Smart and Affordable"
                         style={{ maxWidth: "80%", height: "auto", borderRadius: "8px" }} />
                </Grid>

                {/* Right Content */}
                <Grid item xs={12} md={7}>
                    <Typography variant="h5" fontWeight="bold">Why Simple is Better:</Typography>
                    <Typography variant="h3" fontWeight="bold" sx={{ mt: 1 }}>Smart and Affordable</Typography>

                    <List sx={{ mt: 3 }}>
                        <ListItem>
                            <AccessTimeIcon sx={{ fontSize: 40, mr: 2, color: "primary.main" }} />
                            <ListItemText
                                primary="Always Available"
                                secondary="Skip the trip and start your visit anytime with any device."
                            />
                        </ListItem>

                        <ListItem>
                            <AttachMoneyIcon sx={{ fontSize: 40, mr: 2, color: "primary.main" }} />
                            <ListItemText
                                primary="A Price That Doesn't Hurt"
                                secondary="Your visit is $39 – and even less with insurance."
                            />
                        </ListItem>

                        <ListItem>
                            <MedicationIcon sx={{ fontSize: 40, mr: 2, color: "primary.main" }} />
                            <ListItemText
                                primary="Prescriptions & Treatment Plans"
                                secondary="You'll get a customized treatment plan, plus prescriptions sent to your favorite pharmacy."
                            />
                        </ListItem>
                    </List>
                </Grid>

            </Grid>

        </Box>
    );
};

export default FavouriteClinic;