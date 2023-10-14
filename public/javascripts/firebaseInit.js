
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD5xjzcSbLqJJVrgbMYQp38JH4x02SYJNo",
    authDomain: "fir-2-2a30e.firebaseapp.com",
    databaseURL: "https://fir-2-2a30e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-2-2a30e",
    storageBucket: "fir-2-2a30e.appspot.com",
    messagingSenderId: "476705766388",
    appId: "1:476705766388:web:2b5adf33436ea6872357a1",
    measurementId: "G-V1XD6WRNXV"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
