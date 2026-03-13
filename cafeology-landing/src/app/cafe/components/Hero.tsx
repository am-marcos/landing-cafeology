import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="w-full flex items-start justify-center pt-6">
      <div className="w-full max-w-[1400px] px-4">
        <div
          style={{ borderRadius: "2rem", height: "720px", position: "relative", overflow: "hidden" }}
          className="w-full shadow-[0_8px_32px_rgba(0,0,0,0.10)] bg-[#ede5d8]"
        >
          <Image
            src="/images/fond-cafeology.svg"
            alt="Café partenaire Cafeology"
            fill
            priority
            className="object-cover object-center"
          />

          <div style={{ position: "absolute", inset: 0, background: "rgba(255, 255, 255, 0.12)" }} />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) -60%, rgba(0, 0, 0, 0.42) 106.25%)",
            }}
          />

          <div
            className="absolute inset-0 flex items-center justify-center text-center"
            style={{ transform: "translateY(24px)" }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "740px",
                padding: "0 24px",
              }}
            >
              <h1
                style={{
                  color: "#fff",
                  fontSize: "2.75rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "20px",
                  fontFamily: "Nunito Sans, sans-serif",
                }}
              >
                Votre savoir-faire mérite d'être reconnu par les vrais amateurs.
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "1.05rem",
                  marginBottom: "36px",
                  lineHeight: 1.65,
                  fontFamily: "Nunito Sans, sans-serif",
                }}
              >
                La plateforme tout-en-un pour gérer votre visibilité, attirer une clientèle qualifiée et fidéliser votre communauté.
              </p>
              <button
                style={{
                  padding: "14px 36px",
                  borderRadius: "999px",
                  background: "#FCDF5F",
                  color: "#1f2a44",
                  fontWeight: 700,
                  fontSize: "1rem",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Nunito Sans, sans-serif",
                }}
              >
                Devenir partenaire
              </button>
              <p
                style={{
                  color: "rgba(255,255,255,0.70)",
                  fontSize: "0.875rem",
                  marginTop: "20px",
                  fontFamily: "Nunito Sans, sans-serif",
                }}
              >
                Déjà plus de 500 cafés de spécialité nous font confiance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
