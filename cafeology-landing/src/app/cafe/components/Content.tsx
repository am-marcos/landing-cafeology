import Image from "next/image";

// ─── Partners ────────────────────────────────────────────────────────────────

export function Partners() {
  return (
    <section style={{ padding: "64px 32px 0" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            borderBottom: "1px solid #e5e5e5",
            paddingBottom: "56px",
          }}
        >
          <p
            style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#1f2a44",
              marginBottom: "40px",
              letterSpacing: "0.02em",
            }}
          >
            Une plateforme alignée avec les standards de l&apos;industrie.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "56px",
              flexWrap: "wrap",
            }}
          >
            <img
              src="/images/icone-association-coffee.svg"
              alt="Specialty Coffee Association"
              width={148}
              height={101}
            />
            <Image src="/images/icone-fairetrade.svg" alt="Fairtrade" width={80} height={80} />
            <Image src="/images/icon-AB.svg" alt="Agriculture Biologique" width={80} height={80} />
            <Image src="/images/icon-for-planet.svg" alt="1% for the Planet" width={80} height={80} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Boostez votre activité ──────────────────────────────────────────────────

const features = [
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="32" fill="#9FC549" />
        <path d="M20 33l8 8 16-16" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Visibilité qualifiée",
    desc: "Ne payez plus pour des clics inutiles. Soyez visible uniquement auprès d'amateurs qui cherchent vraiment du café de spécialité.",
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="32" fill="#EA753F" />
        <rect x="22" y="16" width="20" height="32" rx="3" stroke="white" strokeWidth="2.5" fill="none" />
        <rect x="26" y="42" width="12" height="2" rx="1" fill="white" />
        <rect x="28" y="20" width="8" height="14" rx="1" fill="white" />
      </svg>
    ),
    title: "Image de marque",
    desc: "Mettez en avant vos grains, votre équipement (Marzocco, Slayer...) et vos baristas. Votre fiche est votre vitrine digitale.",
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="32" fill="#100A0D" />
        <polyline points="16,40 26,28 34,34 48,18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <polyline points="42,18 48,18 48,24" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: "Communauté engagée",
    desc: "Recevez des avis constructifs basés sur les standards SCA, et construisez une relation durable avec une clientèle passionnée.",
  },
];

