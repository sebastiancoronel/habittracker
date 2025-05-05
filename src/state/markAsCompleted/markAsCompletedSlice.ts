import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HabitService } from "@/habits/services/habitService";
import { Habit } from "@/habits/types";

const initialState: { habits: Habit[] } = {
  habits: HabitService.getAll(),
};

const markAsCompletedSlice = createSlice({
  name: "markAsCompleted",
  initialState,
  reducers: {
    markAsCompleted: (state, action: PayloadAction<{ name: string }>) => {
      HabitService.delete(action.payload.name);
      const updatedHabits = HabitService.getAll();
      state.habits = updatedHabits;
    },
  },
});

export const { markAsCompleted } = markAsCompletedSlice.actions;
export default markAsCompletedSlice.reducer;
