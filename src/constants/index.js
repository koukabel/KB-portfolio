//import {blackBg, geppetto, norauto } from "../assets/images";
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  chakra,
  sql,
  redis,
  nextjs,
  nodejs,
  react,
  redux,
  tailwindcss,
  typescript,
  wp,
  vue,
  docker,
  confluence,
} from '../../public/assets/icons';

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },

  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: docker,
    name: 'Docker',
    type: 'Containerization',
  },

  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
 

  {
    imageUrl: sql,
    name: 'SQL',
    type: 'Database',
  },
  {
    imageUrl: redis,
    name: 'Redis',
    type: 'Database',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
   {
    imageUrl: vue,
    name: 'Vue',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: chakra,
    name: 'chakra UI',
    type: 'Frontend',
  },
  {
    imageUrl: wp,
    name: 'wp',
    type: 'Frontend',
  },
   {
    imageUrl: confluence,
    name: 'confluence',
    type: 'Frontend',
  }
];

export const myProjects = [
  {
    title: 'Luxelair: an airbnb clone',
    desc: 'Luxelair is a comprehensive Airbnb clone that offers a seamless experience for both hosts and guests. It allows users to list properties, manage bookings, and communicate effectively, all while ensuring a user-friendly interface. The platform is designed to be intuitive and efficient, making it easy for users to navigate and utilize its features.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Ckakra UI, TypeScript, PostgresQL and Docker, Luxelair is designed for optimal performance and scalability. The app is hosted on infinity free. The backend is powered by PostgreSQL, providing a robust and secure database solution. Docker is used for containerization, making deployment and management of the application easier and more efficient.',
    href: 'https://www.google.com',
    texture: 'textures/project/luxelair.mp4',
    logo: 'assets/icons/logo_white.png',
    logoStyle: {
      backgroundColor: 'white',
      border: '0.2px solid #36201D',
      boxShadow: '',
    },
    spotlight: '',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'assets/react.svg',
      },
      {
        id: 2,
        name: 'Chakra',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: 'assets/typescript.png',
      },
      {
        id: 4,
        name: 'Next.js',
        path: 'assets/icons/nextjs.svg',
      },
      {
        id: 4,
        name: 'docker',
        path: 'assets/icons/docker.png',
      },
      {
        id: 5,
        name: 'redis',
        path: 'assets/icons/redis.png',
      },
    ],
    sourceCode: "https://github.com/koukabel/luxelair", 
    liveSource:"https://home.beltodev.org/luxelair/"
  },
  {
    title: 'Studio Geppetto - Live',
    desc: "Studio Geppetto is a wordpress project that displays a motion design artist's lastest works and achievements. It is a portfolio website that showcases the work of a talented motion designer, featuring a range of projects and animations.",
    subdesc:
      "The site is designed to be visually appealing and easy to navigate, with a focus on showcasing the designer's skills and creativity. The website includes a portfolio section, where visitors can view the designer's work, as well as an about section that provides information about the designer and his background.",
    href: 'https://www.google.com',
    texture: 'textures/project/Geppetto.mp4',
    logo: 'assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: 'assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'wp',
        path: 'assets/icons/wp.png',
      },
      {
        id: 2,
        name: 'cSS',
        path: 'assets/icons/css.svg',
      },
      {
        id: 3,
        name: 'js',
        path: 'assets/icons/javascript.svg',
      },
    ],
    sourceCode: "", 
  liveSource:""
  },
  {
    title: 'Memory game',
    desc: 'The site is a simple and fun memory game that challenges players to match pairs of cards. The game is designed to be easy to play, with a clean and intuitive interface that makes it accessible to players of all ages.',
    subdesc:
      'The game features a grid of cards that are face down, and players take turns flipping over two cards at a time to try to find matching pairs. If the cards match, they remain face up, and if they do not match, they are flipped back over. The game continues until all pairs have been matched.',
    href: 'https://www.google.com',
    texture: 'textures/project/memory.mp4',
    logo: 'assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: 'assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: 'assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: 'assets/typescript.png',
      },
    ],
  sourceCode: "https://github.com/koukabel/mashup-game", 
  liveSource:""
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [3, -6, 1] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [10, 2, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-22, 7, 0],
    targetPosition: isSmall ? [-5, -10, -15] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Sudio Geppetto',
    pos: 'Wordpress Developer',
    duration: 'Sep 2024 - March 2025',
    title:
      'Successfully migrated an existing PHP website to WordPress while preserving all functionality and improving maintainability. Built a WordPress theme from scratch following best practices for performance and scalability. Implemented advanced user experience features to enhance engagement and conversion rates. Deployed and managed the website on OVH Cloud infrastructure for optimal performance.',
    icon: 'assets/icons/wp.png',
  },
  {
    id: 2,
    name: 'Front-end Developer',
    pos: 'Norauto',
    duration: '2023 - 2024',
    title:
      'Built client-facing interface for internal tool. Designed relational database architecture. Developed Stripe payment integration component. Deployed application to testing environment.',
    icon: 'assets/icons/vue.png',
  },
  {
    id: 3,
    name: 'React | Node Developer',
    pos: 'CAC 40',
    duration: 'Jan 2021 - Jan 2023',
    title:
      'Led documentation initiative using Docusaurus framework.Contributed to Design System enhancements and component library. Developed user-facing features to optimize UX workflows. Created test suites (Cypress + unit tests).Implemented CI/CD pipelines for automated testing and deployment. Participating in code reviews and providing constructive feedback to other developers.',
    icon: 'assets/react.svg',
  },
];
