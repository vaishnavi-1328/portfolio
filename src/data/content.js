export const personalInfo = {
  name: "Vaishnavi S",
  roles: ["Data Scientist", "ML Engineer", "Research Assistant"],
  email: "svaishna@msu.edu",
  phone: "(517)-348-6511",
  linkedin: "https://www.linkedin.com/in/vaishnavisundaraganapathi/",
  github: "https://github.com/vaishnavi-1328",
  website: "https://vaish.framer.website/",
  location: "Michigan, USA",
};

export const about = {
  summary: `Masters student in Data Science with experience in building production ML pipelines and deployments.
  Have worked on high-dimensional data preprocessing systems in Python, with experience in statistical data processing
  and building ML models deployed in real-time production environments.`,
  highlights: [
    { label: "GPA", value: "3.833" },
    { label: "Experience", value: "2+ Years" },
    { label: "Projects", value: "10+" },
    { label: "Publications", value: "2" },
  ],
  description: `Master's-level training in statistical inference, machine learning, and optimization.
  Hands-on experience designing iterative model improvement frameworks, representation learning approaches,
  and scalable data pipelines across large complex datasets.`,
};

export const experience = [
  {
    company: "BorgWarner",
    role: "Data Science Intern",
    location: "Detroit, Michigan",
    period: "Oct 2025 – Present",
    description: [
      "Designed and implemented a multi-agent active learning pipeline using Python and LangGraph to iteratively extract, validate, and refine data from multi-source inputs — each cycle builds PPT presentations for stakeholders, saving 8 hours of research to 5 minutes",
      "Developed a Solar energy prediction model using historic data, deployed XGBoost Tweedie model in real-time to estimate daily solar energy for powering electric cars on campus",
    ],
    technologies: ["Python", "LangGraph", "XGBoost", "Neural Networks", "GLMs"],
  },
  {
    company: "Michigan State University",
    role: "Research Assistant – Data Science",
    location: "East Lansing, Michigan",
    period: "Jun 2025 – Jan 2026",
    description: [
      "Built a chatbot with LLM fine-tuned on agricultural data. Performed A/B testing using Bayesian analysis",
      "Performed statistical analysis of carbon flux data for soil health prediction, built Android chatbot app for data collection and personalized predictions",
    ],
    technologies: ["LLM", "Bayesian Analysis", "A/B Testing", "Android", "Statistical Analysis"],
  },
  {
    company: "Michigan State University",
    role: "Research Assistant – Computer Vision",
    location: "East Lansing, Michigan",
    period: "Jun 2025 – Oct 2025",
    description: [
      "Developed bird counting system using Gaussian filtering, motion detection, and edge detection with background filters to accurately identify and count birds",
    ],
    technologies: ["Computer Vision", "Gaussian Filtering", "Motion Detection", "Edge Detection"],
  },
  {
    company: "Boeing",
    role: "Data Engineer",
    location: "India",
    period: "Jul 2022 – Aug 2024",
    description: [
      "Built and maintained scalable ML classification pipelines over 5M+ daily records on Azure Databricks using Python and PySpark",
      "Implemented MLflow-based model monitoring and experiment tracking to benchmark model variants and manage training lifecycle",
      "Designed blue-green deployment strategy ensuring 96% uptime; reduced model deployment cycle time by 85% through CI/CD automation",
    ],
    technologies: ["Azure Databricks", "PySpark", "MLflow", "CI/CD", "Python"],
  },
  {
    company: "Dutchview",
    role: "Intern",
    location: "Remote",
    period: "Feb 2022 – Jul 2022",
    description: [
      "Built web pages and gained full-stack experience in JavaScript, HTML, and npm",
      "Performed A/B testing on customer datasets, built Power BI dashboards for performance analysis",
    ],
    technologies: ["JavaScript", "HTML", "npm", "Power BI", "A/B Testing"],
  },
];

export const education = [
  {
    institution: "Michigan State University",
    degree: "Master of Science in Data Science",
    period: "Expected May 2026",
    gpa: "3.833",
    courses: ["Deep Learning", "Machine Learning", "Statistical Inference", "Representation Learning", "Operations Research", "Optimization"],
  },
  {
    institution: "Ramaiah Institute of Technology",
    degree: "Bachelor of Engineering in Information Science",
    period: "Graduated Feb 2023",
    gpa: "3.86",
    courses: ["Computer Science Fundamentals", "Data Structures", "Algorithms"],
  },
];

