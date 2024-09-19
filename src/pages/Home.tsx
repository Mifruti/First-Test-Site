import { Link } from "react-router-dom";

import vector_strelka_eba from "../assets/img/Vector 431 (Stroke).png";
import Header from "../components/Header.tsx";
import JorneySection from "../components/JorneySection.tsx";
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
    </div>
  );
}

export default Home;
