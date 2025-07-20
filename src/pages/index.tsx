import { Inter } from "next/font/google";
import PageHead from "@/components/commons/PageHead";
import HeroSection from "@/components/HeroSection";
import ThemeToggle from "@/components/commons/ThemeToggle/ThemeToggle";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <PageHead title="Gulfa Portfolio" />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
