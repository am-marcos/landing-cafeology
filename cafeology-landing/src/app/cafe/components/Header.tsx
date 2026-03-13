import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header
      style={{ top: "32px", left: "50%", transform: "translateX(-50%)", position: "fixed" }}
      className="z-50 w-full max-w-[1300px] px-4"
    >
      <div
        style={{ padding: "10px 32px", borderRadius: "16px", background: "rgba(255, 255, 255, 0.80)", backdropFilter: "blur(16px)" }}
        className="shadow-[0_4px_20px_rgba(0,0,0,0.10)] flex items-center justify-between"
      >
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/images/icon-navbar.svg"
            alt="Cafeology"
            width={160}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </div>

        <div className="flex items-center gap-6">
          <a href="#fonctionnalites" className="text-[#1f2a44] hover:text-[#8b4513] font-semibold text-sm transition-colors">
            Fonctionnalités
          </a>
          <a href="#tarifs" className="text-[#1f2a44] hover:text-[#8b4513] font-semibold text-sm transition-colors">
            Tarifs
          </a>
          <Link
            href="/"
            style={{ padding: "10px 22px", borderRadius: "999px" }}
            className="bg-[#FCDF5F] text-[#1f2a44] font-bold text-sm hover:bg-[#ffb300] transition-all"
          >
            Vous cherchez un café ?
          </Link>
          <button
            style={{ padding: "10px 22px", borderRadius: "999px" }}
            className="bg-white text-[#1f2a44] border-2 border-[#1f2a44] font-bold text-sm hover:bg-[#1f2a44] hover:text-white transition-all"
          >
            Télécharger
          </button>
        </div>
      </div>
    </header>
  );
}
