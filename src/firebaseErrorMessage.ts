import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";

export const firebaseErrorMessage = (error: FirebaseError) => {
  switch (error.code) {
    case AuthErrorCodes.INVALID_EMAIL:
      return "invalid email";
    default:
      return error.message;
  }
};
