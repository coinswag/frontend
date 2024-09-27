import AboutPage from "@/components/landing-page/about-page/AboutPage";
import Faq from "@/components/landing-page/faq/faq";
import Feature from "@/components/landing-page/feature/feature";
import TopStories from "@/components/landing-page/top-stories/top-stories";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <AboutPage />
      <Feature />
      <TopStories />
      <Faq />
      <Outlet />
    </div>
  );
}
export default LandingPage;