export const projects = [
  {
    title: "Corewell Healthcare Analytics Platform",
    description: "Built comprehensive Tableau analytics platform comparing funding information across institutions. Created automated data flows and performed text analysis using BERT and TF-IDF models with 92% accuracy in funding categorization.",
    technologies: ["Tableau", "BERT", "TF-IDF", "Data Analytics"],
    date: "May 2025",
    github: "https://github.com/vaishnavi-1328/capstone",
    live: "https://capstonestt890.streamlit.app",
    image: "/projects/healthcare-analytics.png",
  },
  {
    title: "Yelp Recommendation System",
    description: "Built hybrid recommendation engine on Yelp dataset using Graph Neural Networks and Bayesian Neural Networks. Embedded reviews into ChromaDB vector space for feature-based recommendations.",
    technologies: ["Graph Neural Networks", "Bayesian NN", "ChromaDB", "PyTorch"],
    date: "Jan 2026",
    github: "https://github.com/vaishnavi-1328/Restaurant_recommender",
    live: "https://restaurantpick.streamlit.app",
    image: "/projects/yelp-recommendation.png",
  },
  {
    title: "Solar Energy Prediction Model",
    description: "Deployed XGBoost Tweedie model in real-time to estimate daily solar energy generation for powering electric vehicles on campus. Also built and tested Neural Network and GLM models.",
    technologies: ["XGBoost", "Neural Networks", "GLMs", "Real-time ML"],
    date: "2025",
    github: "",
    live: "",
    image: "/projects/solar-energy.png",
  },
  {
    title: "Agricultural Chatbot",
    description: "Fine-tuned LLM with agricultural data for soil health predictions. Performed A/B testing using Bayesian analysis. Built Android app to collect user data and provide personalized recommendations.",
    technologies: ["LLM", "Fine-tuning", "Bayesian A/B Testing", "Android"],
    date: "2025",
    github: "",
    live: "",
    image: "/projects/agricultural-chatbot.png",
  },
  {
    title: "Image to DXF Converter",
    description: "Built with Agentic AI using Claude Code. Applies edge detection (computer vision) to identify patterns and generate laser-ready DXF files via AutoCAD MCP server for laser cutting applications.",
    technologies: ["Agentic AI", "Claude Code", "Computer Vision", "AutoCAD MCP", "Edge Detection"],
    date: "2025",
    github: "https://github.com/vaishnavi-1328/Image-to-DXF",
    live: "https://img-dxf.streamlit.app",
    image: "/projects/image-to-dxf.png",
  },
  {
    title: "March Madness Predictor",
    description: "Predicting the winner in the NCAA basketball tournament game using machine learning models and historical tournament data.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Sports Analytics"],
    date: "2026",
    github: "",
    live: "",
    image: "/projects/march-madness.png",
  },
  {
    title: "Bird Identification & Counting System",
    description: "Developed an automated bird counting system using Gaussian filtering, motion detection, and edge detection with background filters to accurately identify and count birds in video feeds.",
    technologies: ["Computer Vision", "Gaussian Filtering", "Motion Detection", "Edge Detection"],
    date: "2025",
    github: "",
    live: "",
    image: "/projects/bird-counting.png",
  },
  {
    title: "Air Quality Prediction",
    description: "Predicting air quality levels using machine learning models based on environmental and meteorological data.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "Environmental Science"],
    date: "2024",
    github: "https://github.com/vaishnavi-1328/Airquality_pred",
    live: "",
    image: "",
  },
  {
    title: "Graph Convolutional Network",
    description: "Implementation of Graph Convolutional Networks for learning on graph-structured data and network analysis.",
    technologies: ["GCN", "PyTorch", "Graph Neural Networks", "Deep Learning"],
    date: "2024",
    github: "https://github.com/vaishnavi-1328/Network-graph",
    live: "",
    image: "",
  },
  {
    title: "Bank Database System",
    description: "A comprehensive banking database management system with transaction handling, account management, and data integrity features.",
    technologies: ["SQL", "Database Design", "Python", "Backend"],
    date: "2023",
    github: "https://github.com/vaishnavi-1328/bank-system",
    live: "",
    image: "",
  },
  {
    title: "Recognising Image Forgery",
    description: "Detecting manipulated and forged images using computer vision and deep learning techniques for digital forensics.",
    technologies: ["Computer Vision", "Deep Learning", "Image Processing", "Python"],
    date: "2023",
    github: "https://github.com/vaishnavi-1328/Recognising-image-forgery",
    live: "",
    image: "",
  },
  {
    title: "Agentic Blogging Assistant",
    description: "An AI-powered blogging assistant that helps automate content creation, editing, and publishing workflows using agentic AI.",
    technologies: ["LLM", "Agentic AI", "Python", "NLP"],
    date: "2025",
    github: "https://github.com/vaishnavi-1328/Agentic-Blogging-Assistant",
    live: "",
    image: "",
  },
  {
    title: "Advocate - Customised Ads Generator",
    description: "An AI-powered platform that automates market research, marketing strategy development, and advertisement generation through specialized AI agents.",
    technologies: ["Azure OpenAI", "LangChain", "ChromaDB", "Streamlit"],
    date: "2025",
    github: "https://github.com/phanikiran1169/Advocate",
    live: "",
    image: "",
  },
  {
    title: "Stock Market Value Prediction",
    description: "Extracted data from Alphavantage for real-time stock market analysis. Combined historical data, seasonality detection, sentiment analysis, and predictive modeling using time series models like LSTM, ARIMA, and SARIMA.",
    technologies: ["Python", "LSTM", "ARIMA", "Sentiment Analysis", "Time Series"],
    date: "2024",
    github: "https://github.com/vaishnavi-1328/CMSE_project",
    live: "",
    image: "",
  },
];

