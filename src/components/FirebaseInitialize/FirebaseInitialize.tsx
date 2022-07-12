import { initializeApp } from "firebase/app";
//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL2SYLVCBYMHHHIGrl8raZZ4iNmYkGsh4",
  authDomain: "reacttsweatherapp.firebaseapp.com",
  projectId: "reacttsweatherapp",
  storageBucket: "reacttsweatherapp.appspot.com",
  messagingSenderId: "151013366735",
  appId: "1:151013366735:web:b64394386026a493d150ba",
  measurementId: "G-C81P4NHF1M",
};
const App = initializeApp(firebaseConfig);
export default App;
