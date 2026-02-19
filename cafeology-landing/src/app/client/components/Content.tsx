import Image from "next/image";

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
              fontFamily: "Proxima Soft Condensed",
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
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6"
          style={{ marginTop: "60px" }}
        >
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="w-20 h-20 rounded-full bg-[#FFDE3E] flex items-center justify-center"
              style={{ marginBottom: "24px" }}
            >
              <Image
                src="/images/icon-telecharger.svg"
                alt="Télécharger"
                width={36}
                height={36}
              />
            </div>
            <h3 className="text-lg font-bold text-[#1f2a44] mb-2">
              Téléchargez
            </h3>
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
              Installez gratuitement l'application Caféology sur votre
              smartphone
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="w-20 h-20 rounded-full bg-[#9A2425] flex items-center justify-center"
              style={{ marginBottom: "24px" }}
            >
              <Image
                src="/images/icon-map.svg"
                alt="Découvrir"
                width={36}
                height={36}
              />
            </div>
            <h3 className="text-lg font-bold text-[#1f2a44] mb-2">
              Découvrez
            </h3>
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
              Trouvez les meilleurs cafés de spécialité autour de vous grâce à
              la carte interactive
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="w-20 h-20 rounded-full bg-[#3D0F0F] flex items-center justify-center"
              style={{ marginBottom: "24px" }}
            >
              <Image
                src="/images/icon-cup-coffee.svg"
                alt="Savourer"
                width={36}
                height={36}
              />
            </div>
            <h3 className="text-lg font-bold text-[#1f2a44] mb-2">
              Savourez
            </h3>
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
              Profitez d'un café d'exception préparé par des baristas passionnés
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div
              className="w-20 h-20 rounded-full bg-[#FFDE3E] flex items-center justify-center"
              style={{ marginBottom: "24px" }}
            >
              <Image
                src="/images/icon-etoile.svg"
                alt="Partager"
                width={36}
                height={36}
              />
            </div>
            <h3 className="text-lg font-bold text-[#1f2a44] mb-2">
              Partagez
            </h3>
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
              Notez votre expérience et aidez la communauté à découvrir de
              nouvelles pépites
            </p>
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
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2
            style={{
              color: "#3D0F0F",
              fontFamily: "Proxima Soft Condensed",
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
              {/* Icône – specs Figma : 56×56, border-radius 14px, background #FFDE3E */}
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
                  fontFamily: "Proxima Soft Condensed",
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
   SECTION 3 – Aperçu de l'application
   (mockups de téléphone – côté texte + images)
───────────────────────────────────────────── */
export function AppPreview() {
  return (
    <section
      className="w-full flex items-center justify-center"
      style={{ backgroundColor: "#FFF9F0", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="w-full max-w-[1400px] px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">

          {/* Texte gauche */}
          <div className="flex-1 max-w-[480px]">
            <h2
              style={{
                color: "#3D0F0F",
                fontFamily: "Proxima Soft Condensed",
                fontSize: "40px",
                fontWeight: 900,
                lineHeight: "120%",
                marginBottom: "20px",
              }}
            >
              Découvrez l'app Caféology
            </h2>
            <p
              style={{
                color: "rgba(61, 15, 15, 0.70)",
                fontFamily: "Roboto Mono",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "160%",
                marginBottom: "36px",
              }}
            >
              Une interface intuitive pensée pour vous permettre de trouver,
              explorer et partager les meilleures adresses café de Paris en
              quelques secondes.
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-4">
              {[
                { icon: "/images/icon-map.svg", label: "Carte géolocalisée en temps réel" },
                { icon: "/images/icon-etoile.svg", label: "Système de notation communautaire" },
                { icon: "/images/icon-cup-coffee.svg", label: "Fiches détaillées par café" },
                { icon: "/images/icon-telecharger.svg", label: "Gratuit sur iOS et Android" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-[#FFDE3E] flex items-center justify-center flex-shrink-0"
                  >
                    <Image src={item.icon} alt="" width={20} height={20} />
                  </div>
                  <span
                    style={{
                      color: "#3D0F0F",
                      fontFamily: "Roboto Mono",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockups téléphone – droite */}
          <div className="flex-1 flex items-end justify-center gap-6">
            {/*
              TODO: Remplacer par le vrai mockup de l'écran d'accueil de l'app
              Fichier suggéré : /images/mockup-home.png  (format 9:19, ~390×844px)
            */}
            <div
              style={{
                width: "200px",
                height: "420px",
                borderRadius: "32px",
                background: "#E6DDD0",
                border: "3px solid #C4B49A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 24px 48px rgba(61,15,15,0.15)",
                transform: "translateY(24px)",
              }}
            >
              {/* ↓ Remplacer ce bloc par : <Image src="/images/mockup-home.png" alt="Écran accueil" fill className="object-cover" /> */}
              <span
                style={{
                  color: "#9A2425",
                  fontFamily: "Roboto Mono",
                  fontSize: "11px",
                  textAlign: "center",
                  padding: "8px",
                }}
              >
                📱 mockup-home.png<br />(390×844px)
              </span>
            </div>

            {/*
              TODO: Remplacer par le mockup de l'écran carte de l'app
              Fichier suggéré : /images/mockup-map.png  (format 9:19, ~390×844px)
            */}
            <div
              style={{
                width: "200px",
                height: "420px",
                borderRadius: "32px",
                background: "#D4C8B8",
                border: "3px solid #C4B49A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 24px 48px rgba(61,15,15,0.15)",
              }}
            >
              {/* ↓ Remplacer ce bloc par : <Image src="/images/mockup-map.png" alt="Écran carte" fill className="object-cover" /> */}
              <span
                style={{
                  color: "#9A2425",
                  fontFamily: "Roboto Mono",
                  fontSize: "11px",
                  textAlign: "center",
                  padding: "8px",
                }}
              >
                📱 mockup-map.png<br />(390×844px)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 4 – Cafés à la une
   (galerie 3 cartes avec photo de café)
───────────────────────────────────────────── */
export function FeaturedCafes() {
  const cafes = [
    {
      name: "Telescope Café",
      neighborhood: "1er arrondissement",
      rating: 4.9,
      description:
        "Une adresse emblématique du café de spécialité parisien, reconnue pour ses extractions soignées et ses origines triées sur le volet.",
      /*
        TODO: Remplacer l'image placeholder ci-dessous
        Fichier suggéré : /images/cafe-telescope.jpg  (format 16:9, ~600×340px)
      */
      imagePlaceholder: "cafe-telescope.jpg",
      imageColor: "#C4A882",
    },
    {
      name: "Coutume Café",
      neighborhood: "7e arrondissement",
      rating: 4.8,
      description:
        "Pionnier du troisième vague à Paris, Coutume torréfie ses propres grains et propose une sélection de single origins d'exception.",
      /*
        TODO: Remplacer l'image placeholder ci-dessous
        Fichier suggéré : /images/cafe-coutume.jpg  (format 16:9, ~600×340px)
      */
      imagePlaceholder: "cafe-coutume.jpg",
      imageColor: "#B89870",
    },
    {
      name: "Boot Café",
      neighborhood: "3e arrondissement",
      rating: 4.7,
      description:
        "Niché dans une ancienne cordonnerie du Marais, Boot Café régale ses habitués avec des espressos précis et une ambiance chaleureuse.",
      /*
        TODO: Remplacer l'image placeholder ci-dessous
        Fichier suggéré : /images/cafe-boot.jpg  (format 16:9, ~600×340px)
      */
      imagePlaceholder: "cafe-boot.jpg",
      imageColor: "#A08060",
    },
  ];

  return (
    <section
      className="w-full flex items-start justify-center"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="w-full max-w-[1400px] px-4">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2
            style={{
              color: "#3D0F0F",
              fontFamily: "Proxima Soft Condensed",
              fontSize: "32px",
              fontWeight: 900,
              lineHeight: "120%",
              textAlign: "center",
            }}
            className="mb-3"
          >
            Cafés à la une
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
            Découvrez les adresses coups de cœur de notre communauté
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cafes.map((cafe) => (
            <div
              key={cafe.name}
              className="bg-white rounded-2xl border border-[#E6E1D9] shadow-[0_12px_28px_rgba(0,0,0,0.10)] overflow-hidden"
            >
              {/*
                TODO: Remplacer le bloc ci-dessous par :
                <div style={{ position: "relative", height: "220px" }}>
                  <Image
                    src={`/images/${cafe.imagePlaceholder}`}
                    alt={cafe.name}
                    fill
                    className="object-cover"
                  />
                </div>
              */}
              <div
                style={{
                  height: "220px",
                  background: cafe.imageColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "Roboto Mono",
                    fontSize: "12px",
                    textAlign: "center",
                    padding: "12px",
                  }}
                >
                  📷 {cafe.imagePlaceholder}<br />(600×340px)
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    style={{
                      color: "#3D0F0F",
                      fontFamily: "Proxima Soft Condensed",
                      fontSize: "22px",
                      fontWeight: 900,
                      lineHeight: "120%",
                    }}
                  >
                    {cafe.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/images/icon-etoile.svg"
                      alt="Note"
                      width={16}
                      height={16}
                    />
                    <span
                      style={{
                        color: "#3D0F0F",
                        fontFamily: "Roboto Mono",
                        fontSize: "14px",
                        fontWeight: 700,
                      }}
                    >
                      {cafe.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Image
                    src="/images/icon-map.svg"
                    alt="Localisation"
                    width={14}
                    height={14}
                  />
                  <span
                    style={{
                      color: "#9A2425",
                      fontFamily: "Roboto Mono",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {cafe.neighborhood}
                  </span>
                </div>

                <p
                  style={{
                    color: "rgba(61, 15, 15, 0.65)",
                    fontFamily: "Roboto Mono",
                    fontSize: "13px",
                    fontWeight: 400,
                    lineHeight: "160%",
                  }}
                >
                  {cafe.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 5 – Témoignages
   (avis utilisateurs avec photo de profil)
───────────────────────────────────────────── */
export function Testimonials() {
  const reviews = [
    {
      name: "Marie L.",
      role: "Barista & amatrice",
      rating: 5,
      text: "Caféology a complètement changé ma façon d'explorer Paris. Je découvre de nouvelles adresses chaque semaine que je n'aurais jamais trouvées toute seule !",
      /*
        TODO: Remplacer par la vraie photo de profil de l'utilisatrice
        Fichier suggéré : /images/avatar-marie.jpg  (format carré, ~80×80px)
      */
      avatarPlaceholder: "avatar-marie.jpg",
      avatarColor: "#E8C89A",
    },
    {
      name: "Thomas R.",
      role: "Passionné de café",
      rating: 5,
      text: "L'interface est super intuitive et les filtres permettent de vraiment affiner sa recherche. Les avis sont fiables et la communauté est bienveillante.",
      /*
        TODO: Remplacer par la vraie photo de profil de l'utilisateur
        Fichier suggéré : /images/avatar-thomas.jpg  (format carré, ~80×80px)
      */
      avatarPlaceholder: "avatar-thomas.jpg",
      avatarColor: "#C4A882",
    },
    {
      name: "Sophie M.",
      role: "Freelance & café-addict",
      rating: 5,
      text: "Je travaille souvent depuis des cafés et Caféology me fait gagner un temps fou. Je sais exactement quel café a un bon wifi, des prises et un excellent flat white.",
      /*
        TODO: Remplacer par la vraie photo de profil de l'utilisatrice
        Fichier suggéré : /images/avatar-sophie.jpg  (format carré, ~80×80px)
      */
      avatarPlaceholder: "avatar-sophie.jpg",
      avatarColor: "#B89870",
    },
  ];

  return (
    <section
      className="w-full flex items-start justify-center"
      style={{ backgroundColor: "#FFF9F0", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="w-full max-w-[1400px] px-4">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <h2
            style={{
              color: "#3D0F0F",
              fontFamily: "Proxima Soft Condensed",
              fontSize: "32px",
              fontWeight: 900,
              lineHeight: "120%",
              textAlign: "center",
            }}
            className="mb-3"
          >
            Ce que disent nos utilisateurs
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
            Des milliers d'amateurs de café font confiance à Caféology
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl border border-[#E6E1D9] shadow-[0_12px_28px_rgba(0,0,0,0.08)] p-8 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Image
                    key={i}
                    src="/images/icon-etoile.svg"
                    alt="★"
                    width={18}
                    height={18}
                  />
                ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  color: "rgba(61, 15, 15, 0.75)",
                  fontFamily: "Roboto Mono",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "170%",
                  flex: 1,
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* User info */}
              <div className="flex items-center gap-4">
                {/*
                  TODO: Remplacer le bloc ci-dessous par :
                  <Image
                    src={`/images/${review.avatarPlaceholder}`}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: review.avatarColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: "18px" }}>👤</span>
                  {/* ↑ Remplacer par <Image src={`/images/${review.avatarPlaceholder}`} … /> */}
                </div>
                <div>
                  <p
                    style={{
                      color: "#3D0F0F",
                      fontFamily: "Roboto Mono",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    {review.name}
                  </p>
                  <p
                    style={{
                      color: "rgba(61, 15, 15, 0.55)",
                      fontFamily: "Roboto Mono",
                      fontSize: "12px",
                      fontWeight: 400,
                    }}
                  >
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 6 – CTA Téléchargement
   (bandeau sombre avec boutons stores)
───────────────────────────────────────────── */
export function DownloadCTA() {
  return (
    <section
      className="w-full flex items-center justify-center"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="w-full max-w-[1400px] px-4">
        <div
          style={{
            background: "#3D0F0F",
            borderRadius: "2rem",
            padding: "80px 60px",
            position: "relative",
            overflow: "hidden",
          }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/*
            TODO: Ajouter une image de fond (grain de café, texture) en position absolute
            Fichier suggéré : /images/bg-cta-texture.png  (format large, ~1400×500px)
            Exemple :
            <Image
              src="/images/bg-cta-texture.png"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          */}

          {/* Texte */}
          <div className="flex flex-col gap-6 max-w-[520px]">
            <h2
              style={{
                color: "#FFFFFF",
                fontFamily: "Proxima Soft Condensed",
                fontSize: "40px",
                fontWeight: 900,
                lineHeight: "120%",
              }}
            >
              Rejoignez la communauté Caféology
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.70)",
                fontFamily: "Roboto Mono",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "160%",
              }}
            >
              Téléchargez l'application gratuitement et découvrez dès maintenant
              les meilleurs cafés de spécialité à Paris.
            </p>

            {/* Store buttons */}
            <div className="flex flex-wrap gap-4">
              {/*
                TODO: Remplacer les boutons ci-dessous par les vrais badges stores
                Badge App Store  → /images/badge-app-store.svg  (~160×54px)
                Badge Google Play → /images/badge-google-play.svg (~160×54px)
              */}
              <button
                style={{
                  background: "#FFDE3E",
                  borderRadius: "999px",
                  padding: "14px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {/* ↓ Remplacer par <Image src="/images/badge-app-store.svg" alt="App Store" width={160} height={54} /> */}
                <Image
                  src="/images/icon-telecharger.svg"
                  alt="App Store"
                  width={20}
                  height={20}
                />
                <span
                  style={{
                    color: "#3D0F0F",
                    fontFamily: "Roboto Mono",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  App Store
                </span>
              </button>

              <button
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "2px solid rgba(255,255,255,0.35)",
                  borderRadius: "999px",
                  padding: "14px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {/* ↓ Remplacer par <Image src="/images/badge-google-play.svg" alt="Google Play" width={160} height={54} /> */}
                <Image
                  src="/images/icon-telecharger.svg"
                  alt="Google Play"
                  width={20}
                  height={20}
                />
                <span
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Roboto Mono",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  Google Play
                </span>
              </button>
            </div>
          </div>

          {/* Mockup téléphone – droite du CTA */}
          {/*
            TODO: Remplacer par le mockup de l'app en version sombre
            Fichier suggéré : /images/mockup-cta.png  (~320×540px)
          */}
          <div
            style={{
              width: "220px",
              height: "420px",
              borderRadius: "32px",
              background: "rgba(255,255,255,0.10)",
              border: "2px solid rgba(255,255,255,0.20)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {/* ↓ Remplacer ce bloc par : <Image src="/images/mockup-cta.png" alt="App preview" width={220} height={420} className="object-contain" /> */}
            <span
              style={{
                color: "rgba(255,255,255,0.50)",
                fontFamily: "Roboto Mono",
                fontSize: "11px",
                textAlign: "center",
                padding: "8px",
              }}
            >
              📱 mockup-cta.png<br />(320×540px)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 7 – Footer
───────────────────────────────────────────── */
export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1A0808",
        paddingTop: "64px",
        paddingBottom: "40px",
      }}
      className="w-full"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-[300px]">
            {/*
              TODO: Remplacer par le logo blanc de Caféology
              Fichier suggéré : /images/logo-white.svg  (~160×40px)
            */}
            <Image
              src="/images/icon-navbar.svg"
              alt="Cafeology"
              width={140}
              height={32}
              className="opacity-90"
            />
            {/* ↑ Remplacer par <Image src="/images/logo-white.svg" alt="Cafeology" width={160} height={40} /> quand disponible */}
            <p
              style={{
                color: "rgba(255,255,255,0.50)",
                fontFamily: "Roboto Mono",
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: "160%",
              }}
            >
              L'application qui connecte les amateurs de café aux meilleures
              adresses de spécialité à Paris.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col gap-3">
              <p
                style={{
                  color: "#FFDE3E",
                  fontFamily: "Roboto Mono",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Application
              </p>
              {["Le concept", "Comment ça marche", "Télécharger"].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.60)",
                    fontFamily: "Roboto Mono",
                    fontSize: "13px",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p
                style={{
                  color: "#FFDE3E",
                  fontFamily: "Roboto Mono",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Café pro
              </p>
              {["Référencer mon café", "Espace partenaire", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.60)",
                    fontFamily: "Roboto Mono",
                    fontSize: "13px",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p
                style={{
                  color: "#FFDE3E",
                  fontFamily: "Roboto Mono",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                À propos
              </p>
              {["Notre mission", "Culture café", "Blog"].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: "rgba(255,255,255,0.60)",
                    fontFamily: "Roboto Mono",
                    fontSize: "13px",
                    fontWeight: 400,
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.10)",
            marginBottom: "32px",
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "Roboto Mono",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            © {new Date().getFullYear()} Caféology. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Politique de confidentialité", "CGU", "Mentions légales"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "Roboto Mono",
                  fontSize: "12px",
                  fontWeight: 400,
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
