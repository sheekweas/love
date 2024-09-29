import React, { useState } from "react";
import Header from "./comp/Header/Header";
import Song from "./comp/Song/Song"
import Gallery from "./comp/Gallery/Gallery";
import Letter from "./comp/Letter/Letter";
import Adjectives from "./comp/Adjectives/Adjectives";
import Footer from "./comp/Footer/Footer"

function App() {
  return (
    <div>
      <Header />
      <Song />
      <Letter />
      {/* <Gallery /> */}
      <Adjectives />
      <Footer />
    </div>
  );
}

export default App;
