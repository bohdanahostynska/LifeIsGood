import React from "react";
import Burger from "../assets/menu/all_pic/burger (2).svg";
import Butter from "../assets/menu/all_pic//butterchicken.svg";
import Salmon from "../assets/menu/all_pic/salmon.svg";
import Pizza from "../assets/menu/all_pic/pizza2.jpg";
import Dessert from "../assets/menu/all_pic/icecream.jpg";
import Coffee from "../assets/menu/all_pic/coffee.jpg";
import Plus from "../assets/menu/all_pic/plus.svg";
import Tick from "../assets/menu/all_pic/tick.svg";
import Like from "../assets/menu/all_pic/like 1.svg";
import Fire from "../assets/menu/all_pic/fire.svg";

function AllItems() {
  return (
    <div className="all_items_content">
      <div className="all_items_move">
        <h2 className="all_items_title">All Items</h2>
      </div>
      <div className="all_items_offer">
        <div className="all_items_folder">
          <div className="all_items_top">
            <img className="all_items_img" src={Burger} alt="all_img" />
            <img className="all_items_image" src={Like} alt="all_imgage" />
          </div>
          <div className="all_items_bottom">
            <h3 className="all_items_title">Burger Wanted</h3>
            <p className="all_items_text">
              Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade
            </p>
            <div className="all_items_add">
              <p className="all_items_price">$29</p>
              <img className="all_items_icon" src={Plus} alt="plus" />
            </div>
          </div>
        </div>
        <div className="all_items_folder">
          <div className="all_items_top">
            <img className="all_items_img" src={Butter} alt="all_img" />
            <img className="all_items_image" src={Like} alt="all_imgage" />
          </div>
          <div className="all_items_bottom">
            <h3 className="all_items_title">Butter Chciken</h3>
            <p className="all_items_text">
              Reis, Sous-vide Chicken, Penaut Satay, Babyspian
            </p>
            <div className="all_items_add">
              <p className="all_items_price">$56</p>
              <img className="all_items_icon" src={Plus} alt="plus" />
            </div>
          </div>
        </div>
        <div className="all_items_folder">
          <div className="all_items_top">
            <img className="all_items_img" src={Salmon} alt="all_img" />
            <img className="all_items_image" src={Like} alt="all_imgage" />
          </div>
          <div className="all_items_bottom">
            <h3 className="all_items_title">Hi, Salmon</h3>
            <p className="all_items_text">
              Rels, Zoodies, Garnein Dressings, Avacode Edanmame, Maris.
            </p>
            <div className="all_items_add">
              <p className="all_items_price">$69</p>
              <img className="all_items_icon" src={Plus} alt="plus" />
            </div>
          </div>
        </div>
        {/* <div className="all_items_folder">
          <div className="all_items_top">
            <img className="all_items_img" src={Pizza} alt="all_img" />
            <img className="all_items_image" src={Like} alt="all_imgage" />
          </div>
          <div className="all_items_bottom">
            <h3 className="all_items_title">What's up,Pizza?</h3>
            <p className="all_items_text">Rels, Zoodies, Garnein
Sesasam Dessigns,
Redeshchein, Avocade</p>
            <div className="all_items_add">
              <p className="all_items_price">$42</p>
              <img className="all_items_icon" src={Plus} alt="plus" />
            </div>
          </div>
        </div>
        <div className="all_items_folder">
          <div className="all_items_top">
            <img className="all_items_img" src={Dessert} alt="all_img" />
            <img className="all_items_image" src={Like} alt="all_imgage" />
          </div>
          <div className="all_items_bottom">
            <h3 className="all_items_title">Do you wanna chill?</h3>
            <p className="all_items_text">Rels, Zoodies, Garnein
Sesasam Dessigns,
Redeshchein, Avocade</p>
            <div className="all_items_add">
              <p className="all_items_price">$60</p>
              <img className="all_items_icon" src={Plus} alt="plus" />
            </div>
          </div>
        </div>
        <div className="all_items_folder">
          <div className="all_items_top">
            <img className="all_items_img" src={Coffee} alt="all_img" />
            <img className="all_items_image" src={Like} alt="all_imgage" />
          </div>
          <div className="all_items_bottom">
            <h3 className="all_items_title">Grab some coffee!</h3>
            <p className="all_items_text">Rels, Zoodies, Garnein
Sesasam Dessigns,
Redeshchein, Avocade</p>
            <div className="all_items_add">
              <p className="all_items_price">$35</p>
              <img className="all_items_icon" src={Plus} alt="plus" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AllItems;
