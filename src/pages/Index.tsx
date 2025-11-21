import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { LaunchStrategy } from "@/components/LaunchStrategy";
import { BusinessModel } from "@/components/BusinessModel";
import { Metrics } from "@/components/Metrics";
import { Conclusion } from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Overview />
      <LaunchStrategy />
      <BusinessModel />
      <Metrics />
      <Conclusion />
    </div>
  );
};

export default Index;
