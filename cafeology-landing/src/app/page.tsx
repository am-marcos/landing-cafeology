import { Header } from "./client/components/Header";
import { Hero } from "./client/components/Home";
import {
  HowItWorks,
  WhyChoose,
  FAQ,
  MapSection,
  DownloadSection,
} from "./client/components/Content";
import { Footer } from "./client/components/Footer";

export default function Home() {
  return (
    <div style={{ position: "relative", backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <Header />
      <div style={{ paddingTop: "25px" }} />

      {/* Hero */}
      <Hero />

      {/* Section 1 – Comment ça marche ? */}
      <HowItWorks />

      {/* Section 2 – Pourquoi choisir Caféology ? */}
      <WhyChoose />

      {/* Section 3 – FAQ */}
      <FAQ />

      {/* Section 4 – Carte Paris */}
      <MapSection />

      {/* Section 5 – Télécharger l'app */}
      <DownloadSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
