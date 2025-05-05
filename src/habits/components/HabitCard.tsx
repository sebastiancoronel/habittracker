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
import { useDispatch } from "react-redux";
import { markAsCompleted } from "@/state/markAsCompleted/markAsCompletedSlice";

export default function HabitCard({
  name,
  frequency,
}: {
  name: string;
  frequency: string;
}) {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(markAsCompleted({ name }));
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>{frequency}</CardContent>
        <CardFooter className="flex items-center gap-2">
          <Checkbox id="completed-today" onClick={handleComplete} />
          <Label htmlFor="completed-today">Done</Label>
        </CardFooter>
      </Card>
    </div>
  );
}
