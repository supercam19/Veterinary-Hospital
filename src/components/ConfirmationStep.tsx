import { Box, Typography } from "@mui/material";

interface ConfirmationStepProps {
    title: string;
    subtitle?: string;
}

export default function ConfirmationStep({ title, subtitle }: ConfirmationStepProps) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                py: 4,
                gap: 2,
            }}
        >
            <Box
                component="img"
                src="/checkmark.png"
                alt="Order confirmed"
                sx={{ width: 120, height: 120, objectFit: "contain" }}
            />
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.25rem" }}>
                    {title}
                </Typography>
                {subtitle && (
                    <Typography variant="body2" sx={{ mt: 0.5, color: "text.secondary" }}>
                        {subtitle}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}