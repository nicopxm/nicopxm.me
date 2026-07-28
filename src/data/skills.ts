export interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "GTM & Revenue Systems",
    skills: [
      "HubSpot",
      "Clay",
      "n8n",
      "Apollo",
      "CRM Architecture",
      "Lead Scoring",
      "ICP Definition",
      "Outbound Sequencing",
      "Lifecycle Routing",
      "Attribution",
      "Data Enrichment"
    ],
  },
  {
    name: "Data Engineering & Backend",
    skills: [
      "Python",
      "SQL",
      "PostgreSQL",
      "Supabase",
      "ETL Data Pipelines",
      "Data Automation",
      "Database Normalization"
    ],
  },
  {
    name: "Data Analytics & Visualization",
    skills: [
      "Tableau",
      "Power BI",
      "Data Visualization",
      "Marketing Metrics",
      "Trend Reporting",
      "Ad-Spend Optimization"
    ],
  },
  {
    name: "Specializations & Models",
    skills: [
      "Machine Learning",
      "Predictive Modeling",
      "Risk Intelligence",
      "Credit Risk Scorecards",
      "API Integration",
      "GitHub Actions (CI/CD)"
    ],
  },
  {
    name: "How I Work",
    skills: [
      "Agile Methodology",
      "Scrum Framework",
      "Jira / Confluence",
      "Sprint Planning",
      "Backlog Refinement",
      "Stakeholder Collaboration"
    ],
  },
];

const skills = skillCategories.flatMap((category) => category.skills);

export { skillCategories };
export default skills;
