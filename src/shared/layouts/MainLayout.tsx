import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <h1>Main Layout</h1>
      <Outlet />
    </div>
  );
}
