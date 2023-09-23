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

const Landing = () => {
  return (
    <>
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
