import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import marketingIMG from "../../assets/marketingIMG.png";
import travelHookIMG from "../../assets/travelhookIMG.png";
import safecamIMG from '../../assets/safecamIMG.png';
import quizIMG from '../../assets/quizIMG.png';
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from '../../Components/Circle/Circle';
import MainContainer from "../../Components/MainContainer/MainContainer";
import Netflixclone from "../../assets/Netflixclone.png";
import AI_App from "../../assets/AI_App.png";
import japansearch from "../../assets/japansearch.png";

const projectList = [
  {
    previewLink: "https://movieeb.netlify.app/",
    githubLink: "https://github.com/BusaidiEssa/NetflixClone",
    projectName: "Netflix Clone using React",
    projectDetails: "Building a Netflix clone using TMDB API and Firebase for user authentication and registration",
    demoImage: Netflixclone,
    skill_img: [
      "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
      "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    ],
  },
  {
    previewLink: "https://japanfoodsearch.netlify.app",
    githubLink: "https://github.com/BusaidiEssa/Japan-food-search.git",
    projectName: "Japanese Food Search",
    projectDetails: "A simple web app to explore delicious Japanese cuisine using TheMealDB API",
    demoImage: japansearch,
    skill_img: [
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    ],
  },
  {
    previewLink: "https://ai-chatbot-frontend-lwk2.onrender.com",
    githubLink: "https://github.com/BusaidiEssa/AI-Chatbot",
    projectName: "AI Chatbot",
    projectDetails: "A fun and interactive full-stack AI chatbot application",
    demoImage: AI_App,
    skill_img: [
      "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
      "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg",
    ],
  },

  // Optional: Uncomment to re-enable these legacy static projects
  /*
  {
    previewLink: "https://travelhook.netlify.app/",
    githubLink: "https://github.com/shivam1611/travel-hook",
    projectName: "Travel Hook Webpage",
    projectDetails: "A responsive, mobile-friendly static webpage using pure HTML, CSS, and jQuery.",
    demoImage: travelHookIMG,
    skill_img: [
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    ],
  },
  {
    previewLink: "https://kaleidoscopic-nougat-c405ab.netlify.app/",
    githubLink: "https://github.com/shivam1611/safe-cams-static-website",
    projectName: "SafeCam Webpage",
    projectDetails: "Responsive static webpage for SafeCam using HTML, CSS, and jQuery.",
    demoImage: safecamIMG,
    skill_img: [
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    ],
  },
  */
];

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right="-6rem" top="-8rem" />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title="My projects" />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3, stiffness: 100 }}
            className={styles.projects_component}
          >
            {projectList.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Projects;
