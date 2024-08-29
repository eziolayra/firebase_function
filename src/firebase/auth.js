import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import { auth } from "./index";
import { GoogleAuthProvider } from "firebase/auth";

//for creating user with email and password
export const doCreateUserWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//for signing in with email and password
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//for signing in with google
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  //if you want to store user information in firestore then use
  //result.user
  return result;
};

//for signing out
export const doSignOut = () => {
  return auth.signOut();
};

// //for changing password
// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser,password);
// };

// //for resetting password
// export const doPasswordReset = (email) => {
//   return sendPasswordResetEmail(auth,email);
// }

// //for email verification
// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/`,
//     })
// }
