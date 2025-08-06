import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB1X0NoHGYtwYtFut2Emt7YEbHieHHFYs4",
  authDomain: "tanzileducationcentre-sms.firebaseapp.com",
  projectId: "tanzileducationcentre-sms",
  storageBucket: "tanzileducationcentre-sms.appspot.com", // fixed here
  messagingSenderId: "148236496560",
  appId: "1:148236496560:web:cb84ed249696d7205ad575",
  measurementId: "G-0NHNQGQQEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only initialize analytics in production
let analytics;
if (window.location.hostname !== "localhost") {
  analytics = getAnalytics(app);
} 