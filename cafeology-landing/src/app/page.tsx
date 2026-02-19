import { Header } from "./client/components/Header";
import { Hero } from "./client/components/Home";
import { HowItWorks, WhyChoose } from "./client/components/Content";

export default function Home() {
  return (
    <div style={{ position: "relative", backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <Header />
      <div style={{ paddingTop: "25px" }}></div>
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <main className="min-h-screen">
        {/* Contenu à venir */}
      </main>
    </div>
  );
}
