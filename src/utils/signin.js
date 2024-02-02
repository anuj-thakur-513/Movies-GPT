import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { successToast } from "./toastMessage";

const signin = (email, password, setErrorMessage, setAuthenticating) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      successToast(`Welcome ${user.displayName}`);
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

export default signin;
