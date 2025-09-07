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
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <Card className="w-full max-w-2xl border-black">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center text-black">
              TSA Event Recommender
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-gray-700">
              Find the perfect TSA events for you based on your interests and preferences.
            </p>
            <Button 
              onClick={() => setStep('level')} 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white"
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <Card className="w-full max-w-2xl border-black">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-black">
              Tell us about yourself
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-lg font-semibold text-black mb-4 block">
                What grade level are you?
              </Label>
              <RadioGroup onValueChange={(value) => handleLevelSelect(value as 'middle' | 'high')}>
                <div className="flex items-center space-x-2 p-4 border border-gray-300 rounded-lg hover:border-black transition-colors">
                  <RadioGroupItem value="middle" id="middle" />
                  <Label htmlFor="middle" className="text-lg cursor-pointer flex-grow">
                    Middle School (6th-8th grade)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border border-gray-300 rounded-lg hover:border-black transition-colors">
                  <RadioGroupItem value="high" id="high" />
                  <Label htmlFor="high" className="text-lg cursor-pointer flex-grow">
                    High School (9th-12th grade)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2 p-4 border border-gray-300 rounded-lg">
              <Checkbox 
                id="regionals" 
                checked={regionalsOnly}
                onCheckedChange={setRegionalsOnly}
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
