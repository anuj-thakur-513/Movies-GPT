import { auth } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from "../store/user/userSlice";
import { successToast } from "./toastMessage";

const signup = (
  name,
  email,
  password,
  setErrorMessage,
  setAuthenticating,
  dispatch
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return updateProfile(user, {
        displayName: name,
        photoURL: "/assets/profileImage.jpg",
      });
    })
    .then(() => {
      const updatedUser = auth.currentUser;
      dispatch(
        addUser({
          uid: updatedUser.uid,
          email: updatedUser.email,
          displayName: updatedUser.displayName,
        })
      );

      successToast(`Welcome ${updatedUser.displayName}`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + " - " + errorMessage);
    })
    .finally(() => {
      setAuthenticating(false);
    });
};

export default signup;
