import React from "react";
import { Link } from "react-router-dom";
import FormField from "../Components/Form/FormField";
import PrimaryButton from "../Components/PrimaryButton";

function ForgotPass() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="min-w-fit max-w-sm p-8 rounded shadow shadow-gray bg-white">
        <h2 className="text-3xl font-semibold text-center mb-5 text-accent">
          Login
        </h2>
        <form className="w-80">
          <div className="mb-3">
            <FormField label="Username or Email" type="text" />
          </div>

          <PrimaryButton as="submit" extraClasses="w-full my-3">
            Send me link
          </PrimaryButton>
        </form>
        <hr className="my-3 border-t-gray-light" />

        <p className="text-gray text-center">
          Know your password?{" "}
          <Link
            to="/login"
            className="font-semibold text-accent-light hover:text-accent-dark transition-colors"
          >
            Login Now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPass;
