import Navbar from "../../../components/Navbar";
import styles from "../../../styles/contact.module.css";

const Contact = () => {
  return (
    <html lang="en">
      <title>Contact</title>
      <body>
        <div>
          <Navbar />
          <div className="container-fluid">
            <div className={`row ${styles.section1} `}>
              <h1>
                “Few realize how important their web presence is, well, you came
                here, that means you do!”
              </h1>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Contact;
