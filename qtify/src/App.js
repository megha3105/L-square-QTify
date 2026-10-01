import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Albums from "./components/Albums/Albums";
import SongCard from "./components/SongCard/SongCard";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://qtify-backend.labs.crio.do/albums/top")
      .then((response) => response.json())
      .then((data) => setTopAlbums(data));

    fetch("https://qtify-backend.labs.crio.do/songs")
      .then((response) => response.json())
      .then((data) => setSongs(data));
  }, []);

  return (
    <BrowserRouter>
      <Navbar searchData={topAlbums} />

      <Hero />

      <Albums
        title="Top Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/top"
      />

      <Albums
        title="New Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/new"
      />

      <section style={{ padding: "40px 32px" }}>
        <h2>Songs</h2>

        <div
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
          }}
        >
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;