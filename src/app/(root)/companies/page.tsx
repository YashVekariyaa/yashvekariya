import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import CompaniesCard from "@/components/companies/companies-card";
import { companies } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.company.metadata.title,
  description: pagesConfig.company.metadata.description,
};

export default function CompaniesPage() {
  return (
    <PageContainer
      title={pagesConfig.company.title}
      description={pagesConfig.company.description}
    >
      <CompaniesCard companies={companies} type="page" />
    </PageContainer>
  );
}
