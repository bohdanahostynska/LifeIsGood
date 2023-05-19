import React from "react";
import Discount from "./Discount";
import Arrow from "../assets/menu/all_pic/articles/arr.svg";

import Girl from "../assets/menu/all_pic/articles/girl.svg";
import Girl2 from "../assets/menu/all_pic/articles/girl2.svg";
import Guy from "../assets/menu/all_pic/articles/guy (2).svg";
import Like from "../assets/menu/all_pic/articles/like.svg";
import Chicken from "../assets/menu/all_pic/articles/grilled-chicken.svg";
import Face from "../assets/menu/all_pic/articles/face.svg";
import Cookies from "../assets/menu/all_pic/articles/cookies.svg";
import Pizza from "../assets/menu/all_pic/articles/favorite-pizza.svg";
import TopSearch from "./TopSearch";

function Arlicles() {
  return (
    <div className="articles_content">
      <TopSearch />
      <Discount />
      <div className="articles_main">
        <div className="articles_top">
          <h4 className="articles_title">Articles</h4>
          <div className="img_cont">
            <img className="articles_arr" src={Arrow} alt="arr" />
          </div>
        </div>
        <div className="articles_bottom">
          <div className="articles_wrap">
            <div className="articles_left">
              <div className="articles_image">
                <img
                  className="articles_icon_chicken"
                  src={Chicken}
                  alt="icon"
                />
              </div>
            </div>
            <div className="articles_right">
              <p className="articles_text-p">
                How to cook turkey on Natural Gas{" "}
              </p>
              <div className="articles_feedback">
                <img className="article_pic" src={Girl} alt="pic" />
                <img className="articles_pic" src={Guy} alt="secpic" />
                <div className="articles_like_wrap">
                  <img className="article_like" src={Like} alt="like" />
                  <p className="articles_numb">28+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="articles_wrap">
            <div className="articles_left">
              <div className="articles_image">
                <img className="articles_icon_face" src={Face} alt="icon" />
              </div>
            </div>
            <div className="articles_right">
              <p className="articles_text-p">
                Corona virus update: 3,43,287+ cases
              </p>
              <div className="articles_feedback">
                <img className="artticle_pic" src={Girl2} alt="pic" />
                <img className="articles__pic" src={Guy} alt="secpic" />
                <div className="articles_like_wrap">
                  <img className="article_like" src={Like} alt="like" />
                  <p className="articles_numb">20+</p>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="articles_wrap">
            <div className="articles_left">
              <div className="articles_image">
                <img
                  className="articles_icon_cookies"
                  src={Cookies}
                  alt="icon"
                />
              </div>
            </div>
            <div className="articles_right">
              <p className="articles_text-p">
                Tasty chunk donutes with chocolate
              </p>
              <div className="articles_feedback">
                <img className="article_pic" src={Girl2} alt="pic" />
                <img className="articles_pic" src={Guy} alt="secpic" />
                <div className="articles_like_wrap">
                  <img className="article_like" src={Like} alt="like" />
                  <p className="articles_numb">18+</p>
                </div>
              </div>
            </div>
          </div>
          <div className="articles_wrap">
            <div className="articles_left">
              <div className="articles_image">
                <img className="articles_icon_pizza" src={Pizza} alt="icon" />
              </div>
            </div>
            <div className="articles_right">
              <p className="articles_text-p">
                Home made double cheez with popcorn respies
              </p>
              <div className="articles_feedback">
                <img className="article_pic" src={Girl2} alt="pic" />
                <img className="articles_pic" src={Guy} alt="secpic" />
                <div className="articles_like_wrap">
                  <img className="article_like" src={Like} alt="like" />
                  <p className="articles_numb">30+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arlicles;
