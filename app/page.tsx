"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Quiz from "@/components/Quiz";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            TSA Event Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          {!started ? (
            <>
              <p className="text-lg mb-6 text-muted-foreground">
                Find the perfect TSA events for you based on your interests!
              </p>
              <Button onClick={() => setStarted(true)} variant="secondary">
                Start Quiz
              </Button>
            </>
          ) : (
            <Quiz />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
