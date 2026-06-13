import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import HeroSection1 from "../components/HeroSection1";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import OfferBanner from "../components/OfferBanner";
import WhyChooseUs from "../components/WhyChooseUs";
import BrandStory from "../components/BrandStory";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection1 />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <OfferBanner />
      <WhyChooseUs />
      <BrandStory />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;
