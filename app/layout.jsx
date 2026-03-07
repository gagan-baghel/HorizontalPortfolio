import { Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space" });
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-archivo" });

export const metadata = {
  metadataBase: new URL("https://gaganbaghel.com"),
  title: "Gagan Baghel | Web Developer & Designer",
  description: "Portfolio of Gagan Baghel, a freelance web developer and designer specializing in modern, interactive web experiences.",
  keywords: ["Web Developer", "Designer", "Frontend", "Next.js", "React", "Portfolio", "Gagan Baghel"],
  authors: [{ name: "Gagan Baghel" }],
  creator: "Gagan Baghel",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Gagan Baghel | Web Developer & Designer",
    description: "Portfolio of Gagan Baghel, a freelance web developer and designer specializing in modern, interactive web experiences.",
    url: "https://gaganbaghel.com",
    siteName: "Gagan Baghel Portfolio",
    images: [
      {
        url: "/appScreenshot.png",
        width: 1920,
        height: 1080,
        alt: "Gagan Baghel Portfolio Web Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gagan Baghel | Web Developer & Designer",
    description: "Portfolio of Gagan Baghel, a freelance web developer and designer specializing in modern, interactive web experiences.",
    images: ["/appScreenshot.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${archivo.variable}`} suppressHydrationWarning>
      <body className="font-space bg-[#030303] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
