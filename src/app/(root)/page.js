import HeroSection from "@/components/hero-section";
import { NavigationBar } from "@/components/navbar";

export default function RootHome() {
  return (
    <div className={`min-h-screen w-full ai-gradient-bg`}>
      <NavigationBar />
      <HeroSection/>
    </div>
  );
}
