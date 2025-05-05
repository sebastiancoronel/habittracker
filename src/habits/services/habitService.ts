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

  delete: (name: string): boolean => {
    let currentHabits = localStorage.getItem("habits");
    if (!currentHabits) {
      return false;
    }
    const date = new Date();
    const formatedDate = date.toISOString().split("T")[0];

    const currentHabitsParsed = JSON.parse(currentHabits);
    const currentHabit = currentHabitsParsed.find(
      (habit: Habit) => habit.name === name
    );

    if (currentHabit) {
      currentHabit.completionDate = formatedDate;
    }

    const habitsWithoutCurrent = currentHabitsParsed.filter(
      (habit: Habit) => habit.name !== name
    );

    habitsWithoutCurrent.push(currentHabit);

    localStorage.setItem("habits", JSON.stringify(currentHabitsParsed));
    console.log(currentHabitsParsed);
    return currentHabitsParsed.length !== habitsWithoutCurrent.length;
  },

  exists: (name: string) => {
    const currentHabits = HabitService.getAll();
    const exists: boolean = currentHabits.some((habit) => habit.name === name);
    return exists;
  },
};
