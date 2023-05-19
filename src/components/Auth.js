import React from "react";
import Input from "./Input";
import "../styles/Register.scss";
import { useInput } from "../hooks/useInput";
import Drooling from "../assets/menu/drooling-face.svg";
import apple from "../assets/login/bitten-apple.svg";
import grapes from "../assets/login/grapes.svg";
import leaf from "../assets/login/leaf 2.svg";
import orange from "../assets/login/orange.svg";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNav } from "../context/useNav";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";
import { setLoading } from "../redux/reducers/authSlice";
import { Link } from "react-router-dom";

function Auth() {
  const email = useInput();
  const pass = useInput();
  const auth = getAuth();
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
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="form_container">
        {/* {loading && <Loader />} */}
        <div className="form_header">
          <h2 className="main_title">Welcome To Yelp App</h2>
          <img className="drooling-face" src={Drooling} alt="drooling" />
        </div>
        <div className="form_content">
          <form className="form_wrap" onSubmit={handleSignIn}>
            <img className="form_img_1" src={grapes} alt="form" />
            <img className="form_img_2" src={leaf} alt="form" />
            <img className="form_img_3" src={apple} alt="form" />
            <img className="form_img_4" src={orange} alt="form" />
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
            <li className="form_text" style={{ listStyle: "none" }}>
              don't have an account
            </li>
          </form>
        </div>
      </div>
    </>
  );
}

export default Auth;
