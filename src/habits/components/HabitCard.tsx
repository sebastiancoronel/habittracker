import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useHabitForm } from "@/habits/hooks/useHabitForm";
export default function HabitCard({
  name,
  frequency,
}: {
  name: string;
  frequency: string;
}) {
  const { deleteHabit } = useHabitForm();

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>{frequency}</CardContent>
        <CardFooter className="flex items-center gap-2">
          <Checkbox id="completed-today" onClick={() => deleteHabit(name)} />
          <Label htmlFor="completed-today">Completed today</Label>
        </CardFooter>
      </Card>
    </div>
  );
}
