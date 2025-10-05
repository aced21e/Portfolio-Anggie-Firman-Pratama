export const siteConfig = {
  name: "Anggie Firman Pratama",
  title: "Data Analyst",
  description: "Portfolio website of Anggie Firman Pratama",
  accentColor: "#1d4ed8",
  social: {
    email: "anggiefirman02@gmail.com",
    linkedin: "linkedin.com/in/anggie-f-89a205126",
    twitter: "https://x.com/firman_anggie",
    github: "https://github.com/aced21e",
  },
  aboutMe:
    "I am a dedicated and results-oriented professional with a degree in Taxation from Universitas Brawijaya, who values lifelong learning, objectivity, and fairness in my work.My diverse experience spans analytics, team leadership, and financial management, where I have successfully utilized tools like SQL, Python, and Tableau. In my previous position at a creative studio, I achieved a 250% increase in sales within my first month, contributing to a 270% growth in annual revenue through improved client negotiations and market alignment. With a strong balance of analytical skills and business acumen, combined with proactive communication and adaptability, I am eager to leverage these strengths in an Analyst role, delivering insights that drive meaningful results.",
  skills: ["Excel", "Python", "SQL", "Tableau", "Power BI", "ChatGPT+"],
  projects: [
    {
      name: "RevoGrocers Sales Performance Analysis",
      description:
        "Built CTE-based pipelines in BigQuery to compute net revenue after discounts, compare volume vs. unit price, and rank buyer bases; findings show Top-5 categories drive ~60% revenue, with clear price-volume trade-offs and targeted recommendations.",
      link: "https://drive.google.com/file/d/1zbIYwh_AZhZeGsDs6MB5zUm8dOiw0FAP/view?usp=sharing",
      skills: ["SQL"],
    },
    {
      name: "RevoFinance Expense & Budget Utilization Dashboard",
      description:
        "Built a Tableau dashboard that maps total spend, budget utilization (93.66%), seasonal spikes (Ramadan/December), and merchant concentration, then translates the patterns into practical overspend alerts and rebudgeting suggestions.",
      link: "https://drive.google.com/file/d/1-4xrjRyXuXOvPwpsa974EoFnp0pf67Ok/view?usp=sharing",
      skills: ["Tableau"],
    },
    {
      name: "Tri-Risk Dashboard – Corporate Red Flag Analysis",
      description:
        "Designed a TRPI screening model using 200+ financial indicators (2014–2018) to flag tax avoidance, accounting fraud, and distress; applying persistence (≥3/4 years) and concurrence (≥2 signals) reduced ~29% one-off noise and produced a focused Year-4 watchlist with sector-level insights.",
      link: "https://drive.google.com/file/d/1FhJbjSsHYaM7nh8ldTCRPNAXP5C8joz7/view?usp=sharing",
      skills: ["Excel", "Python", "Tableau"],
    },
  ],
  experience: [
    {
      company: "Shaman Dept Studio",
      title: "Business & Marketing Manager",
      dateRange: "March 2024 - Present",
      bullets: [
        "Grew revenue +250% in month one and +270% annually via targeted acquisition and negotiation",
        "Strengthened accounting & tax—improving budget accuracy, compliance, and cash-flow stability",
        "Led a small team, streamlining workflows ~30% while consistently meeting deadlines",
      ],
    },
    {
      organization: "Tax Center FIA UB",
      title: "Vice Coordinator",
      dateRange: "Jan 2020 - Dec 2020",
      bullets: [
        "Led 30 tax volunteers in the annual assistance event, serving hundreds taxpayers and lifting service quality 20% while strengthening university–community ties",
        "Guided 50+ individuals/PTs/CVs through annual tax filings, resolving 50+ cases via 1:1 and online support, boosting compliance 30%",
        "Built and managed event teams for seminars/competitions, delivering 3 major events per year and expanding outreach 40% with targeted promotion",
      ],
    },
    {
      organization: "Student Entrepreneur Center FIA UB",
      title: "Treasurer & Media/IT",
      dateRange: "Sept 2018 - Aug 2019",
      bullets: [
        "Managed finances and reporting; standardized bookkeeping to improve transparency and sustain operations",
        "Secured 10+ sponsorships/year through proposals and negotiation, strengthening partnerships and financial independence",
        "Led media and IT team; implemented a content calendar to lift engagement ~50% and expand cross-platform visibility",
      ],
    },
  ],
  education: [
    {
      school: "Brawijaya University",
      degree: "Bachelor of Taxation",
      dateRange: "2017 - 2024",
      achievements: [
        "Graduated with 3.68 GPA",
      ],
    },
    {
      school: "RevoU",
      degree: "Full Stack Data Analytics",
      dateRange: "2025",
      achievements: [
        "Completed 3 Month of coursework",
        "Built 5+ portfolio projects",
        "Specialized in SQL, Python, Tableau and Power BI",
      ],
    },
  ],
};
