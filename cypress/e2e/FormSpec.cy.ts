describe("template spec", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });

  const generateHabit = () => {
    cy.window().then((win) => {
      const habit = {
        name: "Drink Water",
        frequency: "Monthly",
      };
      win.localStorage.setItem("habits", JSON.stringify([habit]));
    });
  };

  it.skip("Complete the form and save the habit in localstorage", () => {
    cy.visit("http://localhost:5173/habits/create");
    cy.get('input[name="name"]').type("Drink Water");
    cy.get('button[id="frequency"]').click();
    cy.get('div[data-testid="Daily"]').click();
    cy.get('button[type="submit"]').click();
    cy.window().then((win) => {
      const localstorage = win.localStorage.getItem("habits");
      expect(localstorage).to.contain("Drink Water");
    });
  });

  it.skip("Check if there is showing the habit in the list", () => {
    generateHabit();
    cy.visit("http://localhost:5173/habits/list");
    cy.get('div[data-slot="card-title"]').contains("Drink Water");
  });

  it.skip("Complete an habit and should disapear from the screen", () => {
    // Put one habit in localstorage
    generateHabit();
    // Visit the web page
    cy.visit("http://localhost:5173/habits/list");
    // Find the checkbox and click it
    cy.get('button[role="checkbox"]').click();
    // Expect that there isnt any card or put a label saying empty and check if exists on the screen.
    cy.contains("Nothing").should("be.visible");
  });

  // Check if legend Habit already exists appears when trying to add a duplicated
  it.skip("Check duplicated", () => {
    generateHabit();
    cy.visit("http://localhost:5173/habits/create");
    cy.get('input[name="name"]').type("Drink Water");
    cy.get('button[id="frequency"]').click();
    cy.get('div[data-testid="Daily"]').click();
    cy.get('button[type="submit"]').click();
    cy.contains("Habit already exists").should("be.visible");
  });
  //Check if Invalid enum value legend exist when never select frequency
  it.skip("Check invalid enum value", () => {
    cy.visit("http://localhost:5173/habits/create");
    cy.get('input[name="name"]').type("Drink Water");
    cy.get('button[type="submit"]').click();
    cy.contains("Invalid enum value").should("be.visible");
  });
  // Check String must contain at least 3 character(s) when submit with out Habit name
  it("Check String error message when is empty", () => {
    cy.visit("http://localhost:5173/habits/create");
    cy.get('button[id="frequency"]').click();
    cy.get('div[data-testid="Daily"]').click();
    cy.get('button[type="submit"]').click();
    cy.contains("String must contain at least 3 character(s)").should(
      "be.visible"
    );
  });
});
