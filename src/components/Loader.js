import React, { useEffect } from "react";
import apple from "../assets/login/bitten-apple.svg";
import grapes from "../assets/login/grapes.svg";
import cheese from "../assets/menu/all_pic/articles/cheese 1.svg";
import flame from "../assets/menu/all_pic/articles/flame 2.svg";
import burger from "../assets/menu/all_pic/burger (2).svg";
import orange from "../assets/login/orange.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/authSlice";
function Loader() {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 5000);
    }
  }, [dispatch, loading]);

  return (
    <div className={`loader_wrapper ${loading ? "active" : ""}`}>
      <div className="loader_content">
        <div className="loader_images">
          <img className="loader_image1" src={apple} alt="apple" />
          <img className="loader_image3" src={cheese} alt="cheese" />
          <img className="loader_image4" src={flame} alt="flame" />
          <img className="loader_image5" src={burger} alt="burger" />
        </div>
        <h2 className="loader_title">Yelp App</h2>
        <p className="loader_text">developed by Bohdana Hostynska</p>
        <img className="loader_image2" src={grapes} alt="grapes" />
        <img className="loader_image6" src={orange} alt="orange" />
      </div>
    </div>
  );
}

export default Loader;
