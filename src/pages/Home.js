import React from "react";
import "../Styles/Home.css";
import VideoBg from "../assets/video.mp4"; // remplace par ton nom de fichier

function Home() {
  return (
    <div className="home">
      {/* Vidéo en arrière-plan */}
      <video autoPlay muted loop className="background-video">
        <source src={VideoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
    </div>
  );
}

export default Home;
