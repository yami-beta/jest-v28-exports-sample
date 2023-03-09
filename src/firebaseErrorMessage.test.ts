import { FirebaseError } from "firebase/app";
import { AuthErrorCodes } from "firebase/auth";
import { firebaseErrorMessage } from "./firebaseErrorMessage";

describe(firebaseErrorMessage.name, () => {
  test("invalid email", () => {
    const error = new FirebaseError(AuthErrorCodes.INVALID_EMAIL, "");
    expect(firebaseErrorMessage(error)).toBe("invalid email");
  });
});
