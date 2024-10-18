import React from "react";

import styles from "./SectionOne.module.scss";

interface SectionOneProps {
  title: string;
  description: string;
  image: string;
  blocks: { title: string; description: string }[];
}

const SectionOne: React.FC<SectionOneProps> = (props) => {
  const { title, description, image, blocks } = props; // Позволяет не писать пропсы, а сразу лезет в массив.
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.global}>
          <div className={styles.left_block}>
            <img src={image} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={styles.right_block}>
            {blocks.map((block, i) => (
              <div className={styles.block} key={i}>
                <div className={styles.cap}>
                  <h3>{block.title}</h3>
                  <p>{block.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionOne;
