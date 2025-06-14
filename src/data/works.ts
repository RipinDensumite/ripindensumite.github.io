// Define project data type
export interface ProjectType {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  imgSrc: string;
  link?: string;
  github?: string;
  category?: string;
  technologies?: string[];
  year?: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Marketing And Management System (MAMS)",
    description:
      "Web-based marketing and management system to streamline marketing efforts.",
    fullDescription:
      "A comprehensive web-based marketing and management system designed to streamline marketing efforts for staff, enhancing their ability to attract visitors and access materials efficiently. The system includes user authentication, role-based access control, and a dashboard for monitoring marketing metrics.",
    imgSrc: "/work/mams.png",
    link: "https://mams.site/",
    github: "",
    category: "Web Application",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Pocketbase"],
    year: "2024",
  },
  {
    id: 2,
    title: "PharmaGains",
    description:
      "Simple shopping cart system made during web development course.",
    fullDescription:
      "A shopping cart system developed as part of a web development course. Features user authentication, product management, shopping cart functionality, and checkout process. The system allows users to browse products, add them to cart, and complete purchases.",
    imgSrc: "/work/pharmagains.png",
    link: "",
    github: "https://github.com/RipinDensumite/PharmaGains",
    category: "Web Application",
    technologies: ["HTML", "CSS", "PHP", "MySQL", "XAMP"],
    year: "2024",
  },
  {
    id: 3,
    title: "KUDO QUIZ",
    description:
      "An interactive quiz application in C featuring user authentication.",
    fullDescription:
      "An interactive quiz application developed in C, featuring user authentication, administrative controls for quiz management, and an automated scoring system. The application allows users to take quizzes on various topics, tracks their scores, and provides feedback on performance.",
    imgSrc: "/work/kudo-quiz.png",
    link: "",
    github: "https://github.com/RipinDensumite/KUDO-QUIZ",
    category: "Terminal Software",
    technologies: ["C", "File I/O", "Data Structures"],
    year: "2022",
  },
  {
    id: 4,
    title: "ThinWatcher",
    description:
      "A lightweight monitoring solution for thin clients that provides real-time session tracking and management through a modern web interface.",
    fullDescription:
      "ThinWatcher is a comprehensive monitoring solution for thin client environments. Designed for IT administrators, it provides real-time visibility into client sessions, and connection status. The application features a responsive dashboard with session metrics. Built with modern web technologies, ThinWatcher helps organizations efficiently manage their thin client infrastructure with minimal overhead.",
    imgSrc: "/work/thinwatcher.png",
    link: "https://thinwatcher.ripin.xyz",
    github: "https://github.com/RipinDensumite/thinwatcher",
    category: "Web Application",
    technologies: ["Vite.js", "React", "Tailwind CSS", "Node.js", "Express.js"],
    year: "2025",
  },
];
