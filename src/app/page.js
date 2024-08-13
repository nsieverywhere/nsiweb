"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [profileHovered, setProfileHovered] = useState(false);

  return (
    <html lang="en">
      <title>Home</title>
      <body className={styles.body}>
        <Navbar />
        <div className={styles.container}>
          <div
            className={`${styles.leftText} ${
              profileHovered ? styles.profile_hovered : ""
            }`}
          >
            <p>HI,</p>
            <p> I AM NSIKAN SIMON, dev</p>
            <h1
              className={` ${profileHovered ? styles.h1_profile_hovered : ""}`}
            >
              SOFTWARE
            </h1>
          </div>
          <div className={styles.centerDiv}>
            <Image
              className={styles.Nsikan_profile}
              src={"/images/Nsikan.png"}
              width={350}
              height={350}
              onMouseOver={() => setProfileHovered(true)}
              onMouseOut={() => setProfileHovered(false)}
            />
          </div>
          <div
            className={`${styles.rightText} ${
              profileHovered ? styles.right_profile_hovered : ""
            }`}
          >
            <h1
              className={`${profileHovered ? styles.h1_profile_hovered : ""}`}
            >
              ENGINEER
            </h1>
          </div>
          <div className={styles.bottomText}>
            <p className={styles.description}>
              I create web experiences for companies and individuals, with a
              focus on building a unique digital experience.
            </p>
            <Link className={styles.worklink} href="/works">
              <div className={styles.works}>
                <p>Works</p>
                <p class={styles.line}></p>
              </div>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
