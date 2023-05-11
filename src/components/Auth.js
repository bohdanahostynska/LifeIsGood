import React from "react";
import Input from "./Input";
import { useInput } from "../hooks/useInput";

function Auth() {
  const email = useInput();
  const pass = useInput();
  const handleSignIn = (event) => {
    event.prevent.Default();
  };
  return (
    <form onSubmit={handleSignIn}>
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
      <button type="submit">Login</button>
    </form>
  );
}

export default Auth;
