import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#1976D2" }, // Blue
        secondary: { main: "#F50057" }, // Pink
        background: { default: "#F9FAFB", paper: "#FFFFFF" },
        text: { primary: "#333333", secondary: "#555555" },
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
        h4: { fontWeight: 600 },
        body1: { fontSize: "1rem" },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    textTransform: "none",
                    transition: "0.3s",
                    "&:hover": {
                        backgroundColor: "#1565C0",
                    },
                },
            },
        },
    },
});

export default theme;