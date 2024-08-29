import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../../firebase/auth";
import { useAuth } from "../../Contex/AuthContex";

const Header = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <nav className="flex justify-evenly bg-gray-300 p-2 text-blue-500">
      {userLoggedIn ? (
        <>
          <button
            onClick={doSignOut().then(() => {
              navigate("/login");
            })}
          >
            LogOut
          </button>
        </>
      ) : (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register New Account</Link>
        </>
      )}
    </nav>
  );
};

export default Header;
