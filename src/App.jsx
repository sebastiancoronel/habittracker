import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./landing/pages/Home";
import MainLayout from "./shared/layouts/MainLayout";
import CreateHabit from "./habits/components/HabitForm";
import HabitList from "./habits/components/HabitList";
import Layout from "./dashboard/layout";
import Metrics from "./dashboard/pages/metrics";
import Habits from "./dashboard/pages/habits";
function App() {
  return (
    <Routes element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/habits/create" element={<CreateHabit />} />
      <Route path="/habits/list" element={<HabitList />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Metrics />} />
        <Route path="pages/metrics" element={<Metrics />} />
        <Route path="pages/habits" element={<Habits />} />
      </Route>
    </Routes>
  );
}

export default App;
