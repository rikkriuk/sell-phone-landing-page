import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import SupportedDevices from "../components/SupportedDevice";
import { Products } from "../components/Products";
import Location from "../components/Location";
import FinalCTA from "../components/FinalCTA";

const SellPhone = () => {
   return (
      <>
         <div id="hero">
            <Hero />
         </div>

         <SupportedDevices />

         <HowItWorks />

         <div id="why-choose-us">
            <WhyChooseUs />
         </div>

         <div id="products">
            <Products />
         </div>

         <div id="testimonials">
            <Testimonials />
         </div>

         <div id="location">
            <Location />
         </div>

         <FinalCTA />
      </>
   )
}

export default SellPhone;