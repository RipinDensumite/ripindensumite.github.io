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
    imgSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=jpg&q=80&w=3000",
    link: "https://mams.site/",
    github: "https://github.com/RipinDensumite/mams",
    category: "Web Application",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
    year: "2023",
  },
  {
    id: 2,
    title: "PharmaGains",
    description:
      "Simple shopping cart system made during web development course.",
    fullDescription:
      "A shopping cart system developed as part of a web development course. Features user authentication, product management, shopping cart functionality, and checkout process. The system allows users to browse products, add them to cart, and complete purchases.",
    imgSrc:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?fm=jpg&q=80&w=3000",
    link: "",
    github: "https://github.com/RipinDensumite/PharmaGains",
    category: "Web Application",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    year: "2022",
  },
  {
    id: 3,
    title: "KUDO QUIZ",
    description:
      "An interactive quiz application in C featuring user authentication.",
    fullDescription:
      "An interactive quiz application developed in C, featuring user authentication, administrative controls for quiz management, and an automated scoring system. The application allows users to take quizzes on various topics, tracks their scores, and provides feedback on performance.",
    imgSrc:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?fm=jpg&q=80&w=3000",
    link: "",
    github: "https://github.com/RipinDensumite/KUDO-QUIZ",
    category: "Terminal Software",
    technologies: ["C", "File I/O", "Data Structures"],
    year: "2021",
  },
];
