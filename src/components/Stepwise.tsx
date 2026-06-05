import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

interface StepwiseProps {
    title: string;
    steps: string[];
    children: React.ReactNode[];
    canProceed: () => boolean;
    onStep: (isLast: boolean) => void;
}

export default function Stepwise({ title, steps, children, canProceed, onStep, }: Readonly<StepwiseProps>) {
    const [activeStep, setActiveStep] = useState(0);

    const isFirst = activeStep === 0;
    const isLast = activeStep === steps.length - 1;
    const isSecondLast = activeStep === steps.length -2;

    const handleNext = () => {
        onStep(isLast);
        if (!isLast) {
            setActiveStep((prev) => prev + 1);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                minHeight: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" },
                backgroundImage: "url('/prints.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Box
                sx={{
                    width: { xs: "220px", md: "280px" },
                    flexShrink: 0,
                    backgroundColor: (theme) => theme.brand.lightblue,
                    display: "flex",
                    flexDirection: "column",
                    py: 4,
                    gap: 1,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: "#ffffff",
                        fontWeight: 700,
                        fontSize: { xs: "1rem", md: "1.15rem" },
                        mb: 3,
                    }}
                >
                    {title}
                </Typography>
                
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: 1,
                        gap: 1,
                    }}
                >
                    {steps.map((step, index) => {
                        const isActive = index === activeStep;
                        return (
                            <Box
                                key={index}
                                sx={{
                                    paddingLeft: 1.5,
                                    py: 1.25,
                                    backgroundColor: isActive
                                        ? (theme) => theme.brand.blue
                                        : "transparent",
                                    transition: "background-color 0.2s",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#ffffff",
                                        fontWeight: isActive ? 600 : 400,
                                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                                        textAlign: "left",
                                    }}
                                >
                                    {index + 1}.&nbsp;&nbsp;{step}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: { xs: 2, sm: 4 },
                }}
            >
                <Box
                    sx={{
                        backgroundColor: (theme) => theme.brand.light,
                        borderRadius: "4px",
                        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.35)",
                        width: "100%",
                        maxWidth: "660px",
                        display: "flex",
                        flexDirection: "column",
                        p: { xs: 3, sm: 4 },
                        gap: 3,
                    }}
                >
                    {activeStep !== steps.length - 1 && <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            fontSize: {xs: "1.1rem", sm: "1.25rem"},
                            textAlign: "center",
                            mb: 1,
                            color: "black",
                        }}
                    >
                        Please Fill in the Information Below
                    </Typography>}

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {children[activeStep]}
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: isFirst ? "flex-end" : "space-between",
                            mt: 1,
                        }}
                    >
                        {/* !isFirst && (
                            <Button
                                onClick={handleBack}
                                variant="contained"
                                sx={{
                                    backgroundColor: (theme) => theme.brand.lightblue,
                                    color: "#ffffff",
                                    textTransform: "none",
                                    fontWeight: 400,
                                    px: 4,
                                    boxShadow: "none",
                                    "&:hover": {
                                        backgroundColor: (theme) => theme.darkened.lightblue,
                                        opacity: 0.85,
                                        boxShadow: "none",
                                    },
                                }}
                            >
                                Back
                            </Button>
                        ) */}
                        <Button
                            onClick={handleNext}
                            variant="contained"
                            disabled={!canProceed()}
                            sx={{
                                backgroundColor: (theme) => theme.brand.lightblue,
                                color: "#ffffff",
                                textTransform: "none",
                                fontWeight: 400,
                                px: 4,
                                boxShadow: "none",
                                "&:hover": {
                                    backgroundColor: (theme) => theme.darkened.lightblue,
                                    opacity: 0.85,
                                    boxShadow: "none",
                                },
                            }}
                        >
                            {(() => {
                                if (isLast) return "Return Home";
                                if (isSecondLast) return "Submit";
                                return "Next";
                            })()}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}