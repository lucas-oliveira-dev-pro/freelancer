import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Oliveira | Desenvolvedor Full-Stack",
  description:
    "Desenvolvedor Full-Stack especializado em React, Next.js, Node.js e sistemas web personalizados.",
  keywords: [
    "desenvolvedor full stack",
    "desenvolvedor React",
    "desenvolvedor Next.js",
    "desenvolvedor Node.js",
    "desenvolvimento de sistemas",
    "sistema web",
    "desenvolvimento de aplicativos",
    "freelancer desenvolvimento web",
  ],
  authors: [
    {
      name: "Lucas Oliveira",
    },
  ],
  creator: "Lucas Oliveira",
  metadataBase: new URL("https://seudominio.com.br"),
  openGraph: {
    title: "Lucas Oliveira | Desenvolvedor Full-Stack",
    description:
      "Desenvolvimento de sistemas, aplicativos e experiências digitais sob medida.",
    type: "website",
    locale: "pt_BR",
    siteName: "Lucas Oliveira",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}