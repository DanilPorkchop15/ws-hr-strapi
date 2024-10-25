import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

import "./ui/index.css";

import { browserRouter } from "./config";

export function mountApp() {
  const root = document.getElementById("root");
  if (!root) throw new Error("root not found");

  ReactDOM.createRoot(root).render(<RouterProvider fallbackElement="loading.." router={browserRouter} />);
}
