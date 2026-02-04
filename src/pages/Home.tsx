import { useState } from "react";
import CounterHero from "../components/Counter";
import { OurServices } from "../components/OurServices";
import ServiceSection from "../components/ServiceSection";
import BuySellSection from "../components/BuySellSection";
import SparepartSection from "../SparepartSection";
import CounterWhyChooseUs from "../components/CounterWhyChooseUs";
import Testimonials from "../components/Testimonials";
import Location from "../components/Location";
import FinalCTA from "../components/FinalCTA";
import { CTAHomeData } from "../const/cta";
import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();

   const navigateToBuyback = () => {
      navigate('jual-hp');
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };
   
   return (
      <>
         <div id="hero">
            <CounterHero />
         </div>

         <div id="services">
            <OurServices onBuySellClick={navigateToBuyback} />
         </div>

         <ServiceSection />

         <BuySellSection onViewBuybackPage={navigateToBuyback} />

         <SparepartSection />

         <CounterWhyChooseUs />

         <div id="testimonials">
            <Testimonials />
         </div>

         <div id="location">
            <Location />
         </div>

         <FinalCTA {...CTAHomeData} />
      </>
   )
}

export default Home;