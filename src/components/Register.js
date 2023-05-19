import React from "react";
import Drooling from "../assets/menu/drooling-face.svg";
import apple from "../assets/login/bitten-apple.svg";
import grapes from "../assets/login/grapes.svg";
import leaf from "../assets/login/leaf 2.svg";
import orange from "../assets/login/orange.svg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "./Input";
import { useInput } from "../hooks/useInput";
import { useNav } from "../hooks/useNav";
import "../styles/Register.scss";

function Register() {
  const email = useInput();
  const pass = useInput();
  const secondPass = useInput();
  const auth = getAuth();

  const { goTo } = useNav();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (pass.value.trim() !== secondPass.value.trim()) return;

    try {
      await createUserWithEmailAndPassword(auth, email.value, pass.value);

      goTo("/login");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="form_container">
      <div className="form_header">
        <h2 className="main_title">Welcome To Yelp App</h2>
        <img className="drooling-face" src={Drooling} alt="drooling" />
      </div>
      <div className="form_content">
        <form className="form_wrap" onSubmit={handleRegister}>
          <img className="form_img_1" src={grapes} alt="form" />
          <img className="form_img_2" src={leaf} alt="form" />
          <img className="form_img_3" src={apple} alt="form" />
          <img className="form_img_4" src={orange} alt="form" />
          <span className="form_name">Email</span>
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
            placeholder="*************"
            name="password"
            type="password"
            value={pass.value}
            onChange={pass.onChange}
          />
          <span className="form_name">Confirm password</span>
          <Input
            label="password second "
            placeholder="**************"
            name="secondPass"
            type="password"
            value={secondPass.value}
            onChange={secondPass.onChange}
          />
          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
