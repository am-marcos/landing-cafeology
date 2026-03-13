import Image from "next/image";

export function Footer() {
  return (
    <footer style={{ background: "#F5EBC3", marginTop: "120px", borderRadius: "24px", maxWidth: "1400px", margin: "120px auto 0", padding: "0 0 0 0" }}>
      {/* Contenu principal */}
      <div
        className="w-full max-w-[1400px] mx-auto"
        style={{ paddingTop: "72px", paddingBottom: "56px", paddingLeft: "120px", paddingRight: "80px" }}
      >
        <div className="flex flex-row items-start gap-16">

          {/* Gauche */}
          <div className="flex flex-col" style={{ maxWidth: "480px" }}>
            {/* Logo */}
            <Image
              src="/images/icon-navbar.svg"
              alt="Caféology"
              width={100}
              height={36}
              
        
              style={{ marginBottom: "40px" }}
            />

            {/* Titre */}
            <h1
              style={{
                color: "#3D0F0F",
                fontFamily: "'Proxima Soft Condensed', 'Roboto Condensed', 'Arial Narrow', sans-serif",
                fontSize: "32px",
                fontWeight: 900,
                lineHeight: "120%",
                marginBottom: "30px",
                letterSpacing: "-1px",
              }}
            >
              Ne manquez aucune goutte.
            </h1>
            <h2>Plus de 300 cafés de spécialité vous attendent.</h2>

            {/* Bouton Trouver un café */}
            <button
              style={{
                padding: "10px 22px",
                borderRadius: "999px",
                background: "#FCDF5F",
                color: "#1f2a44",
                fontWeight: 700,
                fontSize: "14px",
                border: "none",
                cursor: "pointer",
                width: "fit-content",
                    marginTop: "24px",
              }}
            >
              Trouver un café
            </button>
          </div>

          {/* Droite */}
          <div className="flex flex-col flex-1" style={{ paddingTop: "8px", paddingLeft: "80px" }}>
            {/* Description */}
            <p
              style={{
                color: "#9A2425",
                fontFamily: "Roboto Mono",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "150%",
                marginBottom: "40px",
                maxWidth: "520px",
              }}
            >
              Caféology est le guide ultime pour les amateurs de café de
              spécialité. Nous vous aidons à dénicher les pépites parisiennes,
              à rencontrer des passionnés et à savourer chaque instant.
            </p>

            {/* Liens réseaux sociaux */}
            <div style={{ display: "flex", gap: "24px", marginBottom: "20px" }}>
              {["Instagram", "Facebook"].map((name) => (
                <a
                  key={name}
                  href="#"
                  style={{
                    color: "#3D0F0F",
                    fontFamily: "Roboto Mono",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {name}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#3D0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>

            {/* Lien partenaire */}
            <a
              href="#"
              style={{
                color: "#3D0F0F",
                fontFamily: "Roboto Mono",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "150%",
                textDecoration: "underline",
              }}
            >
              Vous êtes propriétaire d&apos;un café ? Devenez partenaire →
            </a>
          </div>
        </div>
      </div>

      {/* Barre bas */}
      <div
        style={{
          borderTop: "1px solid rgba(61, 15, 15, 0.15)",
          padding: "20px 64px",
        }}
      >
        <div
          className="w-full max-w-[1400px] mx-auto"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {[
              "Gestion des cookies",
              "Mentions légales",
              "CGU Partenaires",
              "Politique de confidentialité",
            ].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "rgba(61, 15, 15, 0.60)",
                  fontFamily: "Roboto Mono",
                  fontSize: "12px",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </div>
          <span
            style={{
              color: "rgba(61, 15, 15, 0.60)",
              fontFamily: "Roboto Mono",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            © 2026 Caféology. Tous droits réservés.
          </span>
        </div>
      </div>
    </footer>
  );
}
