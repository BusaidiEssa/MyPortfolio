import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2007 - 2020"}
                  timeline_title={"General Education Diploma "}
                  location={"Qurum Private School"}
                  details={
                    "I completed my GED at Qurum Private School, gaining strong academic skills, and critical thinking abilities to excel in a professional environment."
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2020-2025 (ongoing)"}
                  timeline_title={"BSC in Computer Science"}
                  location={"Gutech"}
                  details={
                    "I am currently pursuing a BSc in Computer Science at GUtech, studying under esteemed professors and gaining practical experience through various events ."
                  }
                />
              </div>
              {/* <div className= {`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2020 - 2022"}
                  timeline_title={"Diploma in Computer Science "}
                  location={"Govt. Polytechnic Kotdwara"}
                  details={"Pursued the diploma in Computer Science & Engineering with 9 cgpa from Uttrakhand Board Of Technical Education"}
                  img={
                    "https://www.gpkotdwar.org.in/images/gallery/l8THHpO6.jpg"
                  }
                />
              </div> */}
              {/* <div className= {`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2022 - 2025"}
                  timeline_title={"Bachelors in Computer Applications"}
                  location={"University Of Mysore"}
                  details={
                    "Currently completing my Bachelors Degree in Computer Applications (Online) from Mysore University"
                  }
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq25wBcbXkIUAg1yyYvwNMT--QIk76V1QFkI0rIdt5Kw&s"
                  }
                />
              </div> */}
            </div>
          </div>
          {/* <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2022 - 2023"}
                  timeline_title={"TGT Teacher"}
                  location={"Bal Bharti Public School, Kotdwara"}
                  details={
                    "I have worked as a junior teacher in school and also worked in management. "
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2023 - 2024"}
                  timeline_title={"Apprentice Engineer "}
                  location={"Bharat Electronics Limited, Ktd."}
                  details={
                    "Worked as an Apprentice Engineer for 1 year under BEL Kotdwara, Ministry of External Affairs"
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2024"}
                  timeline_title={"PGT Teacher"}
                  location={"Navyug Public School, Kotdwara"}
                  details={
                    "I am working as an IT Teacher at senior secondary level."
                  }
                />
              </div>
             
            </div>
          </div> */}
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
