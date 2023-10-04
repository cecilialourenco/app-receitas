import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

const googleHandler = async () => {
  if (auth.currentUser != null) {
    console.log(auth.currentUser);
    window.location.href = "/recipe.list";
    return true;
  }

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log(result.user);
      localStorage.setItem("userId", result.user.uid);
      window.location.href = "/recipe.list";
    })
    .catch((error) => {});
};

export default googleHandler;
