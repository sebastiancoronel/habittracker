//Componentes: Renderizado y manejo de eventos
import * as React from "react";
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
import { useHabitForm } from "@/habits/hooks/useHabitForm";

export default function HabitForm() {
  const { errors, validateForm } = useHabitForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const frequency = formData.get("frequency") as string;

    validateForm(name, frequency);
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
                  <SelectTrigger id="frequency" aria-label="Frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="daily" data-testid="Daily">
                      Daily
                    </SelectItem>
                    <SelectItem value="weekly" data-testid="Weekly">
                      Weekly
                    </SelectItem>
                    <SelectItem value="monthly" data-testid="Monthly">
                      Monthly
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.frequency && (
                  <p className="text-red-500 text-sm">{errors.frequency}</p>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit" form="habitForm" data-testid="createBtn">
            Create
          </Button>
          {/* <pre>{JSON.stringify(habits)}</pre> */}
        </CardFooter>
      </Card>
    </div>
  );
}
