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
            src="/images/fond-cafe.svg"
            alt="Fond café"
            fill
            priority
            className="object-cover object-center"
          />

          <div
            style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) -28.3%, #ACACAC 160.49%)" }}
            className="absolute inset-0"
          ></div>

          <div className="absolute inset-0 flex items-center justify-center -translate-y-8">
            <Image
              src="/images/logo-home.svg"
              alt="Cafeology logo"
              width={280}
              height={280}
              className="opacity-95"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-43 text-center">
            <h1 className="text-center text-[#000]" style={{ fontFamily: "Proxima Soft Condensed", fontSize: "32px", fontStyle: "normal", fontWeight: 900, lineHeight: "120%" }}>
              Explorez les meilleurs cafés de spécialité à Paris.
            </h1>
            
            <p className="mt-3 text-[#000]" style={{ fontFamily: "Roboto Mono", fontSize: "16px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>
              L'application indispensable pour dénicher, noter et partager vos adresses préférées.
            </p>
            <button
              className="text-[#1f2a44] font-bold text-sm"
              style={{ marginTop: "30px", borderRadius: "50px", background: "#FFDE3E", display: "flex", padding: "14px 24px", justifyContent: "center", alignItems: "center" }}
            >
              Trouver un café maintenant
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
