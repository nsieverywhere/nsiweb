"use client";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className={styles.button} onClick={toggleNav}>
        <Image
          className={styles.hamburger_icon}
          src={nav ? "/images/close.png" : "/images/menu.png"}
          width={nav ? 25 : 30}
          height={nav ? 25 : 30}
        />
      </div>

      <ul className= {`${styles.ul} ${nav ? styles.menuVisible : ''}`}>
        <li
          className={`${styles.li_style} ${
            activeLink === "/" ? styles.activeLink : ""
          }`}
        >
          <Link className={styles.nav_link} href="/">
            HOME
          </Link>
        </li>
        <li
          className={`${styles.li_style} ${
            activeLink === "/works" ? styles.activeLink : ""
          }`}
        >
          <Link className={styles.nav_link} href="/works">
            WORKS
          </Link>
        </li>
        <li
          className={`${styles.li_style} ${
            activeLink === "/contact" ? styles.activeLink : ""
          }`}
        >
          <Link className={styles.nav_link} href="/contact">
            CONTACT
          </Link>
        </li>
        <li
          className={`${styles.li_style} ${
            activeLink === "/about" ? styles.activeLink : ""
          }`}
        >
          <Link className={styles.nav_link} href="/about">
            ABOUT
          </Link>
        </li>
      </ul>
      {/* <button className={styles.button} onClick={toggleNav}>
        <Image className={styles.hamburger_icon} src="/images/menu.png" width={30} height={30} />
      </button>
      <Image className={styles.hamburger_icon} src="/images/close.png" width={25} height={25} /> */}
    </>
  );
}

export default Navbar;
