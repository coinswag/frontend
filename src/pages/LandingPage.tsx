import AboutPage from "@/components/landing-page/AboutPage";
import Faq from "@/components/landing-page/faq/FaqSection";
import Feature from "@/components/landing-page/feature/Feature";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/navbar/NavBar";
import TopStories from "@/components/landing-page/top-stores/TopStores";
import Footer from "@/components/landing-page/footer";
import GetStarted from "@/components/landing-page/GetStarted";
import TopMerches from "@/components/landing-page/top-merches/TopMerches";
import Review from "@/components/landing-page/Review";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutPage />
      <Feature />
      <TopStories />
      <TopMerches />
      <Review />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
}
export default LandingPage;
