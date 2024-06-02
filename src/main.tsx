import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import { Header } from "./ui/header.tsx";
import "./index.css";
// import "flowbite";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
