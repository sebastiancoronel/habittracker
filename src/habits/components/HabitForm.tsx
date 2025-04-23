import * as React from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useEffect } from "react";

// Types
interface Habit {
  name: string;
  frequency: string;
}

export default function HabitForm() {
  // State
  const [habits, setHabits] = useState<Habit[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  // Functions
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("habits") || "[]");
    setHabits(localStorageData);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    
    const frequency = formData.get("frequency") as string;
    validateForm(name, frequency);
  };

  // Validations
  const habitSchema = z.object({
    name: z.string().min(3),
    frequency: z.enum(["daily", "weekly", "monthly"]),
  });

  const validateForm = (name: string, frequency: string) => {
    try {
      // Validate the form data
      const validate = habitSchema.parse({ name, frequency });
      //Check duplicates
      for (const habit of habits) {
        if (habit.name === validate.name) {
          setErrors({ name: ["Habit already exists"] });
          return;
        }
      }
      // Update the habit state
      const updatedHabits = [...habits, validate];
      setHabits(updatedHabits);
      // Update the local storage
      localStorage.setItem("habits", JSON.stringify(updatedHabits));
      // Reset the form

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
        console.error("Validation error:", error.errors);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create habit</CardTitle>
          <CardDescription>
            Start your journey to a healthier life.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="habitForm" onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Habit Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your habit name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="frequency">Frequency</Label>
                <Select name="frequency">
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
                { errors.frequency && (
                  <p className="text-red-500 text-sm">{errors.frequency}</p>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" form="habitForm">
            Create
          </Button>
          <pre>{JSON.stringify(habits)}</pre>
        </CardFooter>
      </Card>
    </div>
  );
}
