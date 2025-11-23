import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { UserResearch } from "@/components/UserResearch";
import { SolutionRequirements } from "@/components/SolutionRequirements";
import { ExecutionTradeoffs } from "@/components/ExecutionTradeoffs";
import { MetricsSuccess } from "@/components/MetricsSuccess";
import { Impact } from "@/components/Impact";
import { Glossary } from "@/components/Glossary";
import { LinkedInContact } from "@/components/LinkedInContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemStatement />
      <UserResearch />
      <SolutionRequirements />
      <ExecutionTradeoffs />
      <MetricsSuccess />
      <Impact />
      <Glossary />
      <LinkedInContact />
    </div>
  );
};

export default Index;
