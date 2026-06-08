export interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
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
    name: "Project Management & Agile",
    skills: [
      "Agile Methodology",
      "Scrum Framework",
      "Jira / Confluence",
      "Sprint Planning",
      "Backlog Refinement",
      "Stakeholder Collaboration"
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
];

const skills = [
  "Python",
  "SQL",
  "Tableau",
  "Power BI",
  "PostgreSQL",
  "Supabase",
  "Agile Methodology",
  "Scrum Framework",
  "Jira / Confluence",
  "Machine Learning",
  "ETL Data Pipelines",
  "Data Automation",
  "Predictive Modeling",
  "Risk Intelligence",
  "Marketing Metrics",
  "Ad-Spend Optimization",
  "Sprint Planning",
  "Stakeholder Collaboration",
  "GitHub Actions (CI/CD)"
];

export { skillCategories };
export default skills;