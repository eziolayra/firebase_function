import React from 'react';
import { useAuth } from "../../Contex/AuthContex";
import Header from '../header/Header';

const Display = () => {
  const { currentUser } = useAuth();

  return (
    <div>
    <Header/>
      Hello {currentUser?.displayName ? currentUser.displayName : currentUser?.email} you are now logged in
    </div>
  );
}

export default Display;
