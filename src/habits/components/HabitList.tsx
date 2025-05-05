import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HabitCard from "./HabitCard";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { Habit } from "@/habits/types";

export default function HabitList() {
  const { habits } = useSelector((state: RootState) => state.markAsCompleted);
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Habit list</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-10">
          {habits &&
            habits.map((habit: Habit) => {
              return (
                <>
                  {!habit.completionDate && (
                    <HabitCard
                      key={habit.name}
                      name={habit.name}
                      frequency={habit.frequency}
                    />
                  )}
                </>
              );
            })}
        </CardContent>
      </Card>
    </div>
  );
}
