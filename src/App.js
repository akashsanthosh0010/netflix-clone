import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import { Banner } from "./components/Banner/Banner";
import { RowPost } from "./components/RowPost/RowPost";
import { action, originals, trending, comedy, horror, romance, documetary, topRated } from "./urls"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={topRated} title="Top Rated" isSmall />
      <RowPost url={trending} title="Trending" isSmall />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documetary} title="Documentary" isSmall />

    </div>
  );
}


export default App;
