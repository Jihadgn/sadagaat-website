import "flowbite";
import "./assets/index.css";
import router from "./router.jsx";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import React from "react";
import "react-modal-video/css/modal-video.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
