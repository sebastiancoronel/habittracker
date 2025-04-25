//Servicios: Lógica de acceso a datos
import { Habit } from "@/habits/types";

export const HabitService = {
  getAll: (): Habit[] => {
    const localStorageData = JSON.parse(localStorage.getItem("habits") || "[]");
    return localStorageData;
  },

  save: (habit: Habit): void => {
    const currentHabits = HabitService.getAll();
    const updatedHabits = [...currentHabits, habit];
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
  },

  delete: (name: string) => {
    let currentHabits = localStorage.getItem("habits");
    if (!currentHabits) {
      return false;
    }
    const currentHabitsParsed = JSON.parse(currentHabits);
    const currentHabitsFiltered = currentHabitsParsed.filter(
      (habit: Habit) => habit.name !== name
    );
    localStorage.setItem("habits", JSON.stringify(currentHabitsFiltered));
  },

  exists: (name: string) => {
    const currentHabits = HabitService.getAll();
    const exists: boolean = currentHabits.some((habit) => habit.name === name);
    return exists;
  },
};
