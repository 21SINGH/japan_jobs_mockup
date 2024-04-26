"use client";
import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const Router = useRouter();

  const [lightMode, setLightMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("mode");
      return savedMode ? JSON.parse(savedMode) : false;
    } else {
      return false;
    }
  });

  const toggleStyle = () => {
    setLightMode((prevMode) => {
      const newMode = !prevMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("mode", JSON.stringify(newMode));
      }
      return newMode;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    if (lightMode) {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
  }, [lightMode]);
  

  return (
    <div className={`${styles.main} ${lightMode ? styles.light : styles.dark}`}>
      <div className={styles.navbar}>
        <div className={styles.right}>
          {" "}
          <div
            className={styles.imgContainer}
            onClick={() => {
              Router.push("/");
            }}
          >
            <img src="/tree.jpeg" alt="icon" />
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.text}>
            <Link href="/jobs">Search jobs</Link>
          </div>
          <div onClick={toggleStyle} className={styles.el}>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 96 960 960"
              width="28"
            >
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