export const skills = {
  "Programming & Data": ["Python", "SQL", "R", "pandas", "NumPy"],
  "ML & AI": ["PyTorch", "TensorFlow", "Scikit-learn", "Deep Learning", "LLMs"],
  "Data Engineering": ["ETL/ELT", "PySpark", "Azure Databricks", "MLflow", "CI/CD"],
  "Cloud & Tools": ["Azure", "GCP", "Docker", "Git", "Apache Spark"],
  "Visualization": ["Tableau", "Power BI", "matplotlib", "seaborn"],
  "Statistical Methods": ["Regression", "Statistical Inference", "Causal Inference", "Bayesian Analysis"],
};

export const publications = [
  {
    title: "Security and Privacy in 5G-Enabled Internet of Things: A Data Analysis Perspective",
    publisher: "Springer International Publishing",
    year: "2021",
    link: "#",
  },
  {
    title: "Automated Supply Chain Management System",
    publisher: "GIJET - Grenze International Journal of Engineering and Technology",
    year: "2023",
    link: "#",
  },
];

export const recommendations = [
  {
    name: "Mani Sekhar",
    title: "Professor, MSRIT",
    text: "Vaishnavi has proved to be an ambitious student in not just academics but is a person with a positive attitude and a helpful nature. For my understanding, she is very skillful and she works hard to complete her tasks on time.",
  },
  {
    name: "Sumana M",
    title: "Professor, MSRIT",
    text: "As a student she showed great perseverance towards learning. I have observed her curiosity to explore new subjects outside her curriculum. She and her team successfully developed a project on supply chain management which was primarily focused on demand prediction for supply chain and building a webpage for buying and selling of products in the system. She contributed to developing the major part in the project. The research paper which was written based on this project was accepted for the ComNet2022-523 conference (Scopus conference). As a mentor, I affirm that she works hard to meet all her deadlines and complete work without glitches.",
  },
];

export const blogs = [
  {
    title: "RAG Explained",
    image: "/blogs/rag.png",
    link: "https://medium.com/@vaishnavi.sundaraganapathi1328/rag-explained-the-open-book-exam-for-language-models-d2739f7cd7e3",
  },
  {
    title: "SIFT: Image Feature Matching",
    image: "/blogs/sift.png",
    link: "https://medium.com/@vaishnavi.sundaraganapathi1328/sift-a-masterclass-in-modern-image-feature-matching-baeb7ca0f344",
  },
  {
    title: "Beginner's Guide to GANs",
    image: "/blogs/gans.png",
    link: "https://medium.com/@vaishnavi.sundaraganapathi1328/beginners-guide-to-gan-s-aece76394215",
  },
  {
    title: "Understanding Multihead Attention",
    image: "/blogs/attention.png",
    link: "https://medium.com/@vaishnavi.sundaraganapathi1328/a-detailed-journey-towards-understanding-multihead-attention-26902c13b598",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];
