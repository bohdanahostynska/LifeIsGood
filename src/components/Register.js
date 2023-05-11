import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "./Input";
import { useInput } from "../hooks/useInput";
import { useNav } from "../context/useNav";

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
    //event.prevent.Default();
    ///відключила, бо вибивало помилку і не перекидало на сторінку /login
    if (pass.value.trip() !== secondPass.value.trim()) return;
    try {
      await createUserWithEmailAndPassword(auth, email.value, pass.value);

      goTo("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleRegister}>
      <Input
        label="email"
        placeholder="email"
        name="email"
        value={email.value}
        onChange={email.onChange}
      />
      <Input
        label="password"
        placeholder="password"
        name="password"
        type="password"
        value={pass.value}
        onChange={pass.onChange}
      />
      <Input
        label="password second "
        placeholder="password second"
        name="secondPass"
        type="password"
        value={secondPass.value}
        onChange={secondPass.onChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
