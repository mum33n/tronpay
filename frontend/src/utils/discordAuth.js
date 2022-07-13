import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.measurementId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyASUStochAsUx5A0Q9AjgfDIxcxUkgLiRU",
  authDomain: "tron-43981.firebaseapp.com",
  projectId: "tron-43981",
  storageBucket: "tron-43981.appspot.com",
  messagingSenderId: "804408000296",
  appId: "1:804408000296:web:f8310d28729cfd43b25a1d",
  measurementId: "G-E8GP56PX3Y",
};

const firebase = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
const auth = getAuth(firebase);
// firebase.auth().useDeviceLanguage();
export const signInwithGoogle = () => {
  let result = signInWithPopup(auth, provider).then((result) => result);
  return result;
};
