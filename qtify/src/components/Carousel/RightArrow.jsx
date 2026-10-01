import React from "react";
import rightArrow from "../../assets/right-arrow.svg";
import styles from "./Carousel.module.css";

function RightArrow({ onClick }) {
  return (
    <button
      className={styles.arrow}
      onClick={onClick}
      aria-label="Next"
    >
      <img src={rightArrow} alt="Next" />
    </button>
  );
}

export default RightArrow;