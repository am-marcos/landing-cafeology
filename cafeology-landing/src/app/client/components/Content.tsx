import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="w-full flex items-start justify-center pb-16 md:pb-24" style={{ paddingTop: "150px" }}>
      <div className="w-full max-w-[1400px] px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 style={{ 
            color: "#3D0F0F", 
            fontFamily: "Proxima Soft Condensed", 
            fontSize: "32px", 
            fontWeight: 900, 
            lineHeight: "120%",
            textAlign: "center"
          }} className="mb-3">
            Comment ça marche ?
          </h2>
          <p style={{
            color: "#9A2425",
            fontFamily: "Roboto Mono",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "150%",
            textAlign: "center"
          }} className="max-w-2xl">
            Quatre étapes simples pour vivre la meilleure expérience café
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6" style={{ marginTop: "60px" }}>
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#FFDE3E] flex items-center justify-center" style={{ marginBottom: "24px" }}>
              <Image 
                src="/images/icon-telecharger.svg" 
                alt="Télécharger" 
                width={36} 
                height={36}
              />
            </div>
            <h3 className="text-lg font-bold text-[#1f2a44] mb-2">Téléchargez</h3>
            <p style={{
              color: "rgba(61, 15, 15, 0.60)",
              textAlign: "center",
              fontFamily: "Roboto Mono",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "22px",
              maxWidth: "200px",
              margin: "0 auto"
            }}>
              Installez gratuitement l'application Caféology sur votre smartphone
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#9A2425] flex items-center justify-center" style={{ marginBottom: "24px" }}>
              <Image 
                src="/images/icon-map.svg" 
                alt="Découvrir" 
                width={36} 
                height={36}
              />
            </div>
            <h3 className="text-lg font-bold text-[#1f2a44] mb-2">Découvrez</h3>
            <p style={{
              color: "rgba(61, 15, 15, 0.60)",
              textAlign: "center",
              fontFamily: "Roboto Mono",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "22px",
              maxWidth: "200px",
              margin: "0 auto"
            }}>
              Trouvez les meilleurs cafés de spécialité autour 
              de vous grâce à la carte interactive
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#3D0F0F] flex items-center justify-center" style={{ marginBottom: "24px" }}>
              <Image 
                src="/images/icon-cup-coffee.svg" 
                alt="Savourer" 
                width={36} 
                height={36}
              />
            </div>
            <h3 className="text-lg font-bold text-[#1f2a44] mb-2">Savourez</h3>
            <p style={{
              color: "rgba(61, 15, 15, 0.60)",
              textAlign: "center",
              fontFamily: "Roboto Mono",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "22px",
              maxWidth: "200px",
              margin: "0 auto"
            }}>
              Profitez d'un café d'exception préparé par des baristas passionnés
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#FFDE3E] flex items-center justify-center" style={{ marginBottom: "24px" }}>
              <Image 
                src="/images/icon-etoile.svg" 
                alt="Partager" 
                width={36} 
                height={36}
              />
            </div>
            <h3 className="text-lg font-bold text-[#1f2a44] mb-2">Partagez</h3>
            <p style={{
              color: "rgba(61, 15, 15, 0.60)",
              textAlign: "center",
              fontFamily: "Roboto Mono",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "22px",
              maxWidth: "200px",
              margin: "0 auto"
            }}>
              Notez votre expérience et aidez la communauté à découvrir de nouvelles pépites
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="w-full flex items-start justify-center pb-16 md:pb-24" style={{ marginTop: "60px" }}>
      <div className="w-full max-w-[1400px] px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 style={{ 
            color: "#3D0F0F", 
            fontFamily: "Proxima Soft Condensed", 
            fontSize: "32px",   
            fontWeight: 900, 
            lineHeight: "120%",
            textAlign: "center"
          }} className="mb-3">
            Pourquoi choisir Caféology ?
          </h2>
          <p style={{
            color: "#9A2425",
            fontFamily: "Roboto Mono",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "150%",
            textAlign: "center"
          }} className="max-w-2xl">
            Une application pensée pour les amateurs de café de spécialité, avec tout ce dont vous avez besoin pour une expérience parfaite
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-[1000px]">
            {/* Feature 1 */}
            <div className="flex flex-col items-start text-left p-6 bg-white rounded-2xl border border-[#E6E1D9] shadow-[0_12px_28px_rgba(0,0,0,0.18)] w-[300px] h-[300px]">
            <div className="w-16 h-16 rounded-2xl bg-[#FFDE3E] flex items-center justify-center mb-6 mt-4 ml-4">
              <Image 
                src="/images/icon-cup-coffee.svg" 
                alt="Sélection qualité" 
                width={32} 
                height={32}
              />
            </div>
            <h3 style={{
              color: "#3D0F0F",
              fontFamily: "Proxima Soft Condensed",
              fontSize: "24px",
              fontWeight: 900,
              lineHeight: "120%",
              marginBottom: "12px"
            }}>
              Sélection qualité
            </h3>
              <p style={{
                color: "rgba(61, 15, 15, 0.60)",
                textAlign: "left",
                fontFamily: "Roboto Mono",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "150%",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}>
                Tous les cafés sont vérifiés et respectent les standards SCA
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start text-left p-6 bg-white rounded-2xl border border-[#E6E1D9] shadow-[0_12px_28px_rgba(0,0,0,0.18)] w-[300px] h-[300px]">
            <div className="w-16 h-16 rounded-2xl bg-[#FFDE3E] flex items-center justify-center mb-6 mt-4 ml-4">
              <Image 
                src="/images/icon-map.svg" 
                alt="Carte interactive" 
                width={32} 
                height={32}
              />
            </div>
            <h3 style={{
              color: "#3D0F0F",
              fontFamily: "Proxima Soft Condensed",
              fontSize: "24px",
              fontWeight: 900,
              lineHeight: "120%",
              marginBottom: "12px"
            }}>
              Carte interactive
            </h3>
              <p style={{
                color: "rgba(61, 15, 15, 0.60)",
                textAlign: "left",
                fontFamily: "Roboto Mono",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "150%",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}>
                Géolocalisation précise et navigation GPS intégrée
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-start text-left p-6 bg-white rounded-2xl border border-[#E6E1D9] shadow-[0_12px_28px_rgba(0,0,0,0.18)] w-[300px] h-[300px]">
              <div className="w-16 h-16 rounded-2xl bg-[#FFDE3E] flex items-center justify-center mb-6 mt-4 ml-4">
                <Image 
                  src="/images/icon-etoile.svg" 
                  alt="Avis vérifiés" 
                  width={32} 
                  height={32}
                />
              </div>
              <h3 style={{
                color: "#3D0F0F",
                fontFamily: "Proxima Soft Condensed",
                fontSize: "24px",
                fontWeight: 900,
                lineHeight: "120%",
                marginBottom: "12px"
              }}>
                Avis vérifiés
              </h3>
              <p style={{
                color: "rgba(61, 15, 15, 0.60)",
                textAlign: "left",
                fontFamily: "Roboto Mono",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "150%",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}>
                Notes et commentaires authentiques de notre communauté
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
