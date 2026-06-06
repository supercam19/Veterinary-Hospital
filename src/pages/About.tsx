import { Box, Container, Divider, Typography } from "@mui/material";

const TEAM = [
    {
        name: "Dr. Sarah Mitchell",
        role: "Lead Veterinarian",
        bio: "With over 15 years of experience in small animal medicine, Dr. Mitchell leads our clinical team with a passion for preventive care and client education. She completed her DVM at the Ontario Veterinary College.",
        image: "/vet3.jpg",
    },
    {
        name: "Dr. James Okafor",
        role: "Surgical Specialist",
        bio: "Dr. Okafor specializes in soft tissue and orthopedic surgery. He brings a calm, precise approach to complex procedures and has performed over 2,000 successful surgeries throughout his career.",
        image: "/vet1.jpg",
    },
    {
        name: "Dr. Priya Nair",
        role: "Emergency & Critical Care",
        bio: "Dr. Nair heads our 24/7 emergency department. Her background in critical care medicine means your pet is in expert hands no matter the hour. She is fluent in English, French, and Tamil.",
        image: "/vet2.jpg",
    },
];

export function About() {
    return (
        <Box
            sx={{
                minHeight: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" },
                backgroundColor: (theme) => theme.brand.light,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: { xs: "260px", sm: "380px", md: "480px" },
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <Box
                    component="img"
                    src="/banner.jpg"
                    alt="Cedarvale Veterinary Hospital exterior"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        display: "block",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.45) 100%)",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: { xs: 20, sm: 32 },
                        left: { xs: 20, sm: 48 },
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            color: "#ffffff",
                            fontFamily: "'Georgia', serif",
                            fontWeight: 700,
                            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
                            textShadow: "0 2px 12px rgba(0,0,0,0.4)",
                        }}
                    >
                        About Us
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: { xs: 4, md: 8 },
                        mb: { xs: 6, md: 10 },
                    }}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "'Georgia', serif",
                                fontWeight: 700,
                                color: (theme) => theme.brand.darkblue,
                                mb: 2,
                            }}
                        >
                            Caring for Cedarvale's Pets Since 1998
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.primary", mb: 2 }}>
                            Cedarvale Veterinary Hospital was founded with one goal in mind: to provide
                            compassionate, expert-level care for every animal that walks through our doors.
                            Nestled in the heart of Cedarvale, we have grown from a small two-room clinic
                            into a full-service veterinary hospital serving thousands of families across
                            the city.
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.primary" }}>
                            We offer a comprehensive range of services including wellness exams, dentistry,
                            diagnostic imaging, soft tissue surgery, and 24/7 emergency care. Our team
                            believes that pets are family, and we treat them accordingly — with patience,
                            skill, and genuine warmth.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "'Georgia', serif",
                                fontWeight: 700,
                                color: (theme) => theme.brand.darkblue,
                                mb: 2,
                            }}
                        >
                            Our Commitment
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.primary", mb: 2 }}>
                            At Cedarvale, we hold ourselves to the highest standards of veterinary medicine.
                            Our facility is equipped with state-of-the-art diagnostic technology, including
                            digital radiography, in-house laboratory services, and advanced surgical suites.
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.primary" }}>
                            We are proud members of the Ontario Veterinary Medical Association and are
                            committed to continued education, ensuring our team stays at the forefront of
                            modern veterinary practice. Your pet deserves nothing less.
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ mb: { xs: 6, md: 10 }, borderColor: "rgba(0,0,0,0.1)" }} />

                <Box sx={{ mb: { xs: 6, md: 10 } }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: "'Georgia', serif",
                            fontWeight: 700,
                            color: (theme) => theme.brand.darkblue,
                            mb: 1,
                        }}
                    >
                        Meet the Team
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
                        The people behind every wag, purr, and recovery.
                    </Typography>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
                            gap: { xs: 4, md: 5 },
                        }}
                    >
                        {TEAM.map((member) => (
                            <Box key={member.name}>
                                <Box
                                    component="img"
                                    src={member.image}
                                    alt={member.name}
                                    sx={{
                                        width: "100%",
                                        aspectRatio: "1 / 1",
                                        objectFit: "cover",
                                        borderRadius: "4px",
                                        display: "block",
                                        mb: 2,
                                        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: 700,
                                        fontFamily: "'Georgia', serif",
                                        color: (theme) => theme.brand.darkblue,
                                    }}
                                >
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: (theme) => theme.brand.blue,
                                        fontWeight: 600,
                                        mb: 1,
                                        fontSize: "0.8rem",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    {member.role}
                                </Typography>
                                <Typography variant="body2" sx={{ lineHeight: 1.7, color: "text.secondary" }}>
                                    {member.bio}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Divider sx={{ mb: { xs: 6, md: 10 }, borderColor: "rgba(0,0,0,0.1)" }} />

                <Box sx={{ mb: { xs: 6, md: 8 } }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: "'Georgia', serif",
                            fontWeight: 700,
                            color: (theme) => theme.brand.darkblue,
                            mb: 1,
                        }}
                    >
                        Find Us
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
                        123 Cedarvale Avenue, Toronto, ON M4N 2X8 &nbsp;·&nbsp; Open 24/7
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            height: { xs: "260px", sm: "380px" },
                            borderRadius: "4px",
                            overflow: "hidden",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1401.2865261888007!2d-79.43199446246821!3d43.696112755700604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3382d1cf51db%3A0xeea930b7d229e1de!2sHumewood-Cedarvale%2C%20York%2C%20ON!5e0!3m2!1sen!2sca!4v1780712643491!5m2!1sen!2sca"
                            width="100%"
                            height="100%"
                            style={{ border: 0, display: "block" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}