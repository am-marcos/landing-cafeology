import { Header } from "./client/components/Header";
import { Hero } from "./client/components/Home";
import {
  HowItWorks,
  WhyChoose,
  AppPreview,
  FeaturedCafes,
  Testimonials,
  DownloadCTA,
  Footer,
} from "./client/components/Content";

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

      {/* Section 3 – Aperçu de l'application */}
      <AppPreview />

      {/* Section 4 – Cafés à la une */}
      <FeaturedCafes />

      {/* Section 5 – Témoignages */}
      <Testimonials />

      {/* Section 6 – CTA Téléchargement */}
      <DownloadCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
