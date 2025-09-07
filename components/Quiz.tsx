"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TAGS, Tag } from "@/lib/tags";
import { motion, AnimatePresence } from "framer-motion";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface QuizProps {
  level: 'middle' | 'high';
  regionalsOnly: boolean;
}

interface RadioOption {
  value: string;
  label: string;
  tags: Record<string, number>;
}

interface SortableOption {
  id: string;
  label: string;
  tag: Tag;
}

interface RadioQuestion {
  id: string;
  question: string;
  type: 'radio';
  options: RadioOption[];
}

interface SortableQuestion {
  id: string;
  question: string;
  type: 'sortable';
  options: SortableOption[];
}

type Question = RadioQuestion | SortableQuestion;

// --- DND SORTABLE ITEM COMPONENT ---
function SortableItem({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div ref={setNodeRef} style={style} {...attributes} className="flex items-center space-x-2 p-4 border border-gray-300 rounded-lg bg-white touch-none">
      <div {...listeners} className="cursor-grab active:cursor-grabbing p-2">
        <GripVertical className="h-5 w-5 text-gray-400" />
      </div>
      {children}
    </div>
  );
}

// --- QUIZ QUESTIONS DATA ---
const questions: Question[] = [
    {
        id: "teamSize",
        question: "What team size do you prefer?",
        type: "radio",
        options: [
            { value: "individual", label: "Individual (just me)", tags: { [TAGS.INDIVIDUAL]: 3 } },
            { value: "small", label: "Small team (2-3 people)", tags: { [TAGS.SMALL_TEAM]: 3 } },
            { value: "large", label: "Large team (6+ people)", tags: { [TAGS.LARGE_TEAM]: 3 } },
            { value: "flexible", label: "I'm flexible with team size", tags: { [TAGS.FLEXIBLE_SIZE]: 3 } },
        ],
    },
    {
        id: "activityTypes",
        question: "Rank these activity types by your interest (drag to reorder, most interested at top):",
        type: "sortable",
        options: [
            { id: "building_construction", label: "Building and construction projects", tag: TAGS.BUILDING_CONSTRUCTION },
            { id: "programming_technology", label: "Programming and technology", tag: TAGS.PROGRAMMING_TECHNOLOGY },
            { id: "design_creative", label: "Design and creative work", tag: TAGS.DESIGN_CREATIVE },
            { id: "research_analysis", label: "Research and analysis", tag: TAGS.RESEARCH_ANALYSIS },
            { id: "public_speaking", label: "Public speaking and presentations", tag: TAGS.PUBLIC_SPEAKING },
        ],
    },
    {
        id: "skills",
        question: "Rank these skills by your interest (drag to reorder):",
        type: "sortable",
        options: [
            { id: "engineering_problem_solving", label: "Engineering and problem solving", tag: TAGS.ENGINEERING_PROBLEM_SOLVING },
            { id: "writing_documentation", label: "Writing and documentation", tag: TAGS.WRITING_DOCUMENTATION },
            { id: "media_production", label: "Media production", tag: TAGS.MEDIA_PRODUCTION },
            { id: "leadership_organization", label: "Leadership and organization", tag: TAGS.LEADERSHIP_ORGANIZATION },
            { id: "science_investigation", label: "Science and investigation", tag: TAGS.SCIENCE_INVESTIGATION },
        ],
    },
    {
        id: "projectFormat",
        question: "What project format appeals to you most?",
        type: "radio",
        options: [
            { value: "long_term", label: "Long-term portfolio projects", tags: { [TAGS.LONG_TERM_PORTFOLIO]: 3 } },
            { value: "presentation", label: "Presentations and demonstrations", tags: { [TAGS.PRESENTATION_DEMO]: 3 } },
            { value: "hands_on", label: "Hands-on building challenges", tags: { [TAGS.HANDS_ON_BUILDING]: 3 } },
            { value: "written_test", label: "Written tests and exams", tags: { [TAGS.WRITTEN_TEST]: 3 } },
            { value: "onsite", label: "On-site problem solving", tags: { [TAGS.ONSITE_PROBLEM_SOLVING]: 3 } },
        ],
    },
    {
        id: "workEnvironment",
        question: "What work environment suits you best?",
        type: "radio",
        options: [
            { value: "technical", label: "Technical and precise work", tags: { [TAGS.TECHNICAL_PRECISE]: 3 } },
            { value: "creative", label: "Creative and artistic expression", tags: { [TAGS.CREATIVE_ARTISTIC]: 3 } },
            { value: "collaborative", label: "Collaborative and social", tags: { [TAGS.COLLABORATIVE_SOCIAL]: 3 } },
            { value: "independent", label: "Independent and focused", tags: { [TAGS.INDEPENDENT_FOCUSED]: 3 } },
        ],
    },
    {
        id: "challengeType",
        question: "What type of challenge excites you most?",
        type: "radio",
        options: [
            { value: "solve_problems", label: "Solving complex problems", tags: { [TAGS.SOLVE_COMPLEX_PROBLEMS]: 3 } },
            { value: "create_new", label: "Creating something new", tags: { [TAGS.CREATE_SOMETHING_NEW]: 3 } },
            { value: "compete", label: "Competing head-to-head", tags: { [TAGS.COMPETE_HEAD_TO_HEAD]: 3 } },
            { value: "demonstrate", label: "Demonstrating knowledge", tags: { [TAGS.DEMONSTRATE_KNOWLEDGE]: 3 } },
        ],
    },
];

