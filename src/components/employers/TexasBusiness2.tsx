"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const TexasBusinessSection: React.FC = () => {
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                height: "606px",
                backgroundImage: "url('https://www.texicare.com/wp-content/uploads/2024/02/Moving-Product-with-a-Forklift.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
            }}
            id="texas-business"
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "black",
                    opacity: 0.1,
                }}
            />

            {/* Content */}
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10, textAlign: "center", px: { xs: 2, md: 0 } }}>
                <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "77px" }, lineHeight: { xs: "1.2", md: "75px" }, color: "white", textAlign: "left" }}>
                    We know Texas. <br /> We know Texas small business.
                </Typography>
                <Typography sx={{ mt: { xs: 4, md: 14 }, mb: { xs: 4, md: 20 }, fontSize: { xs: "1.25rem", md: "22px" }, lineHeight: { xs: "1.5", md: "33px" }, color: "white", textAlign: "left" }}>
                    Texicare was created by seasoned healthcare <br /> professionals with a deep
                    commitment to our state. <br />
                    We&apos;re a new company with big ambitions for Texas <br /> small business.
                </Typography>
            </Container>
        </section>
    );
};

export default TexasBusinessSection;
