import React, { useRef, useState } from "react";
import burger from "../assets/menu/all_pic/burger (2).svg";
import butter from "../assets/menu/all_pic//butterchicken.svg";
import salmon from "../assets/menu/all_pic/salmon.svg";
import "../styles/AllItems.scss";
import soup from "../assets/menu/all_pic/articles/soup.svg";
import dessert from "../assets/menu/all_pic/articles/donut-3d-.svg";
import cocktail from "../assets/menu/all_pic/Cocktail.png";
import Plus from "../assets/menu/all_pic/plus.svg";

const list = [
  {
    id: 1,
    title: "Burger Wanted",
    name: "burger",
    image: burger,
    text: "Take a bite and prepare for your mind to be blown away instantly!",
    price: "$29",
    icon: Plus,
  },
  {
    id: 2,
    title: "Butter Chciken",
    name: "butter",
    image: butter,
    text: " Have you ever tried chicken melting in butter?",
    price: "$56",
    icon: Plus,
  },
  {
    id: 3,
    title: "Hi, Salmon",
    name: "salmon",
    image: salmon,
    text: "Royal food at your service!Order our amazing salmon and feel like a king.",
    price: "$60",
    icon: Plus,
  },
  {
    id: 4,
    title: "What's up,soup?",
    name: "soup",
    image: soup,
    text: "What a day without some soup? Come to us and you won't regret!",
    price: "$30",
    icon: Plus,
  },

  {
    id: 5,
    title: "How about a donut?",
    name: "dessert",
    image: dessert,
    text: "You don't have to be a cop to try a donut:)  Hurry up! They won't be waiting all day!",
    price: "$25",
    icon: Plus,
  },
  {
    id: 6,
    title: "Do you wanna chill?",
    name: "cocktail",
    image: cocktail,
    text: "Are you hot and exhausted? Then you are in the right place! Best cocktail ever here!",
    price: "$35",
    icon: Plus,
  },
];

function AllItemsClone() {
  return (
    <>
      <div className="all_items_content">
        <div className="all_items_offer">
          <div className="all_items_folder">
            {list.map(({ title, name, image, text, price, icon }) => (
              <li key={name} style={{ listStyle: "none" }}>
                <div className="all_items_all">
                  <img className="all_items_img" src={image} alt="all_images" />
                  <div className="all_items_bottom">
                    <h3 className="all_items_title">{title}</h3>
                    <p className="all_items_text">{text}</p>
                    <div className="all_items_add">
                      <p className="all_items_price">{price}</p>
                      <img className="all_items_icon" src={icon} alt="plus" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllItemsClone;
