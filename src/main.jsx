import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import { ThemeProvider } from "./components/Theme/ThemeContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
