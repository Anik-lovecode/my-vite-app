import React from 'react'
import TopBar from "../components/TopBar";
import LogoSection from "../components/LogoSection";
import HeroBanner from "../components/HeroBanner";
import AboutSection from "../components/AboutSection";
import NewsSection from "../components/NewsSection";
import FAQSection from "../components/FAQSection";
import PowerSection from "../components/PowerSection";
import MapSection from "../components/MapSection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
import NewsBar from '../components/NewsBar';
import Info from '../components/Info';


const Home = () => {
  return (
    <div>

    <TopBar />
    <LogoSection />
    <HeroBanner /> 
    <NewsBar/> 
    <AboutSection />
    <NewsSection />
    <Info/>
    <GallerySection />
    <FAQSection />
    {/*<PowerSection />    */}
    
    <MapSection />
    
    <Footer />
    
    </div>
  )
}

export default Home