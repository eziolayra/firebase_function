import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contex/AuthContex";
import { doCreateUserWithEmailAndPassword } from "../../../firebase/auth";
import { Button, TextField } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      await doCreateUserWithEmailAndPassword(email, password);
      setErrorMessage("");
      navigate("/display");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };


  const fields = [
    { label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value) },
    { label: "Password", type: "password", value: password, onChange: (e) => setPassword(e.target.value) },
    { label: "Confirm Password", type: "password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value) }
  ];

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-10">
      {userLoggedIn && <Navigate to={"/display"}  />}
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
       {fields.map((field, index) => (
          <TextField
            key={index}
            label={field.label}
            type={field.type}
            value={field.value}
            onChange={field.onChange}
          />
        ))}

        {errorMessage && <span>{errorMessage}</span>}

        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
