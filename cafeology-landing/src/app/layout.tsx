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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Nunito+Sans:ital,wght@0,200..1000;1,200..1000&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
