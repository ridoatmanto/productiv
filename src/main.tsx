import React from "react";
import ReactDOM from "react-dom/client";
import { Pricing } from "./pricing.tsx";
import { Services } from "./services.tsx";
import App from "./app.tsx";
import { Header } from "./ui/header.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <App />
      </div>
    ),
  },
  {
    path: "/services",
    element: (
      <div>
        <Header />
        <Services />
      </div>
    ),
  },
  {
    path: "/pricing",
    element: (
      <div>
        <Header />
        <Pricing />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
