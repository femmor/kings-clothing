import React from "react";

// Components
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/sign-up.component";

// Styles
import "./sign-in-sign-up.component.scss";

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
