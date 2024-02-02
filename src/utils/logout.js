import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { errorToast, successToast } from "./toastMessage";

const logout = () => {
  signOut(auth)
    .then(() => {
      successToast(`Successfully Signed out`);
    })
    .catch((error) => {
      errorToast(error);
    });
};

export default logout;
