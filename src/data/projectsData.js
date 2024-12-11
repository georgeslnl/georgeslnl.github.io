import artventure from "../assets/ARTventure.jpeg";
import mayaaska from "../assets/MayaAska.png";
import uicopilot from "../assets/ui-copilot.png";
import uclta from "../assets/ucl-ta.png";
import pilates2 from "../assets/pilates2.png";
import bidbuybuild from "../assets/bidbuybuild.png";
import humanitarian from "../assets/humanitarian.png";

const projectsData = [
  {
    id: "maya-aska",
    image: mayaaska,
    altText: "Portfolio website for a photographer",
    title: "Maya-Aska Portfolio",
    date: "2024 - now",
    description: "Portfolio website for a photographer.",
  },
  {
    id: "ui-copilot",
    image: uicopilot,
    altText: "Visual Studio Code extension",
    title: "UI Copilot",
    date: "2024",
    description: "AI-powered UI editor for Visual Studio Code.",
    abstract:
      "Modern Windows frameworks such as WinUI3 lack the visual designer of older tools such as Visual Basic. Additionally, recent advancements in generative AI have opened new possibilities for streamlining the UI creation process. \n\n\n\nThe principle goal of this project is to create a visual designer for WinUI3 that can output designs into code and leverages generative AI to improve the creation process.\n\n\n\nThe resulting solution is UI Copilot, a Visual Studio Code extension that offers an AI-powered drag-and-drop GUI editor. This solution aims to lower the entry barrier for beginners and streamline the process for experienced developers, offering a three-step approach to UI creation: Generate, Customize, and Export.",
    videoUrl: "https://youtube.com/embed/U9KsjIpdhbg",
    github: "https://github.com/lukejlatham/vscode-rapid-gui",
    skills: ["TypeScript", "React", "VS Code API", "OpenAI API"],
  },
  {
    id: "artventure",
    image: artventure,
    altText: "ARTventure project",
    title: "ARTventure.",
    date: "2024 - now",
    description: "Art exhibition to-do list.",
    abstract: `ARTventure is a personal project designed to practice and showcase REST API development and authorization skills.
      It's a web application for art enthusiasts to organize and manage their exhibition visits, functioning as a specialized To-Do list for art exhibitions.
      This project was created with the following goals:
      \n\n- To gain hands-on experience in building a full-stack web application
      \n\n- To practice implementing RESTful API endpoints
      \n\n- To develop secure user authentication and authorization systems
      \n\n- To explore and apply best practices in modern web development`,
    skills: ["Next.js", "MongoDB", "Typescript", "JWT tokens", "Tailwind CSS"],
    github: "https://github.com/georgeslnl/artventure",
    deployedLink: "https://artventure-six.vercel.app",
  },
  {
    id: "ucl-ta-recruitment",
    image: uclta,
    altText: "UCL TA recruitment",
    title: "UCL TA CS recruitment",
    date: "2024",
    description:
      "Recruitment platform for teacher assistants and lecturers at UCL.",
    abstract: `The current recruitment process for TAs is done through a manual process of emailing and filling out forms. \n\n\n\nThe aim of this project is to create a centralized platform for lecturers to post TA vacancies, for students to browse and apply for vacancies,
      and for HR to manage the recruitment process.`,
    videoUrl: "https://youtube.com/embed/eMahumpS-Gk",
    skills: ["Next.js", "PostgreSQL", "Prisma", "Material UI"],
  },
  {
    id: "pilates",
    image: pilates2,
    altText: "Pilates booking website",
    title: "\\Pilates",
    date: "2024",
    description: "Designing a booking system for a Pilates studio.",
    abstract:
      "This project is a software engineering project about designing a booking system for a Pilates studio. \n\n\n\n The purpose of this project was to gain experience with the software development lifecycle, with a focus on requirements gathering, UML modelling, class analysis, and design.",
    videoUrl: "https://youtube.com/embed/lscMQksouRE",
    skills: [
      "UML",
      "Software Development Lifecycle",
      "Figma",
      "Class Analysis",
    ],
  },
  {
    id: "bid-buy-build",
    image: bidbuybuild,
    altText: "Auction-based website for buying and selling furniture",
    title: "Bid, Buy, Build",
    date: "2023",
    description: "Auction-based website for buying and selling furniture.",
    abstract:
      "This project focused on developing a website that allows users to auction off items and bid on them. \n\n\n\nThe aim of this project was to understand backend development with a focus on relational databases and SQL. \n\n\n\nThe project was developed using PHP and MySQL.",
    videoUrl: "https://youtube.com/embed/sFZ4d_Q9QGk",
    skills: ["PHP", "MySQL"],
  },
  {
    id: "humanitarian-management-system",
    image: humanitarian,
    altText: "CLI application",
    title: "Humanitarian Management System",
    date: "2023",
    description:
      "CLI application for managing humanitarian aid during a crisis.",
    abstract:
      "This project is a command-line interface application built with Python and the Pandas libraries. \n\n\n\n Volunteers manage refugee camps during a crisis, enabling them to allocate resources and manage refugees. Admins can also use the application to manage volunteers.",
    videoUrl:
      "https://mediacentral.ucl.ac.uk/player?autostart=n&videoId=20A4JfAI&captions=y&chapterId=0&playerJs=n",
    skills: ["Python", "Pandas"],
  },
];

export default projectsData;
