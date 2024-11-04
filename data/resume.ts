import { Icons } from '@/components/icons';

export const DATA = {
  name: 'Nehil Jain',
  initials: 'NJ',
  org: 'Demo Drive',
  title: 'Applied AI Consultant',
  currentFocus: 'Building AI-powered products',
  location: 'SF Bay Area',
  email: 'hello@nehiljain.com',
  description:
    "Hey! I'm Nehil, an AI hacker who loves building cool stuff with LLMs. I've won 3 AI hackathons back-to-back, helped Fortune 500s deploy AI at scale, and now I'm having a blast building AI products that makes developers' lives better. Ex-McKinsey Principal Engineer, always down to geek out about agents, RAG, and making AI systems reliable.",
  avatarUrl: '/nehil_profile_pic.jpg',
  contact: {
    social: {
      GitHub: {
        icon: Icons.gitHub,
        url: 'https://github.com/nehiljain',
        label: 'GitHub',
        navbar: true
      },
      LinkedIn: {
        icon: Icons.linkedIn,
        url: 'https://linkedin.com/in/nehiljain',
        label: 'LinkedIn',
        navbar: true
      },
      Twitter: {
        icon: Icons.twitter,
        url: 'https://x.com/nehiljain',
        label: 'Twitter',
        navbar: true
      }
    }
  },
  skills: [
    {
      type: 'AI and Machine Learning',
      tools: [
        'Agentic Applications',
        'RAG',
        'Finetuning',
        'Forecasting',
        'MLOps'
      ]
    },
    {
      type: 'Data Engineering and Infrastructure',
      tools: [
        'Python',
        'SQL',
        'Dagster',
        'Airflow',
        'MLFlow',
        'Snowflake',
        'Databricks',
        'Azure ML',
        'dbt'
      ]
    }
  ],
  work: [
    {
      company: 'QuantumBlack, McKinsey',
      title: 'Principal AI Engineer',
      start: 'Nov 2022',
      end: 'Apr 2024',
      description: 'Led AI engineering initiatives for enterprise clients',
      href: 'https://www.mckinsey.com/capabilities/quantumblack/how-we-help-clients/'
    },
    {
      company: 'QuantumBlack, McKinsey',
      title: 'Senior AI Engineer II',
      start: 'Jan 2021',
      end: 'Oct 2022',
      href: 'https://www.mckinsey.com/capabilities/quantumblack/how-we-help-clients/'
    },
    {
      company: 'Super.com',
      title: 'Engineering Manager - Data',
      start: 'Jan 2019',
      end: 'Nov 2020',
      href: 'https://www.super.com/'
    },
    {
      company: 'Super.com',
      title: 'Founding Engineer - Data',
      start: 'Jul 2016',
      end: 'Dec 2018',
      href: 'https://www.super.com/'
    },
    {
      company: 'Athletigen',
      title: 'Founder',
      start: 'Apr 2013',
      end: 'Jul 2016',
      href: 'https://www.athletigen.com/'
    }
  ],
  education: [
    {
      school: 'BITS Pilani University',
      degree: 'MS in Mathematics & B.E. in Electronics',
      start: '2008',
      end: '2013',
      location: 'Pilani, Rajasthan, India'
    }
  ],
  publications: [
    {
      title: 'World Wide Waste',
      date: '2023-10',
      url: 'https://www.learnwithgurpreet.com/posts/world-wide-waste/',
      description: 'Book review on reducing digital environmental impact'
    }
  ],
  projects: [
    {
      industry: 'DevTools',
      title: 'ProoferX - AI Documentation Validator',
      status: 'current',
      description:
        'Won Code Interpreter 2.0 Hackathon by building an AI tool that tests code in technical guides to make sure they actually work.',
      impact:
        'Found incomplete/incorrect code examples in OpenAI, Vite, and E2B docs. Saves developer time by automatically catching outdated documentation.',
      role: 'Tech Lead',
      technologies: ['CrewAI', 'E2B Sandbox', 'Fireworks AI', 'LangChain']
    },
    {
      industry: 'DevTools',
      title: 'LazyPMs - AI Release Notes Generator',
      status: 'past',
      description:
        'Won LangChain Factory Hackathon by building an agentic system that automates writing and tailoring software release notes for different stakeholders using a multi-agent architecture.',
      impact:
        'Created a solution that transforms sparse release notes into rich documentation tailored for different audiences (CEO, developers, downstream teams) through coordinated AI agents.',
      role: 'Tech Lead',
      technologies: ['Langgraph', 'LangChain', 'Fireworks AI', 'GitHub API']
    },
    {
      industry: 'Events',
      title: 'KinConnect - AI Hackathon Team Matcher',
      status: 'past',
      description:
        'Built and won MongoDB GenAI Hackathon by creating an AI-powered tool that matches hackathon participants based on their profiles, skills, and interests.',
      impact:
        'Won $2000 in Fireworks AI credits. Created a scalable solution using hybrid search (vector + keyword) for optimal matching, with costs under $1 for development.',
      role: 'Tech Lead',
      technologies: ['Fireworks AI', 'MongoDB Atlas', 'FastAPI', 'LangChain']
    },
    {
      industry: 'Personal Finance',
      title: 'AI-Driven Personal Budget Assistant',
      status: 'past',
      description:
        'Currently building an AI-driven application designed to automate the categorization of personal financial transactions. This project involves using state-of-the-art Large Language Models (LLMs) to classify transactions based on descriptions and enriched context from Google search results.',
      impact:
        'The initiative aims to reduce manual categorization errors, enhance user experience by minimizing the need for manual input, and improve financial management efficiency.',
      role: 'AI Engineer',
      technologies: ['Python', 'OpenAI API', 'Groq', 'LangSmith']
    },
    {
      industry: 'Insurance',
      title: 'Insurance Support Copilot',
      status: 'past',
      description:
        'Led the development of a groundbreaking MVP that leveraged Gen AI to revolutionize the ops and support of a re-insurance provider.',
      impact:
        'Realized approximately $50M in savings by optimizing the onboarding and modeling of insurance contracts. Created a sophisticated knowledge graph to enable powerful reasoning with large language models, reducing actuarial work hours by 64%.',
      role: 'Tech Lead',
      technologies: [
        'AWS',
        'Kubernetes',
        'Langchain',
        'FastAPI',
        'React',
        'Sagemaker'
      ]
    },
    {
      industry: 'Telecommunications',
      title: 'Telecom Customer Retention Enhancement',
      status: 'past',
      description:
        'Initiated and led the development of advanced machine learning models that successfully increased the customer win-back rate by 11%.',
      impact:
        'Enhanced customer retention strategies and set a new benchmark for predictive analytics in the telecommunications sector.',
      role: 'Tech Lead',
      technologies: ['AWS Databricks', 'Airflow', 'Dbx']
    },
    {
      industry: 'Mining',
      title: 'Mining Operations Optimization',
      status: 'past',
      description:
        'Managed a team of 9 data engineers and machine learning experts to implement cutting-edge ML solutions that enhanced core mining processes.',
      impact:
        'Reduced mining carbon footprint by 4%. Implemented MLOps best practices for model versioning and deployment, involving 18 models in production retrained monthly.',
      role: 'ML Tech Lead',
      technologies: [
        'Azure Databricks',
        'Dagster',
        'Azure',
        'Snowflake',
        'dbt',
        'pyGAM'
      ]
    },
    {
      industry: 'Consumer Packaged Goods',
      title: 'CPG Supply Chain Optimization',
      status: 'past',
      description:
        'Designed and implemented a comprehensive org-wide quality solution that significantly enhanced the reliability of data products, driving business decisions.',
      impact:
        'Increased revenue by 18% within a single quarter through predictive modeling of customer fulfillment rates.',
      role: 'ML Tech Lead',
      technologies: ['Snowflake', 'dbt', 'Azure', 'AzureML']
    },
    {
      industry: 'Travel and Hospitality',
      title: 'Data-Driven Transformation at SnapTravel',
      status: 'past',
      description:
        "Led a team of 12 to overhaul SnapTravel's data platform, integrating advanced analytics that supported strategic business decisions.",
      impact:
        'Helped pivot the company from growth-focused strategies to profitability in just three months during the challenging first quarter of the COVID-19 pandemic.',
      role: 'Engineering Manager - Data',
      technologies: [
        'Airflow',
        'DBT',
        'Snowflake',
        'Looker',
        'Dynamo DB',
        'Spark'
      ]
    },
    {
      industry: 'Health and Fitness',
      title: 'Athletigen Data Intelligence Platform',
      status: 'past',
      description:
        'Founded and led the development of a data intelligence platform integrating various data sources and accessed by thousands of users.',
      role: 'Founding Engineer',
      technologies: [
        'Python',
        'Spark',
        'AWS (Redshift, Lambda, EC2, S3)',
        'R',
        'd3.js',
        'MongoDb'
      ]
    }
  ],
  navbar: [
    {
      href: '/',
      label: 'Home',
      icon: Icons.logo
    },
    {
      href: '/projects',
      label: 'Projects',
      icon: Icons.code
    },
    {
      href: '/cv',
      label: 'CV',
      icon: Icons.user
    },
    {
      href: '/writing',
      label: 'Writing',
      icon: Icons.pen
    }
  ]
};
