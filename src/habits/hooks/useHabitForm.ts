//Hooks personalizados: Lógica de estado y ciclo de vida
import { useEffect, useState } from "react";
import { Habit } from "@/habits/types";
import { HabitService } from "@/habits/services/habitService";
import { z } from "zod";

export const useHabitForm = () => {
  // State
  const [habits, setHabits] = useState<Habit[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  // Functions
  useEffect(() => {
    const habits = HabitService.getAll();
    setHabits(habits);
  }, []);

  // Validations
  const habitSchema = z.object({
    name: z.string().min(3),
    frequency: z.enum(["daily", "weekly", "monthly"]),
  });

  const validateForm = (name: string, frequency: string) => {
    try {
      const validate = habitSchema.parse({ name, frequency });

      if (HabitService.exists(validate.name)) {
        setErrors({ name: ["Habit already exists"] });
        return false;
      }

      HabitService.save(validate);
      setErrors({});
      const formElement = document.getElementById(
        "habitForm"
      ) as HTMLFormElement;
      if (formElement) {
        formElement.reset();
      }
    } catch (error) {
      // Handle validation errors
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string[] } = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as string;
          if (!fieldErrors[field]) {
            fieldErrors[field] = [];
          }
          fieldErrors[field].push(err.message);
          console.log(fieldErrors);
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const deleteHabit = (name: string) => {
    HabitService.delete(name);
  };

  return { habits, errors, validateForm, deleteHabit };
};
