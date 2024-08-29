import React, { useState } from "react";
import { useAuth } from "../../../Contex/AuthContex";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../../firebase/auth";
import { Button, TextField } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSignedIn(true);

    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMessage("Error logging in. Please try again.");
      setIsSignedIn(false);
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    setIsSignedIn(true);

    try {
      await doSignInWithGoogle();
    } catch (error) {
      setErrorMessage("Error signing in with Google. Please try again.");
      setIsSignedIn(false);
    }
  };


  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-10">
      {userLoggedIn && <Navigate to={'/display'} />}
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && <span>{errorMessage}</span>}

        <Button variant="contained" type="submit" disabled={isSignedIn}>
          {isSignedIn ? "Logging In..." : "Log In"}
        </Button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
      <Button
        variant="contained"
        onClick={onGoogleSignIn}
        disabled={isSignedIn}
      >
        {isSignedIn ? "Logging In..." : "Sign In with Google"}
      </Button>
    </div>
  );
};

export default Login;
