
import React, { useEffect, useState } from "react";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../Carousel/Carousel";
import styles from "./Albums.module.css";

function Albums({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [endpoint]);

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2>{title}</h2>

        <button
          className={styles.showAll}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show All" : "Collapse"}
        </button>
      </div>

      {showAll ? (
        <Carousel
          data={albums}
          renderComponent={(album) => <AlbumCard album={album} />}
        />
      ) : (
        <div className={styles.cards}>
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Albums;
