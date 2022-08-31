import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

import FormField from "../Components/FormField";
import FormPasswordField from "../Components/FormPasswordField";
import PrimaryButton from "../Components/PrimaryButton";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleFieldChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "pass":
        setPass(e.target.value);
        break;
      case "confirmPass":
        setConfirmPass(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userAuth) => {
        console.log("User Created Successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="min-w-fit max-w-sm mx-auto my-10 p-8 border border-primary rounded shadow-md shadow-accent/50">
      <h2 className="text-3xl font-semibold text-center mb-5 text-primary">
        Sign Up
      </h2>

      <form className="w-80">
        <div className="mb-3">
          <FormField
            label="Username"
            name="username"
            type="text"
            onChange={handleFieldChange}
          />
        </div>

        <div className="mb-3">
          <FormField
            label="Email"
            name="email"
            type="email"
            onChange={handleFieldChange}
          />
        </div>

        <div className="mb-3">
          <FormPasswordField
            label="Password"
            name="pass"
            onChange={handleFieldChange}
          />
        </div>

        <div className="mb-3">
          <FormPasswordField
            label="Confirm Password"
            name="confirmPass"
            onChange={handleFieldChange}
          />
        </div>

        <div className="mb-3 flex items-start gap-2">
          <input
            type="checkbox"
            name="accept_terms"
            id="accept_terms"
            className="mt-1 rounded text-primary border-gray focus:outline-primary"
          />
          <label htmlFor="#accept_terms" className="text-sm">
            I agree to all <Link to="/signup">Terms & Conditions</Link> and{" "}
            <Link to="/signup">Privacy Policy</Link>.
          </label>
        </div>

        <PrimaryButton extraClasses="w-full">Sign Up</PrimaryButton>
      </form>

      <hr className="my-3 border-t-dark/20" />

      <p className="text-gray text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-accent hover:text-primary transition-colors"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
