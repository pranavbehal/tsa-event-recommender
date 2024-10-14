"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: "primaryInterest",
    question: "What area interests you the most?",
    options: [
      { value: "building", label: "Building and Construction" },
      { value: "coding", label: "Coding and Programming" },
      { value: "design", label: "Design and Creativity" },
      { value: "research", label: "Research and Analysis" },
      { value: "presentation", label: "Public Speaking and Presentation" },
    ],
  },
  {
    id: "secondaryInterest",
    question: "Which area is your second most interesting?",
    options: [
      { value: "building", label: "Building and Construction" },
      { value: "coding", label: "Coding and Programming" },
      { value: "design", label: "Design and Creativity" },
      { value: "research", label: "Research and Analysis" },
      { value: "presentation", label: "Public Speaking and Presentation" },
    ],
  },
  {
    id: "workStyle",
    question: "How do you prefer to work?",
    options: [
      { value: "individual", label: "Individually" },
      { value: "team", label: "In a team" },
      { value: "both", label: "Both individually and in a team" },
    ],
  },
  {
    id: "challenge",
    question: "What type of challenge do you enjoy?",
    options: [
      { value: "technical", label: "Technical problem-solving" },
      { value: "creative", label: "Creative expression" },
      { value: "analytical", label: "Analytical thinking" },
      { value: "hands-on", label: "Hands-on building" },
    ],
  },
  {
    id: "freeTime",
    question: "What would you most likely do in your free time?",
    options: [
      { value: "buildModel", label: "Build a house model" },
      { value: "makeWebsite", label: "Create a website" },
      { value: "debateTopic", label: "Debate with others on a topic" },
      { value: "designLogo", label: "Design a logo" },
      { value: "writeEssay", label: "Write an essay on technology" },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const router = useRouter();

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        router.push(
          `/results?${new URLSearchParams(
            answers as Record<string, string>
          ).toString()}`
        );
      }
    }, 50);
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        {currentQ.question}
      </h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <RadioGroup onValueChange={handleAnswer} className="space-y-3">
            {currentQ.options.map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent transition-colors"
              >
                <RadioGroupItem value={option.value} id={option.value} />
                <Label
                  htmlFor={option.value}
                  className="text-lg cursor-pointer flex-grow"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </motion.div>
      </AnimatePresence>
      <Progress value={progress} className="mt-8" />
    </div>
  );
}
