import React from "react";
import styles from "./SongCard.module.css";

function SongCard({ song }) {
  return (
    <div className={styles.card}>
      <img src={song.image} alt={song.title} className={styles.image} />

      <p className={styles.title}>{song.title}</p>

      <p className={styles.artists}>
        {song.artists.join(", ")}
      </p>
    </div>
  );
}

export default SongCard;
