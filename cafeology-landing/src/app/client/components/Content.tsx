import Image from "next/image";

const howItWorksSteps = [
  {
    title: "Téléchargez",
    description: "Installez gratuitement l'application Caféology sur votre smartphone",
    icon: "/images/icon-telecharger.svg",
    alt: "Télécharger",
    bg: "#FFDE3E",
  },
  {
    title: "Découvrez",
    description: "Trouvez les meilleurs cafés de spécialité autour de vous grâce à la carte interactive",
    icon: "/images/icon-map.svg",
    alt: "Découvrir",
    bg: "#9A2425",
  },
  {
    title: "Savourez",
    description: "Profitez d'un café d'exception préparé par des baristas passionnés",
    icon: "/images/icon-cup-coffee.svg",
    alt: "Savourer",
    bg: "#3D0F0F",
  },
  {
    title: "Partagez",
    description: "Notez votre expérience et aidez la communauté à découvrir de nouvelles pépites",
    icon: "/images/icon-etoile.svg",
    alt: "Partager",
    bg: "#FFDE3E",
  },
];

/* ─────────────────────────────────────────────
   SECTION 1 – Comment ça marche ?
───────────────────────────────────────────── */
export function HowItWorks() {
  return (
    <section
      id="concept"
      className="w-full flex items-start justify-center pb-16 md:pb-24"
      style={{ paddingTop: "150px" }}
    >
      <div className="w-full max-w-[1400px] px-4">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2
            style={{
              color: "#3D0F0F",
              fontFamily: "Roboto Condensed, sans-serif",
              fontSize: "32px",
              fontWeight: 900,
              lineHeight: "120%",
              textAlign: "center",
            }}
            className="mb-3"
          >
            Comment ça marche ?
          </h2>
          <p
            style={{
              color: "#9A2425",
              fontFamily: "Roboto Mono",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "150%",
              textAlign: "center",
            }}
            className="max-w-2xl"
          >
            Quatre étapes simples pour vivre la meilleure expérience café
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative" style={{ marginTop: "60px" }}>
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "38px",
              left: "12.5%",
              right: "12.5%",
              height: "0.5px",
              background: "rgba(61, 15, 15, 0.16)",
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {howItWorksSteps.map((step, index) => (
              <div key={step.title} className="howitworks-step flex flex-col items-center text-center relative">
                <span
                  className="howitworks-number hidden md:block"
                  style={{
                    position: "absolute",
                    top: "80px",
                    left: "calc(50% + 54px)",
                    transform: "translateY(-50%)",
                    fontFamily: "Roboto Condensed, sans-serif",
                    fontSize: "60px",
                    fontWeight: 900,
                    color: "rgba(61, 15, 15, 0.08)",
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {index + 1}
                </span>

                <div
                  className="howitworks-iconwrap w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ marginBottom: "24px", background: step.bg }}
                >
                  <Image src={step.icon} alt={step.alt} width={36} height={36} />
                </div>

                <h3 className="text-lg font-bold text-[#3D0F0F] mb-2">{step.title}</h3>
                <p
                  style={{
                    color: "rgba(61, 15, 15, 0.60)",
                    textAlign: "center",
                    fontFamily: "Roboto Mono",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    maxWidth: "200px",
                    margin: "0 auto",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 2 – Pourquoi choisir Caféology ?
───────────────────────────────────────────── */
export function WhyChoose() {
  return (
    <section
      className="w-full flex items-start justify-center pb-16 md:pb-24"
      style={{ marginTop: "60px" }}
    >
      <div className="w-full max-w-[1400px] px-4">
        <div className="flex flex-col items-center mb-16">
          <h2
            style={{
              color: "#3D0F0F",
              fontFamily: "Roboto Condensed, sans-serif",
              fontSize: "32px",
              fontWeight: 900,
              lineHeight: "120%",
              textAlign: "center",
            }}
            className="mb-3"
          >
            Pourquoi choisir Caféology ?
          </h2>
          <p
            style={{
              color: "#9A2425",
              fontFamily: "Roboto Mono",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "150%",
              textAlign: "center",
            }}
            className="max-w-2xl"
          >
            Une application pensée pour les amateurs de café de spécialité, avec
            tout ce dont vous avez besoin pour une expérience parfaite
          </p>
        </div>

        {/* Feature cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              icon: "/images/icon-cup-coffee.svg",
              alt: "Sélection qualité",
              title: "Sélection qualité",
              description: "Tous les cafés sont vérifiés et respectent les standards SCA de qualité.",
            },
            {
              icon: "/images/icon-map.svg",
              alt: "Carte interactive",
              title: "Carte interactive",
              description: "Géolocalisation précise et navigation GPS intégrée pour trouver votre café.",
            },
            {
              icon: "/images/icon-etoile.svg",
              alt: "Avis vérifiés",
              title: "Avis vérifiés",
              description: "Notes et commentaires authentiques de notre communauté d'amateurs.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              style={{
                width: "324px",
                height: "259px",
                borderRadius: "16px",
                background: "#FFF",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.10), 0 4px 6px -4px rgba(0, 0, 0, 0.10)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
      
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  background: "#FFDE3E",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexShrink: 0,
                  marginBottom: "20px",
                }}
              >
                <Image src={feature.icon} alt={feature.alt} width={28} height={28} />
              </div>

              {/* Titre */}
              <h3
                style={{
                  color: "#3D0F0F",
                  fontFamily: "Roboto Condensed, sans-serif",
                  fontSize: "22px",
                  fontWeight: 900,
                  lineHeight: "120%",
                  marginBottom: "10px",
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "rgba(61, 15, 15, 0.60)",
                  fontFamily: "Roboto Mono",
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "155%",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ─────────────────────────────────────────────
   SECTION 3 – FAQ / Le conseil
───────────────────────────────────────────── */
const faqs = [
  {
    question: "Qu'est-ce qu'un café de spécialité ?",
    answer:
      "Un café de spécialité, c’est un café de qualité supérieure, sélectionné pour son grain, son origine et son goût unique. Ce n’est pas juste un café, c’est une expérience : torréfaction artisanale, savoir-faire du barista et ambiance soignée.",
  },
  {
    question:
      "Comment savoir qu'un café respecte vraiment les standards du café de spécialité ?",
    answer:
      "Les cafés référencés sur Caféology sont évalués selon les critères SCA (Specialty Coffee Association) : score gustatif, traçabilité du grain, méthodes de torréfaction et qualité du service.",
  },
  {
    question:
      "Comment trouver rapidement toutes les informations sur un café ?",
    answer:
      "Chaque fiche café regroupe l'adresse, les horaires, le menu, les méthodes de préparation disponibles et les avis de la communauté. Tout en un seul endroit, accessible en deux clics.",
  },
  {
    question: "Puis-je suggérer un café ou découvrir les meilleures adresses ?",
    answer:
      "Oui ! Vous pouvez proposer de nouveaux établissements via l'application. Notre équipe les vérifie avant publication. Explorez aussi les tops listes et recommandations personnalisées.",
  },
];

export function FAQ() {
  return (
    <section
      className="w-full flex items-start justify-center pb-16 md:pb-24"
      style={{ marginTop: "120px" }}
    >
      <div className="w-full max-w-[1400px] px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
        <div className="flex flex-col flex-shrink-0 lg:w-[420px]">
            <h2
              style={{
                color: "#3D0F0F",
                fontFamily: "Roboto Condensed, sans-serif",
                fontSize: "32px",
                fontWeight: 900,
                lineHeight: "120%",
                marginBottom: "32px",
                whiteSpace: "nowrap",
              }}
            >
              Le conseil qui vient de près et qui vous emmène loin
            </h2>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Image
                src="/images/cafe-content.svg"
                alt="Café de spécialité"
                width={420}
                height={340}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>

            <div className="flex flex-col flex-1 w-full" style={{ paddingTop: "110px" }}>
            {faqs.map((faq, index) => (
              <details
                key={index}
                style={{
                  borderBottom: "1px solid rgba(61, 15, 15, 0.15)",
                  paddingBottom: "16px",
                  marginBottom: "16px",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "16px",
                    gap: "16px",
                  }}
                >
                  <span
                    className="faq-question"
                    style={{
                      fontFamily: "'Proxima Soft Condensed', 'Roboto Condensed', 'Arial Narrow', sans-serif",
                      fontSize: "32px",
                      fontWeight: 900,
                      lineHeight: "41.6px",
                      letterSpacing: "-1px",
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "#FFDE3E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "18px",
                      fontWeight: 900,
                      color: "#3D0F0F",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    color: "#9A2425",
                    fontFamily: "Roboto Mono",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "27px",
                    marginTop: "12px",
                    paddingRight: "44px",
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}



/* ─────────────────────────────────────────────
   SECTION 4 – Carte Paris
───────────────────────────────────────────── */
export function MapSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center pb-16 md:pb-24"
      style={{ marginTop: "120px" }}
    >
      <div className="w-full max-w-[1400px] px-4">
        {/* Titre */}
        <h2
          style={{
            color: "#3D0F0F",
            textAlign: "center",
            fontFamily: "'Proxima Soft Condensed', 'Roboto Condensed', 'Arial Narrow', sans-serif",
            fontSize: "32px",
            fontWeight: 900,
            lineHeight: "120%",
            marginBottom: "40px",
          }}
        >
          Paris est votre terrain de jeu caféiné.
        </h2>

        {/* Conteneur carte */}
        <div
          style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            width: "100%",
            height: "560px",
          }}
        >
          {/* Fond carte */}
          <Image
            src="/images/map-content.svg"
            alt="Carte Paris"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />

          {/* Tasses positionnées sur la carte */}
          {[
            { top: "15%", left: "15%" },
            { top: "90%", left: "60%" },
            { top: "22%", left: "65%" },
            { top: "80%", left: "15%" },
          ].map((pos, i) => (
            <Image
              key={i}
              src="/images/cup-content.svg"
              alt="Café"
              width={30}
              height={30}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* Cadre central frosted glass */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "32px",
              border: "1px solid rgba(255, 255, 255, 0.50)",
              opacity: 0.9,
              background: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0 10px 30px 0 rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(12.5px)",
              WebkitBackdropFilter: "blur(12.5px)",
              padding: "100px 100px",
              width: "78%",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "'Proxima Soft Condensed', 'Roboto Condensed', 'Arial Narrow', sans-serif",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 900,
                lineHeight: "120%",
              }}
            >
              Découvrez les cafés de spécialité autour de vous, où que vous soyez à Paris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ─────────────────────────────────────────────
   SECTION 5 – Télécharger l'app
───────────────────────────────────────────── */
export function DownloadSection() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center pb-16 md:pb-24"
      style={{ marginTop: "120px" }}
    >
      <div className="w-full max-w-[1400px] px-4">
        {/* Conteneur fond jaune */}
        <div
          style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            width: "100%",
            height: "560px",
          }}
        >
          {/* Fond jaune */}
          <Image
            src="/images/Fond-jaune.svg"
            alt="Fond jaune"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />

          {/* Contenu */}
          <div
            className="flex flex-row items-center h-full"
            style={{ position: "relative", zIndex: 1, padding: "0 72px" }}
          >
            {/* Gauche */}
            <div className="flex flex-col flex-1" style={{ maxWidth: "540px" }}>
              {/* Badge bouton */}
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#3D0F0F",
                  borderRadius: "50px",
                  padding: "8px 20px",
                  marginBottom: "24px",
                  width: "fit-content",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#FFDE3E",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    color: "#FFF",
                    fontFamily: "Roboto Mono",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  Télécharger l&apos;app
                </span>
              </button>

              {/* Titre */}
              <h2
                style={{
                  color: "#3D0F0F",
                  fontFamily: "'Proxima Soft Condensed', 'Roboto Condensed', 'Arial Narrow', sans-serif",
                  fontSize: "25px",
                  fontWeight: 900,
                  lineHeight: "110%",
                  marginBottom: "20px",
                  letterSpacing: "-1px",
                  whiteSpace: "nowrap",
                  
                }}
              >
                Votre prochaine tasse d&apos;exception vous attend.
              </h2>

              {/* Sous-titre */}
              <p
                style={{
                  color: "rgba(61, 15, 15, 0.70)",
                  fontFamily: "Roboto Mono",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "160%",
                  marginBottom: "20px",
                }}
              >
                Rejoignez plus de 10 000 amateurs de café et découvrez les meilleurs cafés de spécialité à Paris. Disponible gratuitement sur iOS et Android.
              </p>

              {/* Boutons stores */}
              <div style={{ display: "flex", gap: "16px", marginBottom: "28px" }}>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#FFF",
                    borderRadius: "14px",
                    padding: "12px 20px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <Image src="/images/icon-AppStore.svg" alt="App Store" width={24} height={24} />
                  <div style={{ textAlign: "left" }}>
                    <div style={{ color: "#3D0F0F", fontFamily: "Roboto Mono", fontSize: "10px", fontWeight: 400 }}>
                      Télécharger sur
                    </div>
                    <div style={{ color: "#3D0F0F", fontFamily: "'Proxima Soft Condensed', 'Roboto Condensed', 'Arial Narrow', sans-serif", fontSize: "16px", fontWeight: 900 }}>
                      App Store
                    </div>
                  </div>
                </button>

                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#FFF",
                    borderRadius: "14px",
                    padding: "12px 20px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <Image src="/images/Icon-PlayStore.svg" alt="Google Play" width={24} height={24} />
                  <div style={{ textAlign: "left" }}>
                    <div style={{ color: "#3D0F0F", fontFamily: "Roboto Mono", fontSize: "10px", fontWeight: 400 }}>
                      Disponible sur
                    </div>
                    <div style={{ color: "#3D0F0F", fontFamily: "'Proxima Soft Condensed', 'Roboto Condensed', 'Arial Narrow', sans-serif", fontSize: "16px", fontWeight: 900 }}>
                      Google Play
                    </div>
                  </div>
                </button>
              </div>

              {/* Features */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                {["Gratuit", "Sans publicité", "Hors ligne"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#FFDE3E",
                        flexShrink: 0,
                        display: "inline-block",
                        border: "1.5px solid rgba(61,15,15,0.25)",
                      }}
                    />
                    <span
                      style={{
                        color: "#3D0F0F",
                        fontFamily: "Roboto Mono",
                        fontSize: "13px",
                        fontWeight: 700,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Droite : téléphone + QR code */}
            <div
              style={{
                flex: 1,
                position: "relative",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Téléphone : corps noir derrière, écran app dedans */}
              <div
                style={{
                  position: "relative",
                  width: "300px",
                  height: "550px",
                  filter: "drop-shadow(0 18px 36px rgba(0, 0, 0, 0.35))",
                }}
              >
                {/* Corps du téléphone (cadre noir + ombre) */}
                <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
                  <Image
                    src="/images/Fond-ecran-telephone.svg"
                    alt="Corps téléphone"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center"
                    }}
                  />
                </div>
                {/* Contenu écran app positionné dans la zone écran */}
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    left: "43px",
                    right: "43px",
                    bottom: "70px",
                    zIndex: 2,
                    overflow: "hidden",
                    borderRadius: "20px",
                  }}
                >
                  <Image
                    src="/images/In-tel.svg"
                    alt="App screen"
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>
              </div>

              {/* QR code — bas droite, chevauche légèrement le téléphone */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  right: "200px",
                  background: "#FFF",
                  borderRadius: "14px",
                  padding: "10px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.16)",
                  zIndex: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Image src="/images/icon-Qrcode.svg" alt="QR Code" width={110} height={110} />
                <p
                  style={{
                    color: "#3D0F0F",
                    fontFamily: "Roboto Mono",
                    fontSize: "11px",
                    fontWeight: 700,
                    textAlign: "center",
                    lineHeight: "140%",
                  }}
                >
                  Scanner pour
                  <br />
                  télécharger
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
