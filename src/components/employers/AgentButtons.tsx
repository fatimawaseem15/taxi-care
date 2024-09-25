"use client";
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const InfoSection = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#f15a25',
        marginTop: '2.5rem',
        color: 'white',
        py: 10,
        px: { xs: 5, sm: 10 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        variant="outlined"
        sx={{
          mb: { xs: 5, md: 0 },
          borderRadius: '50px',
          color: '#f15a25',
          backgroundColor: 'white',
          fontWeight: 'bold',
          border: '2px solid white',
          px: 10,
          py: 3,
          fontFamily: 'Avenir, sans-serif',
          ml: { md: 10 },
          '&:hover': {
            backgroundColor: '#f15a25',
            color: 'white',
          },
        }}
      >
        LEARN MORE ABOUT <br /> LEVEL-FUNDED COVERAGE
      </Button>

      <Typography
        sx={{
          color: 'white',
          maxWidth: '32rem',
          fontSize: '1.25rem',
          ml: { md: 20 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        With level-funded plans, employers get fixed monthly payments, visibility into ongoing claims, and a refund if there’s a surplus. All of the plans above are level-funded plans.
      </Typography>
    </Box>
  );
};

export default InfoSection;
