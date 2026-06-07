import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

const NAV_ITEMS = [
    { label: "Home", path: "/" },
    { label: "Appointment Booking", path: "/booking" },
    { label: "Order Medication", path: "/medication" },
    { label: "About Us", path: "/about" },
];

export function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: (theme: any) => theme.brand.darkblue,
                borderBottom: "2px solid",
                borderColor: "rgba(100, 140, 220, 0.5)",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    minHeight: { xs: "56px", sm: "64px" },
                    px: { xs: 2, sm: 3 },
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                        component="img"
                        src="/paw.png"
                        alt="Paw icon"
                        sx={{ width: 28, height: 28, objectFit: "contain" }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#ffffff",
                            fontFamily: "'Helvetica Neue', Arial, sans-serif",
                            fontWeight: 500,
                            fontSize: { xs: "0.95rem", sm: "1.2rem" },
                            whiteSpace: "nowrap",
                        }}
                    >
                        Cedarvale Veterinary Hospital
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "stretch" }}>
                    {NAV_ITEMS.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <Box
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    alignItems: "center",
                                    px: { xs: 1.5, sm: 2 },
                                    cursor: "pointer",
                                    color: "#ffffff",
                                    fontFamily: "'Helvetica Neue', Arial, sans-serif",
                                    fontSize: { xs: "0.85rem", sm: "0.95rem" },
                                    fontWeight: isActive ? 600 : 400,
                                    whiteSpace: "nowrap",
                                    userSelect: "none",
                                    transition: "opacity 0.2s",
                                    "&:hover": {
                                        opacity: 0.8,
                                    },
                                    ...(isActive && {
                                        "&::before": {
                                            content: '""',
                                            position: "absolute",
                                            top: "25%",
                                            bottom: "25%",
                                            left: 0,
                                            right: 0,
                                            borderLeft: "1px solid rgba(255,255,255,0.4)",
                                            borderRight: "1px solid rgba(255,255,255,0.4)",
                                            pointerEvents: "none",
                                        },
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: "32px",
                                            background:
                                                "linear-gradient(to top, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%)",
                                            pointerEvents: "none",
                                        },
                                    }),
                                }}
                            >
                                {item.label}
                            </Box>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
}