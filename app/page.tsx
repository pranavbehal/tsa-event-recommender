"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Quiz from "@/components/Quiz";

type SetupStep = 'welcome' | 'level' | 'quiz';

export default function Home() {
  const [step, setStep] = useState<SetupStep>('welcome');
  const [level, setLevel] = useState<'middle' | 'high' | null>(null);
  const [regionalsOnly, setRegionalsOnly] = useState(true);

  const handleLevelSelect = (selectedLevel: 'middle' | 'high') => {
    setLevel(selectedLevel);
    setStep('quiz');
  };

  if (step === 'welcome') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <Card className="w-full max-w-2xl soft-border bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl font-bold text-center text-gray-800">
              TSA Event Recommender
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Find the perfect TSA events for you based on your interests and preferences.
            </p>
            <Button 
              onClick={() => setStep('level')} 
              className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 px-8 py-3 text-base font-medium rounded-xl"
            >
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 'level') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <Card className="w-full max-w-2xl soft-border bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-800">
              Tell us about yourself
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-base sm:text-lg font-semibold text-gray-800 mb-4 block">
                What grade level are you?
              </Label>
              <RadioGroup onValueChange={(value) => handleLevelSelect(value as 'middle' | 'high')}>
                <div className="flex items-center space-x-2 p-4 soft-border rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                  <RadioGroupItem value="middle" id="middle" />
                  <Label htmlFor="middle" className="text-base sm:text-lg cursor-pointer flex-grow text-gray-700">
                    Middle School (6th-8th grade)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 soft-border rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                  <RadioGroupItem value="high" id="high" />
                  <Label htmlFor="high" className="text-base sm:text-lg cursor-pointer flex-grow text-gray-700">
                    High School (9th-12th grade)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2 p-4 soft-border rounded-lg">
              <Checkbox 
                id="regionals" 
                checked={regionalsOnly}
                onCheckedChange={(checked) => setRegionalsOnly(checked === true)}
              />
              <Label htmlFor="regionals" className="text-sm text-gray-600 cursor-pointer">
                Only show events running at regionals (recommended)
              </Label>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <Quiz level={level!} regionalsOnly={regionalsOnly} />
    </div>
  );
}
