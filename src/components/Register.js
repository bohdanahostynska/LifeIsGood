import React from "react";
import { initializeApp } from "firebase/app";
import Drooling from "../assets/menu/drooling-face.svg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "./Input";
import { useInput } from "../hooks/useInput";
import { useNav } from "../context/useNav";
import "../styles/Register.scss";

const firebaseConfig = {
  apiKey: "AIzaSyBqYcSM4n10pbVGbLdVpv-7XnADXY38B9Y",
  authDomain: "diploma-project-62ade.firebaseapp.com",
  projectId: "diploma-project-62ade",
  storageBucket: "diploma-project-62ade.appspot.com",
  messagingSenderId: "801287747770",
  appId: "1:801287747770:web:2ea25ecce282ca89b82a83",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Register() {
  const email = useInput();
  const pass = useInput();
  const secondPass = useInput();

  const { goTo } = useNav();

  const handleRegister = async (event) => {
    event.preventDefault();

    if (pass.value.trim() !== secondPass.value.trim()) return;
    try {
      await createUserWithEmailAndPassword(auth, email.value, pass.value);

      goTo("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form_container">
      <div className="form_header">
        <h2 className="main_title">Welcome To Yelp App</h2>
        <img className="main-drooling-face" src={Drooling} alt="drooling" />
      </div>
      <div className="form_content">
        <form className="form_wrap" onSubmit={handleRegister}>
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
