import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import NebulaBackground from "@/components/NebulaBackground";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Rafey Rashid – Web Developer Portfolio | E-commerce & Web Apps",
  description:
    "Portfolio of Rafey Rashid, a talented web developer crafting innovative e-commerce stores, dynamic SaaS platforms, and premium digital experiences. 10+ projects shipped.",
  keywords: [
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Rafey Rashid",
    "Frontend Developer",
    "E-commerce",
    "Web Apps",
    "Shopify",
    "Full Stack",
  ],
  openGraph: {
    title: "Rafey Rashid – Web Developer Portfolio",
    description:
      "Crafting pixel-perfect e-commerce stores and powerful web apps that captivate. 10+ projects shipped.",
    type: "website",
    locale: "en_US",
    siteName: "Rafey Rashid Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafey Rashid – Web Developer Portfolio",
    description:
      "Crafting pixel-perfect e-commerce stores and powerful web apps that captivate.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-black text-white selection:bg-purple-500/30 cursor-none md:cursor-none`}
      >
        {/* Soft vignette overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(0,0,0,0.5)_100%)]" />

        <SmoothScroll>
          <CustomCursor />
          <NebulaBackground />

          {/* Ambient Global Orbs */}
          <div className="fixed inset-0 pointer-events-none z-[-5]">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-600/20 blur-[120px] rounded-full mix-blend-screen" />
          </div>

          <div className="relative z-10">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
