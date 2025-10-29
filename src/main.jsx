import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Bootstrap core styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Bootstrap icons (installed separately)
import "bootstrap-icons/font/bootstrap-icons.css";

// Your custom CSS
import "./assets/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
