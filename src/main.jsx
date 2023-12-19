import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About";
// import { action as AboutAction } from "./routes/About";
import App from "./routes/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Oops! There was an error.</div>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <div>Oops! There was an error.</div>,
    // action: AboutAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
