import React from "react";
import Input from "./Input";
import { useInput } from "../hooks/useInput";
import Drooling from "../assets/menu/drooling-face.svg";
import apple from "../assets/login/bitten-apple.svg";
import grapes from "../assets/login/grapes.svg";
import leaf from "../assets/login/leaf 2.svg";
import orange from "../assets/login/orange.svg";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNav } from "../hooks/useNav";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../redux/reducers/authSlice";

function Auth() {
  const email = useInput();
  const pass = useInput();
  const auth = getAuth();
  const navigate = useNavigate();
  const { goTo } = useNav();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      dispatch(setLoading(true));
      await signInWithEmailAndPassword(auth, email.value, pass.value);
      setTimeout(() => {
        dispatch(setLoading(false));
        goTo("/menu");
      }, 4000);
    } catch (error) {}
  };
  const onClick = () => {
    navigate("/");
  };

  return (
    <>
      {loading && <Loader />}
      <div className="form_container">
        <div className="form_images_top">
          <img className="form_img_1" src={grapes} alt="form" />
          <img className="form_img_2" src={leaf} alt="form" />
        </div>
        <div className="form_header">
          <h2 className="main_title">Welcome To Yelp App</h2>
          <img className="drooling-face" src={Drooling} alt="drooling" />
        </div>
        <div className="form_content">
          <form className="form_wrap" onSubmit={handleSignIn}>
            <span className="form_name">Login</span>
            <Input
              label="email"
              placeholder="Email"
              name="email"
              value={email.value}
              onChange={email.onChange}
            />
            <span className="form_name">Password</span>
            <Input
              label="password"
              placeholder="************"
              name="password"
              type="password"
              value={pass.value}
              onChange={pass.onChange}
            />
            <button className="button" type="submit">
              Login
            </button>
            <li
              className="form_text"
              onClick={onClick}
              style={{ listStyle: "none" }}
            >
              don't have an account
            </li>
          </form>
        </div>
        <div className="form_images">
          <img className="form_img_3" src={apple} alt="form" />
          <img className="form_img_4" src={orange} alt="form" />
        </div>
      </div>
    </>
  );
}

export default Auth;
