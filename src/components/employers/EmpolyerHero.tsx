"use client";
import { Button, Container, Typography } from '@mui/material';

const EmpolyerHero = () => {
  return (
    <div className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://www.texicare.com/wp-content/uploads/2024/02/Warehouse-Birds-Eye-View.jpg")' }}>
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"> */}
      <Container maxWidth="lg">
        <div className="text-center text-white px-4 md:px-10 py-20  md:py-40">
          <Typography variant="h3" component="h1" className=" mb-5 md:text-7xl">
            Your business is only as healthy as the people in it.
          </Typography>
          <Typography variant="body1" className="mb-6 text-xl">
            Sick days and loss of productivity can affect your bottom line. Get in touch with an agent to find healthcare coverage that helps you take care of your employees and your business.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"

            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 font-bold rounded-full"
          >
            Find an Agent
          </Button>
        </div>
      </Container>
      {/* </div> */}
    </div>
  );
};

export default EmpolyerHero;

