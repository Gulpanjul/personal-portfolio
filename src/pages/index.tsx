import { Inter } from "next/font/google";
import PageHead from "@/components/commons/PageHead";
import HeroSection from "@/components/HeroSection";
import { ThemeToggle } from "@/components/commons/ThemeToggle/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <PageHead title="Gulfa Portfolio" />
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>
      <div className="container mx-auto px-12">
        <HeroSection />
      </div>
    </main>
  );
}
