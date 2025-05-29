import React from "react";
import { describe, expect, test, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HabitForm from "./components/HabitForm";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import markAsCompletedReducer from "@/state/markAsCompleted/markAsCompletedSlice";
import { HabitService } from "./services/habitService";

// Mockear los métodos del servicio
vi.mock("./services/habitService", () => ({
  HabitService: {
    save: vi.fn(),
    exists: vi.fn().mockReturnValue(false),
    getAll: vi.fn().mockReturnValue([]),
    delete: vi.fn(),
  },
}));

function renderRedux(children: React.ReactNode) {
  const store = configureStore({
    reducer: {
      markAsCompleted: markAsCompletedReducer,
    },
  });

  return render(
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}

beforeEach(() => {
  localStorage.clear();
  vi.clearAllMocks(); // Limpiar mocks antes de cada test
});

describe("Habits tests", () => {
  test("Create a habit and calls HabitService.save", async () => {
    const user = userEvent.setup();
    renderRedux(<HabitForm />);

    // Completar el input
    const nameInput = screen.getByLabelText("Habit Name");
    await user.type(nameInput, "Drink water");

    // Abrir el Select
    await user.click(screen.getByRole("combobox", { name: /Frequency/i }));

    // Esperar que la opción "Daily" aparezca y hacer clic
    const dailyOption = await screen.findByText("Daily");
    await user.click(dailyOption);

    // Click en el botón de crear
    const createBtn = screen.getByTestId("createBtn");
    await user.click(createBtn);

    // Verifica que el servicio fue llamado
    expect(HabitService.save).toHaveBeenCalledWith({
      name: "Drink water",
      frequency: "daily",
    });
  });
});
