import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cafeology - Découvrez les meilleurs cafés de spécialité à Paris",
  description: "L'application indispensable pour dénicher, noter et partager vos adresses préférées de café de spécialité à Paris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
