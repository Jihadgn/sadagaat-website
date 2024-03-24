import "flowbite";
import "./assets/index.css";
import router from "./router.jsx";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
