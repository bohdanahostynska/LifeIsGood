import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "./Input";
import { auth } from "../firebaseConfig";
import { useInput } from "../hooks/useInput";
import { useNav } from "../context/useNav";

// const auth = getAuth();

function Register() {
  const email = useInput();
  const pass = useInput();
  const secondPass = useInput();

  const { goTo } = useNav();

  const handleRegister = async (event) => {
    event.prevent.Default();
    ///відключила, бо вибивало помилку і не перекидало на сторінку /login
    if (pass.value.trip() !== secondPass.value.trim()) return;
    try {
      await createUserWithEmailAndPassword(auth, email.value, pass.value);
    } catch (error) {
      console.log(error);
    }

    goTo("/login");
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
