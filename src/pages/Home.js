import React from "react";
import BannerImage from "../assets/bgg.jpg";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 className="title">ZAHARA RIAD</h1>
        
      </div>
    </div>
  );
}

export default Home;
