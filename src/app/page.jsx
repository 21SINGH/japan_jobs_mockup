"use client";
import AuroraHero from "@/components/AuroHero";
import React, { useState , useRef, useEffect, useContext} from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import LanContext from "@/context/lanContext";

const Page = () => {
  const {language} = useContext(LanContext);
  return (
    <div>
      <AuroraHero />
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.center}>
            <div className={styles.heading}>
            <h1>{language === "jap" ? "Japanese Work Culture." : "日本の仕事文化"}</h1>
            </div>
            <div className={styles.subHeading}>
            <p>
                {language === "jap"
                  ? "Discover the essence of Japanese work culture with us,"
                  : "私たちと一緒に日本の仕事文化の本質を発見してください。"}
              </p>
              <p>
                {language === "jap"
                  ? "your gateway to professional excellence in the Land of the Rising Sun."
                  : "昇る太陽の国での専門的な卓越性へのゲートウェイ。"}
              </p>
            </div>
            <div className={styles.button}>
              <Link href="/jobs">
              {language === "jap" ? "View Jobs In Japan" : "日本の仕事を見る"}
                <svg
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49966 1.01851C8.50988 0.742553 8.29446 0.510563 8.01851 0.500342L3.52159 0.33379C3.24564 0.32357 3.01365 0.538989 3.00343 0.814942C2.99321 1.09089 3.20862 1.32288 3.48458 1.33311L7.48184 1.48115L7.33379 5.47841C7.32357 5.75436 7.53899 5.98635 7.81494 5.99657C8.09089 6.0068 8.32288 5.79138 8.3331 5.51542L8.49966 1.01851ZM1.34023 7.8664L8.34023 1.3664L7.65977 0.633603L0.659774 7.1336L1.34023 7.8664Z"
                    fill="#4479E2"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.conatiner}>
         
        </div>
      </div>
    </div>
  );
};

export default Page;
