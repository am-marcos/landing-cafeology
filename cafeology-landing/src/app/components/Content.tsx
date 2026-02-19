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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#FFDE3E] flex items-center justify-center mb-4">
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
              lineHeight: "22px"
            }}>
              Installez gratuitement l'application Caféology sur votre smartphone
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#9A2425] flex items-center justify-center mb-4">
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
              lineHeight: "22px"
            }}>
              Trouvez les meilleurs cafés de spécialité autour de vous grâce à la carte interactive
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#3D0F0F] flex items-center justify-center mb-4">
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
              lineHeight: "22px"
            }}>
              Profitez d'un café d'exception préparé par des baristas passionnés
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#FFDE3E] flex items-center justify-center mb-4">
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
              lineHeight: "22px"
            }}>
              Notez votre expérience et aidez la communauté à découvrir de nouvelles pépites
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
