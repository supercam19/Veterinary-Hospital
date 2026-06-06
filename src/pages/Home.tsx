import { Box, Button, Container, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";

export function Home() {
    const navigate = useNavigate();
    
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                minHeight: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                backgroundImage: "url('/hero.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                margin: "0 auto",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                }}
            />

            <Container
                maxWidth="md"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    px: { xs: 2, sm: 4, md: 6 },
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                        fontWeight: 700,
                        fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                        lineHeight: 1.15,
                        color: "#ffffff",
                        mb: { xs: 2, md: 3 },
                        letterSpacing: "-0.01em",
                    }}
                >
                    Expert Care When it Matters Most
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: "'Helvetica Neue', Arial, sans-serif",
                        fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                        color: "#ffffff",
                        mb: { xs: 4, md: 5 },
                        maxWidth: "520px",
                        mx: "auto",
                        lineHeight: 1.6,
                        fontWeight: 400,
                    }}
                >
                    Cedarvale's local veterinary hospital, providing your pets with 24/7
                    veterinary care
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: { xs: 2, sm: 2.5 },
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate("/booking")}
                        sx={{
                            backgroundColor: (theme) => theme.brand.light,
                            color: "#1a1a1a",
                            fontFamily: "'Helvetica Neue', Arial, sans-serif",
                            fontWeight: 600,
                            fontSize: { xs: "0.95rem", sm: "1rem" },
                            textTransform: "none",
                            px: { xs: 4, sm: 5 },
                            py: { xs: 1.5, sm: 1.75 },
                            borderRadius: "4px",
                            minWidth: { xs: "200px", sm: "180px" },
                            boxShadow: "2px 2px rgba(0,0,0,0.5)",
                            "&:hover": {
                                backgroundColor: (theme) => theme.darkened.light,
                                boxShadow: "none",
                            },
                        }}
                    >
                        Book Appointment
                    </Button>

                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate("/medication")}
                        sx={{
                            backgroundColor: (theme) => theme.brand.lightblue,
                            color: "#ffffff",
                            fontFamily: "'Helvetica Neue', Arial, sans-serif",
                            fontWeight: 600,
                            fontSize: { xs: "0.95rem", sm: "1rem" },
                            textTransform: "none",
                            px: { xs: 4, sm: 5 },
                            py: { xs: 1.5, sm: 1.75 },
                            borderRadius: "4px",
                            minWidth: { xs: "200px", sm: "180px" },
                            boxShadow: "2px 2px rgba(0,0,0,0.5)",
                            "&:hover": {
                                backgroundColor: (theme) => theme.darkened.lightblue,
                                boxShadow: "none",
                            },
                        }}
                    >
                        Medication Refill
                    </Button>
                </Box>
                <Typography
                    sx={{
                        fontFamily: "'Helvetica Neue', Arial, sans-serif",
                        fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                        color: "#ffffff",
                        mt: { xs: 3, md: 4 },
                        fontWeight: 400,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    contact@cedarvalevet.com · 123-456-7890 · 123 Ava Rd, Cedarvale
                </Typography>
            </Container>
        </Box>
    );
}
