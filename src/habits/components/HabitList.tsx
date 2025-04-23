import React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HabitList() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("habits") || "[]");
    setHabits(localStorageData);
    
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Habit list</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc">
            {habits &&
              habits.map((habit: any) => {
                return (
                  <>
                    <li>{ habit.name }</li>
                    <li>{ `Category:${habit.category}` }</li>
                    <li>{ `Frequency: ${habit.frequency}` }</li>
                  </>
                );
              })}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
