/* ================================
   PERSONAL PORTFOLIO CONFIG FILE
   ================================ */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Greeting Section
const greeting = {
  username: "Mohsin Khan",
  title: "Hi, I'm Mohsin",
  subTitle: emoji(
    "Cloud & DevOps Lead with 15+ years of experience in AWS, DevOps, Generative AI, and Enterprise Integration. I design scalable cloud systems, AI-driven automation, and mission-critical EDI platforms for global enterprises."
  ),
  resumeLink: "/",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/mohsin-khan-a694458b",
  gmail: "mohsinkhan8282@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "CLOUD, DEVOPS, AI & ENTERPRISE INTEGRATION ARCHITECT",

 skills: [
  emoji("⚡ Architect and migrate large-scale enterprise systems to AWS using scalable and serverless architectures"),
  emoji("⚡ Build and automate CI/CD pipelines and cloud infrastructure using Jenkins, GitHub, and DevOps best practices"),
  emoji("⚡ Develop Generative AI, RAG-based solutions, and AI chatbots using OpenAI, LangChain, Python, and Flask"),
  emoji("⚡ Lead enterprise EDI & B2B integrations and deliver mission-critical logistics and supply chain platforms")
],
softwareSkills: [
    // Cloud & DevOps
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "Jenkins", fontAwesomeClassname: "fas fa-project-diagram" },

    // Programming
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },

    // AI & Automation
    { skillName: "OpenAI", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "LangChain", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "Generative AI", fontAwesomeClassname: "fas fa-microchip" },

    // Databases
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Oracle", fontAwesomeClassname: "fas fa-database" },

    // Integration & EDI
    { skillName: "EDI", fontAwesomeClassname: "fas fa-exchange-alt" },
    { skillName: "REST APIs", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "AS2 / SFTP", fontAwesomeClassname: "fas fa-lock" }
  ],

  display: true
};


// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Vivekananda Education Society, Mumbai",
      logo: require("./assets/images/education.jpeg"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "Aug 2008 – Jul 2011",
      desc: "Focused on software development, databases, and enterprise systems."
    }
  ]
};

// Tech Stack Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Cloud & DevOps (AWS)", progressPercentage: "90%" },
    { Stack: "Enterprise Integration & EDI", progressPercentage: "85%" },
    { Stack: "Python & Automation", progressPercentage: "80%" },
    { Stack: "Generative AI", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Technology Team Lead",
      company: "Infosys",
      companylogo: require("./assets/images/infosys.jpeg"),
      date: "Jan 2018 – Present | Dubai, UAE",
      desc: "Leading cloud, DevOps, AI, and enterprise integration programs for global clients.",
      descBullets: [
        "Led migration of legacy enterprise platforms to AWS, reducing operational costs by 40%",
        "Architected scalable serverless solutions using AWS Lambda, S3, CloudFront, and APIs",
        "Designed and delivered Generative AI and RAG-based solutions using OpenAI and LangChain",
        "Led global teams and stakeholders to deliver mission-critical systems in logistics and supply chain"
      ]
    },
    {
      role: "Senior Application Developer",
      company: "CMA CGM",
      companylogo: require("./assets/images/cmacgm.jpg"),
      date: "Oct 2013 – Dec 2017 | Dubai, UAE",
      desc: "Built enterprise-grade EDI and API integrations for global shipping operations.",
      descBullets: [
        "Developed and maintained large-scale EDI integrations supporting global shipping and customs",
        "Automated EDI workflows using Python, reducing manual processing by nearly 50%",
        "Optimized EDI transformation logic, improving data accuracy and operational efficiency"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "L&T Infotech",
      companylogo: require("./assets/images/lnt.png"),
      date: "Aug 2011 – Sep 2013 | Mumbai, India",
      desc: "Worked on backend systems and enterprise integrations.",
      descBullets: [
        "Developed backend applications supporting ERP and EDI integrations",
        "Worked on data validation, transformation, and production issue resolution"
      ]
    }
  ]
};


// Open Source Section (disabled – no GitHub provided)
const openSource = {
  showGithubProfile: "false",
  display: false
};

// Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "REAL-WORLD AUTOMATION & AI SYSTEMS",
  projects: [
    {
      projectName: "WhatsApp Automation Bot",
      projectDesc:
        "Automated WhatsApp messaging using Twilio, Flask, Python, and MongoDB.",
      footerLink: [
        { name: "Live Demo", url: "https://wa-auto-mise.onrender.com" }
      ]
    },
    {
      projectName: "AI PDF Chatbot & Summarizer",
      projectDesc:
        "AI-powered chatbot for querying and summarizing PDFs using Gemini and Python.",
      footerLink: [
        { name: "Live Demo", url: "https://pdfchatbot-flask.onrender.com/" }
      ]
    }
  ],
  display: true
};

// Achievements & Certifications
const achievementSection = {
  title: emoji("Certifications & Awards 🏆"),
  subtitle: "Professional Certifications and Recognitions",
  display: true,
  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle: "2023 – Present",
      image: require("./assets/images/aws.jpg"),
      imageAlt: "AWS Certification",
      footerLink: []
    },
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "2022 – 2025",
      image: require("./assets/images/aws2.jpg"),
      imageAlt: "AWS Certification",
      footerLink: []
    },
    {
      title: "Generative AI with Large Language Models",
      subtitle: "2024",
      image: require("./assets/images/ai.png"),
      imageAlt: "Generative AI",
      footerLink: []
    },
    {
      title: "Infosys Quarterly & Insta Awards",
      subtitle: "2021 – 2023",
      image: require("./assets/images/infosys.jpeg"),
      imageAlt: "Infosys Awards",
      footerLink: []
    }
  ]
};


// Disabled Sections (No data in CV)
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const twitterDetails = { display: false };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to Cloud, DevOps, and AI leadership opportunities.",
  number: "+971 56 980 1983",
  email_address: "mohsinkhan8282@gmail.com"
};

// Hireable Status
const isHireable = true;

// EXPORTS
export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
