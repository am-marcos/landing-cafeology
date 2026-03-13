import Image from "next/image";

export function FooterCta() {
  return (
    <section
      style={{
        background: "#ede5d8",
        padding: "72px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <h2
            style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "1.9rem",
              fontWeight: 800,
              color: "#1f2a44",
              marginBottom: "16px",
              lineHeight: 1.3,
            }}
          >
            Prêt à faire décoller votre activité ?
          </h2>
          <p
            style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "0.95rem",
              color: "#444",
              lineHeight: 1.65,
              marginBottom: "28px",
            }}
          >
            Rejoignez le réseau des meilleurs cafés de spécialité et commencez à attirer vos futurs clients dès aujourd&apos;hui.
          </p>
          <button
            style={{
              padding: "14px 32px",
              borderRadius: "999px",
              background: "#FCDF5F",
              color: "#1f2a44",
              fontWeight: 700,
              fontSize: "0.95rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "Nunito Sans, sans-serif",
            }}
          >
            Créer mon compte pro
          </button>
          <div style={{ marginTop: "40px" }}>
            <Image
              src="/images/icon-navbar.svg"
              alt="Cafeology"
              width={130}
              height={30}
              className="h-8 w-auto"
            />
          </div>
        </div>

        {/* Right */}
        <div>
          <p
            style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "0.95rem",
              color: "#9A2425",
              lineHeight: 1.7,
              marginBottom: "28px",
            }}
          >
            Cafeology est le partenaire digital des artisans du café. Notre mission est de valoriser votre savoir-faire et de connecter votre établissement à une communauté de passionnés en quête d&apos;excellence.
          </p>
          <div style={{ display: "flex", gap: "20px", marginBottom: "24px" }}>
            <a
              href="#"
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "0.9rem",
                color: "#9A2425",
                fontWeight: 600,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Instagram
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="#9A2425" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#"
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "0.9rem",
                color: "#9A2425",
                fontWeight: 600,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Facebook
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="#9A2425" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <p
            style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "0.875rem",
              color: "#9A2425",
            }}
          >
            Besoin d&apos;aide ?{" "}
            <a
              href="#"
              style={{ color: "#9A2425", fontWeight: 600, textDecoration: "underline" }}
            >
              Contactez le support
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function FooterBottom() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e5e5",
        padding: "20px 32px",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {["Gestion des cookies", "Mentions légales", "CGU Partenaires", "Politique de confidentialité"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "0.78rem",
                color: "#777",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
        </div>
        <p
          style={{
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: "0.78rem",
            color: "#999",
          }}
        >
          © 2026 Cafeology. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
