export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  filename?: string;
}

const certifications: Certification[] = [
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "March 2026",
    credentialUrl: "https://scrum.org/certificates/1303684",
    filename: "scrum_cert.png",
  },
  {
    name: "Inbound Sales Certified",
    issuer: "HubSpot Academy",
    date: "July 2026",
    filename: "inbound_sales_cert.png",
  },
  {
    name: "Google Project Management",
    issuer: "Google / Coursera",
    date: "February 2026",
    credentialUrl:
      "https://coursera.org/verify/professional-cert/AXTXO6SMEGUU",
    filename: "google_pm_cert.png",
  },
  {
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    date: "October 2024",
    credentialUrl:
      "https://coursera.org/verify/professional-cert/C3ADB15KLYU7",
    filename: "google_data_cert.png",
  },
];

export default certifications;
