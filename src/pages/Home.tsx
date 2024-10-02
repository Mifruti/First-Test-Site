import { Link } from "react-router-dom";

import B1 from "../assets/img/B1.png";
import B2 from "../assets/img/B2.png";
import vector_strelka_eba from "../assets/img/Vector 431 (Stroke).png";
import FutureTechFeatures from "../components/FutureTechFeatures.tsx";
import Header from "../components/Header.tsx";
import JorneySection from "../components/JorneySection.tsx";
import SectionOne from "../components/SectionOne.tsx";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div>
      <div className={styles.ad}>
        <p> Subscribe to our Newsletter For New & latest Blogs and Resources</p>
        <Link to={"/"}>
          <img className={styles.link_img} src={vector_strelka_eba} alt="ex" />
        </Link>
      </div>
      <Header />
      <JorneySection />
      <FutureTechFeatures />
      <SectionOne
        title={"Future Technology Blog"}
        description={
          "Stay informed with our blog section dedicated to future technology."
        }
        image={B1}
        blocks={[
          {
            title: "Quantity",
            description:
              "Over 1,000 articles on emerging tech trends and breakthroughs.",
          },
          {
            title: "Variety",
            description:
              "Articles cover fields like AI, robotics, biotechnology, and more.",
          },
          {
            title: "Frequency",
            description: "Fresh content added daily to keep you up to date.",
          },
          {
            title: "Authoritative",
            description:
              "Written by our team of tech experts and industry professionals.",
          },
        ]}
      />
      {/*<SectionOne*/}
      {/*  title={"Research Insights Blogs"}*/}
      {/*  description={*/}
      {/*    "Dive deep into future technology concepts with our research section."*/}
      {/*  }*/}
      {/*  image={""}*/}
      {/*  blocks={[*/}
      {/*    { title: "123", description: "" },*/}
      {/*    { title: "123", description: "" },*/}
      {/*    { title: "123", description: "" },*/}
      {/*    { title: "123", description: "" },*/}
      {/*  ]}*/}
      {/*/>*/}
    </div>
  );
}

export default Home;
