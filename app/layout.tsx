import type { Metadata } from "next";
import { Marcellus, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const SITE_TITLE = "Beauty Fox — Institut de beauté & bien-être";
const SITE_DESCRIPTION =
  "Un moment pour soi, simplement. Soins corps, soins visage, épilations, headspa et footspa dans un institut pensé comme une parenthèse dans le quotidien.";

export const metadata: Metadata = {
  metadataBase: new URL("https://beautyfox.vercel.app"),
  title: {
    default: SITE_TITLE,
    template: "%s — Beauty Fox",
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Beauty Fox",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1254,
        height: 1254,
        alt: "Beauty Fox — institut de beauté",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${marcellus.variable} ${openSans.variable}`}>
      <body className="flex min-h-screen flex-col font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
