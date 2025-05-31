import React from "react";
import styles from "./LoadingSectionStyle.module.css";
import LoadingSpinner from "../icons/LoadingSpinner";

const LoadingSection = () => {
  return (
    <section className={styles.loadingSection}>
      <div className={styles.loadingCard}>
          <div className={styles.spinnerWrapper}>
            {/* LoadingSpinner does not accept className, so use Color prop and style wrapper */}
            <LoadingSpinner Color="#ffbe0b" Size={50} />
          </div>
          <h2 className={styles.loadingText}>Loading, please wait...</h2>
      </div>
    </section>
  );
};

export default LoadingSection;
