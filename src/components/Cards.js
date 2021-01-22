import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <div className="cards">
        <h1>Check out these places</h1>
        <div className="cards__container">
          <div class="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
                text="Fruits are delicious"
                label="Fruits"
                path="/services"
              ></CardItem>
              <CardItem
                src="https://homepages.cae.wisc.edu/~ece533/images/peppers.png"
                text="Peppers are delicious"
                label="Peppers"
                path="/services"
              ></CardItem>
            </ul>

            <ul className="cards__items">
              <CardItem
                src="https://homepages.cae.wisc.edu/~ece533/images/fruits.png"
                text="Fruits are delicious"
                label="Fruits"
                path="/services"
              ></CardItem>
              <CardItem
                src="https://homepages.cae.wisc.edu/~ece533/images/peppers.png"
                text="Peppers are delicious"
                label="Peppers"
                path="/services"
              ></CardItem>
              <CardItem
                src="https://homepages.cae.wisc.edu/~ece533/images/peppers.png"
                text="Peppers are delicious"
                label="Peppers"
                path="/services"
              ></CardItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
