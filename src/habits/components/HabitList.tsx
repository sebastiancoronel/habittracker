import React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HabitCard from "./HabitCard";
import { useHabitForm } from "@/habits/hooks/useHabitForm";

export default function HabitList() {
  const { habits} = useHabitForm();

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Habit list</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-10">
          {habits &&
            habits.map((habit: any) => {
              return (
                <>
                  <HabitCard name={habit.name} frequency={habit.frequency} />
                </>
              );
            })}
        </CardContent>
      </Card>
    </div>
  );
}
