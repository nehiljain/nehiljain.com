import { Icons } from '@/components/icons';

export const DATA = {
  name: 'Nehil Jain',
  initials: 'NJ',
  org: 'Anyscale',
  title: 'Member of Technical Staff',
  currentFocus: 'Scaling AI infrastructure for the enterprise',
  location: 'SF Bay Area',
  email: 'hello@nehiljain.com',
  description:
    "Hey! I'm Nehil, an AI infrastructure engineer who loves making AI systems work at scale. I help Fortune 500s like PayPal, Notion, and Instacart deploy and optimize their AI infrastructure on Ray. Before this, I founded DemoDrive AI (won 4 hackathons), was a Principal AI Engineer at McKinsey, and co-founded a biotech startup. Always down to geek out about distributed systems, LLMs, and making AI reliable in production.",
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
        'LLM Serving',
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
        'Ray',
        'Spark',
        'Dagster',
        'Airflow',
        'MLFlow',
        'Snowflake',
        'Databricks',
        'dbt'
      ]
    },
    {
      type: 'Cloud and Distributed Systems',
      tools: [
        'AWS',
        'Azure',
        'GCP',
        'Kubernetes',
        'Docker',
        'A100/H100 GPUs'
      ]
    }
  ],
  work: [
    {
      company: 'Anyscale',
      title: 'Member of Technical Staff',
      start: 'Sep 2025',
      end: 'Present',
      description:
        'Technical consulting for Fortune 500 AI infrastructure on Ray. Drive customer demos, POCs, and expansions for accounts like PayPal, Notion, Instacart, and Rivian. Shipped Turbopuffer DataSink connector to Ray OSS (PR #58910). Drove 6x contract renewal at Notion ($40K to $250K).',
      href: 'https://www.anyscale.com/'
    },
    {
      company: 'DemoDrive AI',
      title: 'Founder & CEO',
      start: 'May 2024',
      end: 'Aug 2025',
      description:
        'Built AI-powered video editor for DevTools teams from zero-to-one. Created 120+ automated videos for 5 pilot customers, reducing content creation time by 70%. Won 4 hackathons including MongoDB GenAI ($2K) and Luma AI (solo win).',
      href: 'https://demodrive.ai'
    },
    {
      company: 'QuantumBlack, McKinsey',
      title: 'Principal AI Engineer',
      start: 'Nov 2022',
      end: 'Apr 2024',
      description:
        'Led AI engineering for Fortune 500 clients. Built LLM RAG system saving ~$5M/year for insurance client, delivered $29M EBITDA impact in CPG supply chain, and managed 9-person team reducing mining carbon footprint by 4%.',
      href: 'https://www.mckinsey.com/capabilities/quantumblack/how-we-help-clients/'
    },
    {
      company: 'QuantumBlack, McKinsey',
      title: 'Senior AI Engineer II',
      start: 'Jan 2021',
      end: 'Oct 2022',
      description:
        'Built churn prediction models increasing customer win-back by 11% QoQ. Reduced pipeline runtime from 2 hours to 4 minutes (96% improvement) through incremental processing.',
      href: 'https://www.mckinsey.com/capabilities/quantumblack/how-we-help-clients/'
    },
    {
      company: 'Super.com',
      title: 'Tech Lead - Data',
      start: 'Jan 2019',
      end: 'Nov 2020',
      description:
        'Led 12-person team building unified data platform processing 5M+ daily events. Pivoted company to profitability in 3 months during COVID. Built smart bidding system improving ROAS by 20%.',
      href: 'https://www.super.com/'
    },
    {
      company: 'Super.com',
      title: 'Founding Engineer - Data',
      start: 'Jul 2016',
      end: 'Dec 2018',
      description:
        'Built scalable event pipeline (5M events/day) and location recognition model (F1: 0.96). Contributed to 22% YoY revenue uplift.',
      href: 'https://www.super.com/'
    },
    {
      company: 'Athletigen',
      title: 'Co-Founder',
      start: 'Apr 2013',
      end: 'Jul 2016',
      description:
        'Co-founded biotech startup combining genomics and AI for elite athletes. Scaled to 16,000 reports, built 8-person engineering team, and designed genetic analytics pipeline on Spark and AWS.',
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
      title: 'Building Reusable and Trustworthy ELT Pipelines',
      date: '2020-07',
      url: 'https://www.youtube.com/watch?v=4JYD3JjGMCk',
      description: 'Talk at Airflow Summit 2020 on building reliable data pipelines'
    },
    {
      title: 'Using Airflow to Orchestrate dbt',
      date: '2020-05',
      url: 'https://www.youtube.com/watch?v=4JYD3JjGMCk',
      description: 'Presentation at dbt Office Hours on orchestrating dbt with Airflow'
    }
  ],
  projects: [
    {
      industry: 'AI Infrastructure',
      title: 'Turbopuffer DataSink Connector for Ray Data',
      status: 'current',
      description:
        'Built and shipped production-grade vector database connector to Ray OSS (PR #58910), enabling streaming writes from Ray Data pipelines to Turbopuffer. Solved complex memory optimization using sort+slice over dictionary accumulation for zero additional allocation.',
      impact:
        'Unblocked Notion migration to Anyscale, contributing to 6x contract growth ($40K to $250K). Implemented column-oriented batching for 10x write performance. Fixed PyArrow hash-order bug preventing silent data corruption.',
      role: 'Member of Technical Staff',
      technologies: ['Ray Data', 'PyArrow', 'Turbopuffer', 'Python', 'AWS']
    },
    {
      industry: 'Robotics',
      title: 'Petabyte-Scale Robotics Data Pipeline',
      status: 'current',
      description:
        'Designed Ray Data pipeline for autonomous systems processing 3+ petabytes of sensor data. Direct MCAP-to-tensor pipeline with on-the-fly H265 decoding, eliminating multi-day ETL bottlenecks.',
      impact:
        'Enabled heterogeneous compute architecture (CPU data processing, GPU training) at 512-node H100 scale. Reduced S3 traffic and intermediate artifacts by streaming directly from raw sensor data.',
      role: 'Member of Technical Staff',
      technologies: ['Ray Data', 'MCAP', 'H265', 'PyTorch', 'H100 GPUs', 'Kubernetes']
    },
    {
      industry: 'DevTools',
      title: 'DemoDrive - AI Video Editor for DevRel',
      status: 'past',
      description:
        'Built AI-powered video editor from scratch with AI agents as first-class citizens. Created 120+ automated videos for 5 pilot customers.',
      impact:
        'Reduced content creation time by 70%. Secured 1 paid pilot (Whiterabbit.ai, Series C) and 2 design partners (E2B.dev, FireworksAI).',
      role: 'Founder & CEO',
      technologies: [
        'Django',
        'React',
        'Claude 3.5 Sonnet',
        'Gemini Flash',
        'Remotion',
        'Playwright',
        'ffmpeg'
      ]
    },
    {
      industry: 'Real Estate',
      title: 'AI House Tour Video Generator',
      status: 'past',
      description:
        'Won Luma AI Hackathon as the only solo participant. Built tool that generates cinematic house tour videos from Zillow listings using AI.',
      impact:
        'Demonstrated end-to-end AI video generation pipeline producing 100+ videos from real estate data.',
      role: 'Solo Developer',
      technologies: ['Luma AI', 'Python', 'Zillow API']
    },
    {
      industry: 'DevTools',
      title: 'ProoferX - AI Documentation Validator',
      status: 'past',
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
      title: 'Insurance Claims Processing with LLM RAG',
      status: 'past',
      description:
        'Led 7-person team building LLM RAG system for life insurance policy processing. Built OCR ingestion pipeline using AWS Textract with LangChain integration.',
      impact:
        'Achieved 82% accuracy, reduced actuarial workflow dependencies by 64%, saving ~$5M annually.',
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
