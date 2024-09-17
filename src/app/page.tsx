"use client";
import React from 'react'; 
import EmpolyerHero from '@/components/employers/EmpolyerHero';
import Features from '@/components/employers/Features';
import EmBusinessHealth from '@/components/employers/EmBusinessHealth';
import AgentButtons from '@/components/employers/AgentButtons';
import CarePlansSection from '@/components/employers/CarePlansSection';
import TexasBusiness2 from '@/components/employers/TexasBusiness2';
import DNASection from '@/components/employers/DNASection';

const Empolyers = () => {
  return (
    <>
      <EmpolyerHero />
      <Features />
      <EmBusinessHealth />
      <AgentButtons />
      <CarePlansSection />
      <TexasBusiness2 />
      <DNASection />
      <AgentButtons />
    </>
  )
}

export default Empolyers
