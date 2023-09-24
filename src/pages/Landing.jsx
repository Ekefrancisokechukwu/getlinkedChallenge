import {
  AwardSection,
  CriteriaSection,
  FaqsSection,
  Footer,
  GuildLineSection,
  Header,
  Hero,
  IntroSection,
  Menu,
  Partners,
  PrivacySection,
  TimeLineSection,
} from "../components";
import { useNavigation } from "react-router-dom";


const Landing = () => {
   const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";
  return (
    <>
       {isNavigating && (
        <div className="fixed z-[40] top-0 left-0 w-screen h-screen bg-main/70">
          <div className="h-5 w-5  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-b-2 border-gray-100"></div>
        </div>
      )}
      <Menu />
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <GuildLineSection />
        <CriteriaSection />
        <FaqsSection />
        <TimeLineSection />
        <AwardSection />
        <Partners />
        <PrivacySection />
        <Footer />
      </main>
    </>
  );
};
export default Landing;
