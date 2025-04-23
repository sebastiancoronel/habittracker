import React from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/shared/components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Habit Tracker</h1>
        <p className="text-xl max-w-2xl mb-8">
          Build lasting habits and track your progress with our simple and effective habit tracking tools.
        </p>
        <Button asChild size="lg" className="mb-8">
          <Link to="/habits/create">Get Started</Link>
        </Button>
      </section>
      
      {/* Problem-solving Section */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">How We Help You Build Better Habits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3">Track Daily</h3>
              <p>Simple daily tracking to help you stay consistent with your habits.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3">Visualize Progress</h3>
              <p>See your progress over time and celebrate your consistency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3">Build Consistency</h3>
              <p>Create lasting behavior changes through regular habit tracking.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Transform Your Habits?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="default">
            <Link to="/habits">View Habits</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/">Learn More</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}