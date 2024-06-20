import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Home from "./components/Home";
// import MovieDetail from "./components/MovieDetail.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetail from "./components/MovieDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/movie/:imdbID",
    element: <MovieDetail />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
