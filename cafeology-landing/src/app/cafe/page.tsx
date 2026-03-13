import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Partners, Boostez, HowToJoin, Pricing } from "./components/Content";
import { FooterCta, FooterBottom } from "./components/Footer";

export default function CafePage() {
  return (
    <div style={{ position: "relative", backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <Header />
      <div style={{ paddingTop: "25px" }} />

      {/* Hero */}
      <Hero />

      {/* Logos partenaires industrie */}
      <Partners />

      {/* Fonctionnalités */}
      <Boostez />

      {/* Comment devenir partenaire */}
      <HowToJoin />

      {/* Tarifs */}
      <Pricing />

      {/* Footer CTA */}
      <FooterCta />

      {/* Footer bas de page */}
      <FooterBottom />
    </div>
  );
}
