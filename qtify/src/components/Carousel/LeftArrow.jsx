import React from "react";
import leftArrow from "../../assets/left-arrow.svg";
import styles from "./Carousel.module.css";

function LeftArrow({ onClick }) {
  return (
    <button
      className={styles.arrow}
      onClick={onClick}
      aria-label="Previous"
    >
      <img src={leftArrow} alt="Previous" />
    </button>
  );
}

export default LeftArrow;