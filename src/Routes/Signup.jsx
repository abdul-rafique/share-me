import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormField from "../Components/Form/FormField";
import FormPasswordField from "../Components/Form/FormPasswordField";
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
    <div className="min-h-screen flex justify-center items-center">
      <div className="min-w-fit max-w-sm p-8 rounded shadow shadow-gray bg-white">
        <h2 className="text-3xl font-semibold text-center mb-5 text-accent">
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
              className="mt-1 rounded text-accent border-gray focus:outline-accent"
            />
            <label htmlFor="#accept_terms" className="text-sm text-gray-dark">
              I agree to all{" "}
              <Link to="/signup" className="hover:text-accent underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/signup" className="underline hover:text-accent">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <PrimaryButton extraClasses="w-full">Sign Up</PrimaryButton>
        </form>

        <hr className="my-3 border-t-gray-light" />

        <p className="text-gray-dark text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-accent-light hover:text-accent-dark transition-colors"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
