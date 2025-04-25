//Servicios: Lógica de acceso a datos
import { Habit } from "@/habits/types";

export const HabitService = {

    getAll: (): Habit[] =>{
        const localStorageData = JSON.parse(localStorage.getItem("habits") || "[]");
        return localStorageData;
    },

  save: (habit: Habit): void => {
    const currentHabits = HabitService.getAll();
    const updatedHabits = [...currentHabits, habit];
    localStorage.setItem("habits", JSON.stringify(updatedHabits));
  },

  exists: (name:string)=>{
    const currentHabits = HabitService.getAll();
    const exists = currentHabits.some((habit)=>habit.name === name)
    return exists;
  }
};
