'use client';
import React, { useEffect, useRef } from 'react';
import { Grid, Box, Typography, Card, CardContent, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import gsap from 'gsap';

// Card data type
interface CardItem {
  title: string;
  description: string;
}

// Sample card content
const cardData: CardItem[] = [
  { title: 'Card One', description: 'This is the first card.' },
  { title: 'Card Two', description: 'This is the second card.' },
  { title: 'Card Three', description: 'This is the third card.' },
  { title: 'Card Four', description: 'This is the fourth card.' },
];

// Function to return border radius styles
const getBorderRadius = (index: number, length: number): string => {
  if (index === 0) return '8px 0 0 8px';
  if (index === length - 1) return '0 8px 8px 0';
  return '0';
};

// Reusable Card component
const LovedCard: React.FC<CardItem & { index: number; length: number }> = ({
  title,
  description,
  index,
  length,
}) => (
  <Grid
    item
    xs={12}
    sm={6}
    md={3}
    sx={{
      borderRight: index !== length - 1 ? '1px solid #00bcd4' : 'none',
      borderRadius: getBorderRadius(index, length),
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Card
      tabIndex={-1}
      sx={{
        width: 300,
        height: 340,
        backgroundColor: 'transparent',
        color: '#fff',
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        px: 3,
        py: 4,
        textAlign: 'center',
        transition: 'all 0.3s ease-in-out',
        outline: 'none',
        cursor: 'pointer',
        position: 'relative',
        border: 'none',
        '&:hover': {
          backgroundColor: '#222',
          transform: 'scale(1.05)',
          borderColor: '#00bcd4',
          boxShadow: '0 0 10px #00bcd4',
          zIndex: 10,
        },
        '&:hover .hover-btn': {
          opacity: 1,
          transform: 'translateY(0)',
        },
      }}
    >
      <StarIcon
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          color: '#ffeb3b',
          fontSize: '1.5rem',
        }}
      />
      <CardContent sx={{ padding: 0, mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" mb={2}>
          {description}
        </Typography>
      </CardContent>
      <Box
        className="hover-btn"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          opacity: 0,
          transform: 'translateY(10px)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="small"
          endIcon={<ArrowForwardIosIcon />}
          aria-label={`View details about ${title}`}
        >
          View
        </Button>
      </Box>
    </Card>
  </Grid>
);

// Main LovedSection component
const LovedSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        py: 8,
        px: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Loved by the best data teams
      </Typography>
      <Typography variant="body1" mb={6}>
        Hex helps companies of all sizes do more with their data.
      </Typography>

      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{
          width: '100%',
          maxWidth: 1240,
          mx: 'auto',
          border: '1px solid #00bcd4',
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: '#121212',
        }}
      >
        {cardData.map((card, index) => (
          <LovedCard
            key={index}
            title={card.title}
            description={card.description}
            index={index}
            length={cardData.length}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default LovedSection;
