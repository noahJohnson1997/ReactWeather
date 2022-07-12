import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Header and footer
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const foot = ReactDOM.createRoot(
  document.getElementById("foot") as HTMLElement
);
foot.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
