import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./AlbumCard.module.css";

function AlbumCard({ album }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={album.image}
          alt={album.title}
          className={styles.image}
        />

        <Chip
          label={`${album.follows} Follows`}
          size="small"
          className={styles.chip}
        />
      </div>

      <p className={styles.title}>{album.title}</p>
    </div>
  );
}

export default AlbumCard;