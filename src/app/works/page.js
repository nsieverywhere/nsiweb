import Navbar from "../../../components/Navbar";
import styles from "../../../styles/work.module.css";
import Image from "next/image";

const Works = () => {
  return (
    <html lang="en">
      <title>Works</title>
      <body className={styles.body}>
        <Navbar />
        <div className="container-fluid">
          <div className={`row ${styles.section1} `}>
            <div className={`col-lg-6 ${styles.herotext} `}>
              <h1>“Forward-Thinking”</h1>
              <p>
                That has always been the goal, as a one man band, my aim is to
                build websites that justify the presence and importance of your
                brand.
              </p>
              <p>
                This is why I employ various cutting-edge technologies and
                designs to bring ideas to life.
              </p>
            </div>
            <div className={`col-lg-6 ${styles.heroimg} `}>
              <Image
                className={styles.line}
                src={"/images/line.png"}
                width={450}
                height={450}
              />
              <Image
                className={styles.img1}
                src={"/images/ambience_realty.jpg"}
                width={450}
                height={200}
              />

              <Image
                className={styles.img2}
                src={"/images/carryGo.jpg"}
                width={450}
                height={200}
              />

              <Image
                className={styles.img3}
                src={"/images/Continuum.jpg"}
                width={450}
                height={200}
              />
            </div>
          </div>
          <div className={`row ${styles.section2} `}>
        
        </div>
        </div>
      </body>
    </html>
  );
};

export default Works;
