import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./landing/pages/Home";
import MainLayout from "./shared/layouts/MainLayout";
import CreateHabit from "./habits/components/HabitForm";
import HabitList from "./habits/components/HabitList";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/habits/create" element={<CreateHabit />} />
      <Route path="/habits/list" element={<HabitList />} />
    </Routes>
  );
}

export default App;
