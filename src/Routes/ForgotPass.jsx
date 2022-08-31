import React from "react";
import { Link } from "react-router-dom";
import FormField from "../Components/FormField";

function ForgotPass() {
  return (
    <div className="min-w-fit max-w-sm mx-auto my-10 p-8 border border-primary rounded shadow-md shadow-accent/50">
      <h2 className="text-3xl font-semibold text-center mb-5 text-primary">
        Login
      </h2>
      <form action="" className="w-80">
        <div className="mb-3">
          <FormField label="Username or Email" type="text" />
        </div>

        <button
          type="submit"
          className="w-full p-2.5 my-3 bg-primary text-white font-semibold rounded"
        >
          Send me link
        </button>
      </form>
      <hr className="my-3 border-t-dark/20" />

      <p className="text-dark/40 text-center">
        Know your password?{" "}
        <Link
          to="/login"
          className="text-accent hover:text-primary transition-colors"
        >
          Login Now
        </Link>
      </p>
    </div>
  );
}

export default ForgotPass;
