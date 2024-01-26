import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const logout = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export default logout;