export function Boostez() {
  return (
    <section id="fonctionnalites" style={{ padding: "80px 32px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: "2rem",
            fontWeight: 800,
            color: "#1f2a44",
            marginBottom: "12px",
          }}
        >
          Boostez votre activité
        </h2>
        <p
          style={{
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: "1rem",
            color: "#9A2425",
            fontWeight: 600,
            marginBottom: "56px",
          }}
        >
          Les outils indispensables pour développer votre notoriété.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
          }}
        >
          {features.map((f) => (
            <div key={f.title} className="cafe-feature-card" style={{ textAlign: "center", padding: "0 16px" }}>
              <div className="cafe-feature-icon" style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                {f.icon}
              </div>
              <h3
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#1f2a44",
                  marginBottom: "12px",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: "0.9rem",
                  color: "#555",
                  lineHeight: 1.65,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Comment devenir partenaire ──────────────────────────────────────────────

const steps = [
  {
    number: "1",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="26" fill="white" />
        <rect x="16" y="12" width="20" height="26" rx="2" stroke="#1f2a44" strokeWidth="2" fill="none" />
        <line x1="20" y1="20" x2="32" y2="20" stroke="#1f2a44" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="25" x2="32" y2="25" stroke="#1f2a44" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="30" x2="28" y2="30" stroke="#1f2a44" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Inscription",
    desc: "Remplissez le formulaire en 2 minutes avec votre K-bis.",
  },
  {
    number: "2",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="26" fill="white" />
        <circle cx="26" cy="26" r="12" stroke="#1f2a44" strokeWidth="2" fill="none" />
        <path d="M20 26l4 4 8-8" stroke="#1f2a44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Personnalisation",
    desc: "Ajoutez vos photos, votre menu et présentez votre équipe.",
  },
  {
    number: "3",
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="26" r="26" fill="white" />
        <path
          d="M26 14l3 8h8l-6.5 5 2.5 8L26 30l-7 5 2.5-8L15 22h8z"
          stroke="#1f2a44"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    title: "Visibilité",
    desc: "Votre établissement est instantanément visible auprès de milliers d'amateurs.",
  },
];

export function HowToJoin() {
  return (
    <section
      style={{
        padding: "80px 32px",
        background: "#F5EBC3",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: "2rem",
            fontWeight: 800,
            color: "#1f2a44",
            marginBottom: "12px",
          }}
        >
          Comment devenir partenaire ?
        </h2>
        <p
          style={{
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: "1rem",
            color: "#9A2425",
            fontWeight: 600,
            marginBottom: "64px",
          }}
        >
          Un processus simple et rapide en 3 étapes
        </p>

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
            alignItems: "start",
          }}
        >
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "26px",
              left: "16.66%",
              right: "16.66%",
              height: "1px",
              background: "rgba(31, 42, 68, 0.18)",
              zIndex: 0,
            }}
          />
          {steps.map((s) => (
            <div key={s.number} className="cafe-step" style={{ textAlign: "center", padding: "0 16px", position: "relative" }}>
              {/* Number background */}
              <div
                style={{
                  position: "absolute",
                  top: "34px",
                  left: "calc(50% + 42px)",
                  transform: "none",
                  fontSize: "3.2rem",
                  fontWeight: 900,
                  color: "rgba(31,42,68,0.10)",
                  fontFamily: "Nunito Sans, sans-serif",
                  lineHeight: 0.9,
                  zIndex: 0,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {s.number}
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="cafe-step-icon" style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#1f2a44",
                    marginBottom: "12px",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontSize: "0.9rem",
                    color: "#555",
                    lineHeight: 1.65,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────

function CheckIcon({ color = "#1f2a44" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M3 8l4 4 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const basicFeatures = [
  "Profil café basique",
  "Horaires et coordonnées",
  "3 photos maximum",
  "Apparition sur la carte",
  "Réponses aux avis",
];

const premiumFeatures = [
  "Tout du plan Basic",
  "Photos illimitées",
  "Menu détaillé avec origines",
  "Mise en avant prioritaire",
  "Analytics avancées",
  "Événements et promotions",
  'Badge "Recommandé"',
];

const proFeatures = [
  "Tout du plan Premium",
  "Support prioritaire 7j/7",
  "Campagnes marketing dédiées",
  "Page personnalisée",
  "Intégration réservation",
  "API & données en temps réel",
  "Formation équipe",
];

export function Pricing() {
  return (
    <section id="tarifs" style={{ padding: "80px 32px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: "2rem",
            fontWeight: 800,
            color: "#1f2a44",
            marginBottom: "12px",
          }}
        >
          Choisissez votre formule
        </h2>
        <p
          style={{
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: "0.9rem",
            color: "#777",
            marginBottom: "56px",
          }}
        >
          Sans engagement &bull; Résiliable à tout moment &bull; Changement de plan possible
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* Basic */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "16px",
              padding: "24px 18px",
              textAlign: "left",
              boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
              display: "flex",
              flexDirection: "column",
              minHeight: "560px",
            }}
          >
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "2rem", fontWeight: 800, color: "#2d0f12", marginBottom: "2px" }}>
              Basic
            </p>
            <p style={{ fontFamily: "Roboto Mono", fontSize: "0.75rem", color: "#7f7f7f", marginBottom: "18px" }}>
              Pour commencer et tester Cafeology
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "2.8rem", fontWeight: 900, color: "#2d0f12", marginBottom: "14px", lineHeight: 1 }}>
              Gratuit
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {basicFeatures.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Roboto Mono", fontSize: "0.73rem", color: "#2f2f2f" }}>
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>
            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "999px",
                background: "#100A0D",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.8rem",
                border: "none",
                cursor: "pointer",
                fontFamily: "Nunito Sans, sans-serif",
                marginTop: "auto",
              }}
            >
              Commencer gratuitement
            </button>
          </div>

          {/* Premium */}
          <div style={{ position: "relative" }}>
            {/* Badge */}
            <div
              style={{
                position: "absolute",
                top: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#FCDF5F",
                color: "#1f2a44",
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "0.64rem",
                fontWeight: 700,
                padding: "3px 12px",
                borderRadius: "999px",
                whiteSpace: "nowrap",
                zIndex: 1,
              }}
            >
              Le plus populaire
            </div>
            <div
              style={{
                background: "#fff",
                border: "2px solid #FCDF5F",
                borderRadius: "16px",
                padding: "24px 18px",
                textAlign: "left",
                boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                display: "flex",
                flexDirection: "column",
                minHeight: "560px",
              }}
            >
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "2rem", fontWeight: 800, color: "#2d0f12", marginBottom: "2px" }}>
                Premium
              </p>
              <p style={{ fontFamily: "Roboto Mono", fontSize: "0.75rem", color: "#7f7f7f", marginBottom: "18px" }}>
                Pour maximiser votre visibilité
              </p>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", lineHeight: 1, marginBottom: "14px" }}>
                <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "#2d0f12" }}>49€</span>
                <span style={{ fontSize: "0.95rem", color: "#777", fontWeight: 500, marginLeft: "4px" }}>/mois</span>
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                {premiumFeatures.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Roboto Mono", fontSize: "0.73rem", color: "#2f2f2f" }}>
                    <CheckIcon color="#FCDF5F" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "999px",
                  background: "#FCDF5F",
                  color: "#1f2a44",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Nunito Sans, sans-serif",
                  marginTop: "auto",
                }}
              >
                Essayer 30 jours gratuits
              </button>
            </div>
          </div>

          {/* Pro */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "16px",
              padding: "24px 18px",
              textAlign: "left",
              boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
              display: "flex",
              flexDirection: "column",
              minHeight: "560px",
            }}
          >
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "2rem", fontWeight: 800, color: "#2d0f12", marginBottom: "2px" }}>
              Pro
            </p>
            <p style={{ fontFamily: "Roboto Mono", fontSize: "0.75rem", color: "#7f7f7f", marginBottom: "18px" }}>
              Pour les établissements ambitieux
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", lineHeight: 1, marginBottom: "14px" }}>
              <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "#2d0f12" }}>99€</span>
              <span style={{ fontSize: "0.95rem", color: "#777", fontWeight: 500, marginLeft: "4px" }}>/mois</span>
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {proFeatures.map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Roboto Mono", fontSize: "0.73rem", color: "#2f2f2f" }}>
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>
            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "999px",
                background: "#100A0D",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.8rem",
                border: "none",
                cursor: "pointer",
                fontFamily: "Nunito Sans, sans-serif",
                marginTop: "auto",
              }}
            >
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
