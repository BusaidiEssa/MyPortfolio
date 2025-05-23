import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import productstore from "../../assets/productstore.png";
import marketingIMG from "../../assets/marketingIMG.png";
import travelHookIMG from "../../assets/travelhookIMG.png";
import safecamIMG from '../../assets/safecamIMG.png'
import quizIMG from '../../assets/quizIMG.png'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from '../../Components/Circle/Circle'
import MainContainer from "../../Components/MainContainer/MainContainer";
import Netflixclone from "../../assets/Netflixclone.png"
import AI_App from "../../assets/AI_App.png"

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"}/>
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"}/>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard previewLink={"https://movieeb.netlify.app/"}
            githubLink={"https://github.com/BusaidiEssa/NetflixClone"}
            projectName={"Netflix clone using React"}
            projectDetails={"Building a Netflix clone using TMDB API and firebase for user authentication and registration"}
            demoImage={Netflixclone}
            skill_img={[
              "https://cdn.worldvectorlogo.com/logos/react-2.svg",
              "https://cdn.worldvectorlogo.com/logos/html-1.svg",
              "https://cdn.worldvectorlogo.com/logos/css-3.svg",
              "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
            ]}/>
            {/* 
            <ProjectCard
              previewLink={"https://productpage-sbpt.onrender.com/"}
              githubLink={"https://github.com/BusaidiEssa/productpage"}
              projectName={"Product store"}
              projectDetails={
                "It is an Product Data Management System in which we can store the data of the products and use CRUD operations"
              }
              demoImage={productstore}
              key={"Team Trackr App"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg",
              ]}
            />*/}
            {<ProjectCard
              previewLink={"https://ai-chatbot-frontend-lwk2.onrender.com"}
              githubLink={
                "https://github.com/BusaidiEssa/AI-Chatbot"
              }
              projectName={"AI Chatbot"}
              projectDetails={
                "A fun and interactive full-stack AI chatbot application"
              }
              demoImage={AI_App}
              key={"AI CHAT APP"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg",
              ]}
            />/* 
            <ProjectCard
              previewLink={"https://travelhook.netlify.app/"}
              githubLink={"https://github.com/shivam1611/travel-hook"}
              projectName={"Travel Hook Webpage"}
              projectDetails={
                "It is a responsive and Mobile friendly static webpage created using pure HTML, CS and jQuery."
              }
              demoImage={travelHookIMG}
              key={"Travel Hook Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard 
            previewLink={"https://kaleidoscopic-nougat-c405ab.netlify.app/"}
            githubLink={"https://github.com/shivam1611/safe-cams-static-website"}
            projectName={"SafeCam Webpage"}
            projectDetails={"It is a responsive and Mobile friendly static webpage created using pure HTML, CS and jQuery."}
            demoImage={safecamIMG}
            key={"SafeCam Webpage"}
            skill_img={[
              "https://cdn.worldvectorlogo.com/logos/html-1.svg",
              "https://cdn.worldvectorlogo.com/logos/css-3.svg",
              "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
            ]} 
            /> */}

          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      >
        
      </motion.div>
    </div>
  );
}

export default Projects;
