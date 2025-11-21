import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { LaunchStrategy } from "@/components/LaunchStrategy";
import { BusinessModel } from "@/components/BusinessModel";
import { Metrics } from "@/components/Metrics";
import { Glossary } from "@/components/Glossary";
import { Conclusion } from "@/components/Conclusion";
import { LinkedInContact } from "@/components/LinkedInContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Overview />
      <LaunchStrategy />
      <BusinessModel />
      <Metrics />
      <Glossary />
      <Conclusion />
      <LinkedInContact />
    </div>
  );
};

export default Index;
