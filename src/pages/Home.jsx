import { useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSlider from "../components/ProductSlider";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import OfferBanner from "../components/OfferBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import BrandStory from "../components/BrandStory";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import WhatsAppButton from "../components/WhatsAppButton";
import WhatsappModal from "../components/WhatsappModal";
import Footer from "../components/Footer";
import WelcomeModal from "../components/WelcomeModal";

function Home() {
  const [showModal, setShowModal] = useState(true);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <>
      {showModal && <WelcomeModal onClose={closeModal} onSubmit={closeModal} />}
      {showWhatsappModal && <WhatsappModal onClose={() => setShowWhatsappModal(false)} />}
      <TopBar />
      <Navbar />
      <Hero />
      <ProductSlider />
      <Categories />
      <FeaturedProducts />
      <OfferBanner />
      <WhyChooseUs />
      <BrandStory />
      <Testimonials />
      <Gallery />
      <WhatsAppButton onOpen={() => setShowWhatsappModal(true)} />
      <Footer />
    </>
  );
}

export default Home;
