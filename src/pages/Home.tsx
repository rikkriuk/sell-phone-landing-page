import { useState } from "react";
import CounterHero from "../components/Counter";
import { OurServices } from "../components/OurServices";

const Home = () => {
   const [currentPage, setCurrentPage] = useState<'counter' | 'buyback'>('counter');
   
   const navigateToBuyback = () => {
      setCurrentPage('buyback');
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
      </>
   )
}

export default Home;