// --- MAIN QUIZ COMPONENT ---
export default function Quiz({ level, regionalsOnly }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userTags, setUserTags] = useState<Record<string, number>>({});
  const [sortableItems, setSortableItems] = useState<SortableOption[]>([]);
  const router = useRouter();

  const currentQ = questions[currentQuestion];

  useEffect(() => {
    if (currentQ?.type === 'sortable') {
      setSortableItems(currentQ.options);
    }
  }, [currentQuestion, currentQ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const goToNextQuestion = (newTags: Record<string, number>) => {
    const updatedTags = { ...userTags };
    for (const tag in newTags) {
        updatedTags[tag] = (updatedTags[tag] || 0) + newTags[tag];
    }

    if (currentQuestion < questions.length - 1) {
      setUserTags(updatedTags);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalTags = { ...updatedTags, ...newTags };
      const params = new URLSearchParams({
        level,
        regionalsOnly: regionalsOnly.toString(),
        tags: JSON.stringify(finalTags)
      });
      router.push(`/results?${params.toString()}`);
    }
  };

  const handleRadioAnswer = (value: string) => {
    if (currentQ.type !== 'radio') return;
    const selectedOption = currentQ.options.find(opt => opt.value === value);
    if (selectedOption) {
      goToNextQuestion(selectedOption.tags);
    }
  };

  const handleSortableSubmit = () => {
    if (currentQ.type !== 'sortable') return;
    const newTags: Record<string, number> = {};
    const maxWeight = sortableItems.length;
    sortableItems.forEach((item, index) => {
      const weight = maxWeight - index; // Top item gets highest weight
      newTags[item.tag] = weight;
    });
    goToNextQuestion(newTags);
  };

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSortableItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="w-full max-w-2xl border-black relative overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-black">
          Question {currentQuestion + 1} of {questions.length}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-center text-black mb-6">
              {currentQ.question}
            </h2>

            {currentQ.type === 'radio' && (
              <RadioGroup onValueChange={handleRadioAnswer} className="space-y-3">
                {currentQ.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 p-4 border border-gray-300 rounded-lg hover:border-black transition-colors cursor-pointer">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="text-lg cursor-pointer flex-grow text-black">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {currentQ.type === 'sortable' && (
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={sortableItems.map(item => item.id)} strategy={verticalListSortingStrategy}>
                  <div className="space-y-3">
                    {sortableItems.map(item => (
                      <SortableItem key={item.id} id={item.id}>
                        <Label className="text-lg flex-grow text-black">{item.label}</Label>
                      </SortableItem>
                    ))}
                  </div>
                </SortableContext>
                <Button onClick={handleSortableSubmit} className="w-full mt-6 bg-black text-white hover:bg-gray-800">
                  Confirm Order
                </Button>
              </DndContext>
            )}
          </motion.div>
        </AnimatePresence>
        
        <Progress value={progress} className="mt-8" />
      </CardContent>
    </Card>
  );
}
