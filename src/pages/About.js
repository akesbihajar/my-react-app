import React from "react";
import BG from "../assets/about.png";
import "../Styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BG})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
      

        Welcome to our riad – a peaceful oasis nestled in the heart of the medina. More than just a place to stay, our riad offers an authentic Moroccan experience where tradition, comfort, and hospitality come together.

We invite you to relax in our beautifully decorated rooms, designed with traditional Moroccan craftsmanship, perfect for a restful stay. Discover the rich and flavorful world of Moroccan cuisine at our restaurant, where our chefs prepare homemade dishes like tagines, couscous, pastilla, and more.

To make your stay even more memorable, we offer a variety of cultural and leisure activities: cooking classes, traditional hammam, guided excursions, camel rides, and more.

Our passionate team is here to ensure your stay is unforgettable. Come and experience the true soul of Morocco with us.


        </p>
      </div>
    </div>
  );
}

export default About;