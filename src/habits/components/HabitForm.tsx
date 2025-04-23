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

export default function HabitForm() {
  interface Habit {
    name: string;
    category: string;
  }

  const habitSchema = z.object({
    name: z.string().min(3),
    category: z.string(),
  });

  const [habit, setHabit] = useState<Habit[]>([]);
  const [errors, setErrors] = useState<{[ key:string ]:string[]}>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const category = formData.get("category") as string;

    try {
      const validate = habitSchema.parse({ name, category });
      setHabit([...habit, validate]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: {[ key:string ]:string[]} = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as string;
          if (!fieldErrors[field]) {
            fieldErrors[field] = [];
          }
          fieldErrors[field].push(err.message);
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
                { errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="category">Category</Label>
                <Select name="category">
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="fitness">Fitness</SelectItem>
                    <SelectItem value="productivity">Productivity</SelectItem>
                    <SelectItem value="mindfulness">Mindfulness</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" form="habitForm">
            Create
          </Button>
          <pre>{JSON.stringify(habit)}</pre>
        </CardFooter>
      </Card>
    </div>
  );
}
