import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleCursor from "@/components/ParticleCursor";
import { ThemeProvider } from "@/context/ThemeContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050811",
};

export const metadata: Metadata = {
  title: "Piel Mitra | Full Stack Web Developer Portfolio",
  description:
    "Portfolio of Piel Mitra, a Full Stack Web Developer specializing in React, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, and MongoDB.",
  keywords: [
    "Piel Mitra",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Piel Mitra" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");}else{document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#050811] text-slate-900 dark:text-slate-100 antialiased selection:bg-cyan-500/25 selection:text-cyan-700 dark:selection:text-cyan-300">
        <ThemeProvider>
          <ParticleCursor />
          <div className="relative min-h-screen flex flex-col bg-cyber-grid">
            {/* Subtle background ambient glow */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[140px] rounded-full" />
              <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-purple-600/5 dark:bg-purple-600/10 blur-[140px] rounded-full" />
              <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/5 dark:bg-violet-600/10 blur-[140px] rounded-full" />
              <div className="absolute top-[70%] right-[15%] w-[450px] h-[450px] bg-cyan-600/5 dark:bg-cyan-600/5 blur-[120px] rounded-full" />
            </div>

            <Navbar />
            <main className="relative z-10 flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
