import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import App from "./App"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}> 
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes> 
    </BrowserRouter>
  // </React.StrictMode>
);
