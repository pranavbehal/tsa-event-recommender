"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

const questions = [
  {
    id: 'interest',
    question: 'What area interests you the most?',
    options: [
      { value: 'building', label: 'Building and Construction' },
      { value: 'coding', label: 'Coding and Programming' },
      { value: 'design', label: 'Design and Creativity' },
      { value: 'research', label: 'Research and Analysis' },
      { value: 'presentation', label: 'Public Speaking and Presentation' },
    ],
  },
  {
    id: 'workStyle',
    question: 'How do you prefer to work?',
    options: [
      { value: 'individual', label: 'Individually' },
      { value: 'team', label: 'In a team' },
      { value: 'both', label: 'Both individually and in a team' },
    ],
  },
  {
    id: 'challenge',
    question: 'What type of challenge do you enjoy?',
    options: [
      { value: 'technical', label: 'Technical problem-solving' },
      { value: 'creative', label: 'Creative expression' },
      { value: 'analytical', label: 'Analytical thinking' },
      { value: 'hands-on', label: 'Hands-on building' },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const router = useRouter();

  const handleAnswer = (value: string) => {
    setSelectedAnswer(value);
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  useEffect(() => {
    if (selectedAnswer) {
      const timer = setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          router.push(`/results?${new URLSearchParams(answers as Record<string, string>).toString()}`);
        }
        setSelectedAnswer(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, currentQuestion, answers, router]);

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
            Question {currentQuestion + 1} of {questions.length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl mb-6 text-center text-gray-700 dark:text-gray-300 font-semibold">{currentQ.question}</h2>
          <RadioGroup onValueChange={handleAnswer} className="space-y-3">
            {currentQ.options.map((option) => (
              <div 
                key={option.value} 
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors duration-200 ${
                  selectedAnswer === option.value 
                    ? 'bg-blue-100 dark:bg-blue-900' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="text-lg cursor-pointer flex-grow">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          <Progress value={progress} className="mt-8" />
        </CardContent>
      </Card>
    </div>
  );
}