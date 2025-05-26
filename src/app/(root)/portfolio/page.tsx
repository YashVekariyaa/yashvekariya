import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/portfolio/project-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Portfolios } from "@/config/portfolio";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.portfolio.metadata.title,  
  description: pagesConfig.portfolio.metadata.description,
};

const renderContent = (tabVal: string) => {
  let portArr = Portfolios;
  if (tabVal === "personal") {
    portArr = portArr.filter((val) => val.type === "Personal Project");
  } else if (tabVal === "professional") {
    portArr = portArr.filter((val) => val.type === "Professional");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {Portfolios.map((port) => (
        <ProjectCard project={port} key={port.id} />
      ))}
    </div>
  );
};

export default function PortfolioPage() {
  return (
    <PageContainer
      title={pagesConfig.portfolio.title}
      description={pagesConfig.portfolio.description}
    >
      {renderContent("personal")}
    </PageContainer>
  );
}
