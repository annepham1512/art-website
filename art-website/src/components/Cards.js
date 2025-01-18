import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC art movements!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-renai.jpg"
              text="The Renaissance"
              label="The Renaissance"
              path="/quiz"
            />
            <CardItem
              src="images/img-nouve.jpg"
              text="Art Nouveau"
              label="Art Nouveau"
              path="/quiz"
            />
            <CardItem
              src="images/img-dada.jpg"
              text="Dadaism"
              label="Dadaism"
              path="/quiz"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-postim.jpg"
              text="Post-Impressionism"
              label="Post-Impressionism"
              path="/insights"
            />
            <CardItem
              src="images/img-impre.jpg"
              text="Impressionism"
              label="Impressionism"
              path="/sign-up"
            />
            <CardItem
              src="images/img-absexp.jpg"
              text="Abstract Expressionism"
              label="Abstract Expressionism"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
