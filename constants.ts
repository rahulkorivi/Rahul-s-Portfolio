import { PersonalInfo, Project, Experience, Certification, Skills, Education, Leadership } from './types';

export const personalInfo: PersonalInfo = {
  name: "KORIVI RAHUL",
  location: "Kamareddy, Telangana",
  email: "korivirahul43@gmail.com",
  phone: "+91 6300033149",
  linkedin: "https://linkedin.com/in/rahul-korivi",
  github: "https://github.com/rahul30i",
  leetcode: "https://leetcode.com/u/rahul30i",
  summary: "I am a results-driven B.Tech 4th-year Computer Science student specializing in Artificial Intelligence and Machine Learning. I have hands-on experience in programming with Java, C++, C#, and Python, and a strong interest in building scalable, efficient, and intelligent software solutions. My passion lies in exploring next-generation cloud capacity management technologies and contributing to high-performance distributed systems. I’m committed to continuous learning, innovation, and applying AI-driven approaches to solve real-world challenges in software development and system optimization..",
  profilePhoto: "https://lh3.googleusercontent.com/d/1Cvt4Fkzx1MJhrD89BaxgVFn87_sUrRJ7"
};

export const projects: Project[] = [
  {
    title: "Smart Career Mentor",
    description: "Engineered a scalable and reliable front-end for a full-stack AI application for personalized career guidance, focusing on high performance and observability.",
    tech: ["React", "TypeScript", "Google Gemini API", "REST APIs"]
  },
  {
    title: "AI Interview Assistant",
    description: "Implemented a Machine Learning feature in Python to automate interview preparation and architected REST APIs for efficient data access and high availability.",
    tech: ["Python", "Flask", "Machine Learning", "REST APIs"]
  },
  {
    title: "WanderLust Data Storage System",
    description: "Developed a robust backend with Node.js and authored design documents for a high-scale distributed data storage system focusing on high availability.",
    tech: ["JavaScript", "Node.js", "MongoDB", "REST APIs"]
  }
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Swecha",
    location: "Hyderabad, Telangana",
    duration: "Experience",
    duties: [
      "Collaborated to design and implement new software features in a Unix/Linux environment, improving efficiency by 15%.",
      "Authored and maintained high-quality C++ code, improving availability, reliability, and performance.",
      "Served as a Designated Responsible Individual (DRI), monitoring system features and executing playbooks for service restoration."
    ]
  }
];

export const certifications: Certification[] = [
    { 
    name: "AI Creators Internship program", 
    issuer: "Swecha",
    imageUrl: "https://lh3.googleusercontent.com/d/1WYfFFRtoIoqSGTOqhGxp-7qzbpw1_e2X"
  },
    { 
    name: "Generative AI", 
    issuer: "LinkedIn Learning",
    imageUrl: "https://lh3.googleusercontent.com/d/1i2CH7qiWPbu6TF-5scLCm5LzeQe9q8MN"
  },
  { 
    name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional", 
    issuer: "Oracle",
    imageUrl: "https://lh3.googleusercontent.com/d/1hkLgJtvDkcViwMPJPTlh0vIkcMJLhzws" 
  },
  { 
    name: "Full-Stack Web Development", 
    issuer: "Apna College",
    imageUrl: "https://lh3.googleusercontent.com/d/11C3DAlUdNyOS1xUeI-Vzzhx5eYx10C18"
  },
  { 
    name: "Data Structures & Algorithms (Java)", 
    issuer: "Apna College",
    imageUrl: "https://lh3.googleusercontent.com/d/1wB4WvJ5G5muTOlcRVp867rK7ueiETNcN"
  },
];

export const skills: Skills = {
    "Languages": ["C", "C++", "C#", "Java", "JavaScript", "Python", "SQL", "HTML/CSS"],
    "Core Areas": ["High-Scale Distributed Systems", "Cloud Capacity Management", "System Design", "Data Structures & Algorithms", "Software Engineering", "Reliability", "Performance", "Observability"],
    "Cloud & DevOps": ["Microsoft Azure", "AWS", "Google Cloud", "Docker", "Git", "CI/CD", "REST APIs"],
    "Frameworks & Tools": ["React", "Node.js", "Flask", "Unix/Linux", "VS Code", "GitHub"]
};

export const education: Education = {
    institution: "Institute of Aeronautical Engineering",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    location: "Hyderabad, Telangana"
};

export const leadership: Leadership[] = [
    {
        title: "Problem-Solving",
        description: "Demonstrated expertise in Data Structures and Algorithms by solving 100+ challenges on LeetCode using C++, Java, and Python."
    },
    {
        title: "Collaboration",
        description: "Applied a growth mindset and innovative approach in a competitive hackathon, collaborating with peers to realize shared goals and empower team success."
    }
];