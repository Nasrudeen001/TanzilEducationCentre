import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1X0NoHGYtwYtFut2Emt7YEbHieHHFYs4",
  authDomain: "tanzileducationcentre-sms.firebaseapp.com",
  projectId: "tanzileducationcentre-sms",
  storageBucket: "tanzileducationcentre-sms.appspot.com",
  messagingSenderId: "148236496560",
  appId: "1:148236496560:web:cb84ed249696d7205ad575",
  measurementId: "G-0NHNQGQQEV"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app); 