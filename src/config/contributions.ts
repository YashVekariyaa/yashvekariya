export interface CompanyInterface {
  name: string;
  logo: string;
}

export const companies: CompanyInterface[] = [
  { name: "Traveldate", logo: "/companies/Traveldate.png" },
  { name: "Stepmade", logo: "/companies/stepmade.png" },
  { name: "AdOpus", logo: "/companies/adopuslogo.png" },
  { name: "Satadhar", logo: "/companies/satadhar.png" },
  { name: "Belite", logo: "/companies/belite.png" },
  { name: "Vianee", logo: "/companies/Vianee.png" },
  { name: "can-connect", logo: "/companies/canconnect.png" },
];

export const featuredCompanies: CompanyInterface[] = companies.slice(0, 3);
