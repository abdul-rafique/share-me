import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import FormField from "../Components/Form/FormField";
import FormPasswordField from "../Components/Form/FormPasswordField";
import PrimaryButton from "../Components/PrimaryButton";

export default function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [btnDisaled, setBtnDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "identifier":
        setIdentifier(value);
        break;

      case "password":
        setPassword(value);
        break;
    }

    if (identifier !== "" && password !== "") {
      setBtnDisabled(!btnDisaled);
    }
  };

  const handleRememberMe = () => {
    console.log(!rememberMe);
    setRememberMe(!rememberMe);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="min-w-fit max-w-sm p-8 rounded shadow shadow-gray bg-white">
        <h2 className="text-3xl font-semibold text-center mb-5 text-accent">
          Login
        </h2>
        <form method="post" className="w-80">
          <div className="mb-3">
            <FormField
              type="email"
              label="Email"
              autoComplete="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <FormPasswordField
              autoComplete="password"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3 flex justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                onChange={handleRememberMe}
                className="rounded text-accent border-gray focus:outline-accent"
              />
              <label htmlFor="#remember" className="text-sm text-gray-dark">
                Remember me
              </label>
            </div>

            <Link
              to="/forgot-password"
              className="font-semibold text-accent-light hover:text-accent-dark"
            >
              Forgot password?
            </Link>
          </div>

          <PrimaryButton as="submit" block disabled={!btnDisaled}>
            Login
          </PrimaryButton>
        </form>
        <hr className="my-3 border-t-dark/20" />

        <p className="text-gray-dark text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-accent-light hover:text-accent-dark transition-colors"
          >
            Signup Now
          </Link>
        </p>
      </div>
    </div>
  );
}
