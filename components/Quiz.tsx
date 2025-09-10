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
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  const style = { 
    transform: CSS.Transform.toString(transform), 
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      {...attributes} 
      {...listeners}
      className="flex items-center space-x-2 p-4 border-2 border-gray-300 rounded-xl bg-white touch-none cursor-grab active:cursor-grabbing hover:border-blue-400 hover:shadow-md"
    >
      <div className="p-2">
        <GripVertical className="h-5 w-5 text-gray-500" />
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
            { value: "individual", label: "Individual", tags: { [TAGS.INDIVIDUAL]: 3 } },
            { value: "small", label: "Small team (2-3)", tags: { [TAGS.SMALL_TEAM]: 3 } },
            { value: "large", label: "Large team (4-6)", tags: { [TAGS.LARGE_TEAM]: 3 } },
            { value: "any", label: "I'm open to any team size", tags: { [TAGS.ANY_TEAM_SIZE]: 3 } },
        ],
    },
    {
        id: "activityTypes",
        question: "Rank these general activities by your interest:",
        type: "sortable",
        options: [
            { id: "hands_on_building", label: "Hands-on building", tag: TAGS.HANDS_ON_BUILDING },
            { id: "programming_technology", label: "Programming and technology", tag: TAGS.PROGRAMMING_TECHNOLOGY },
            { id: "design_creative", label: "Design and creative work", tag: TAGS.DESIGN_CREATIVE },
            { id: "research_analysis", label: "Research and analysis", tag: TAGS.RESEARCH_ANALYSIS },
            { id: "public_speaking_presentations", label: "Public speaking and presentations", tag: TAGS.PUBLIC_SPEAKING_PRESENTATIONS },
        ],
    },
    {
        id: "topicInterests",
        question: "Rank these topics by your interest:",
        type: "sortable",
        options: [
            { id: "computer_science", label: "Computer Science", tag: TAGS.COMPUTER_SCIENCE },
            { id: "robotics", label: "Robotics", tag: TAGS.ROBOTICS },
            { id: "engineering", label: "Engineering", tag: TAGS.ENGINEERING },
            { id: "art_design", label: "Art & Design", tag: TAGS.ART_DESIGN },
            { id: "leadership_public_speaking", label: "Leadership & Public Speaking", tag: TAGS.LEADERSHIP_PUBLIC_SPEAKING },
        ],
    },
    {
        id: "projectTasks",
        question: "You have a weekend to work on a project. Which of these tasks would you rather do? (Rank them)",
        type: "sortable",
        options: [
            { id: "build_program_robot", label: "Build and program a small robot to navigate a maze", tag: TAGS.BUILD_PROGRAM_ROBOT },
            { id: "design_brand_marketing", label: "Design a brand identity and marketing plan for a new product", tag: TAGS.DESIGN_BRAND_MARKETING },
            { id: "write_shoot_film", label: "Write, shoot, and edit a short film", tag: TAGS.WRITE_SHOOT_FILM },
            { id: "research_write_report", label: "Research and write a detailed report on a new technology", tag: TAGS.RESEARCH_WRITE_REPORT },
            { id: "prepare_deliver_speech", label: "Prepare and deliver a persuasive speech on a topic you're passionate about", tag: TAGS.PREPARE_DELIVER_SPEECH },
        ],
    },
    {
        id: "eventFormat",
        question: "Which type of event are you most interested in doing?",
        type: "sortable",
        options: [
            { id: "presentations_onsite", label: "Presentations and other on-site events", tag: TAGS.PRESENTATIONS_ONSITE },
            { id: "tests_exams", label: "Tests and exams", tag: TAGS.TESTS_EXAMS },
            { id: "research_documentation", label: "Research & documentation projects", tag: TAGS.RESEARCH_DOCUMENTATION },
            { id: "building_drop_off", label: "Building & drop-off events", tag: TAGS.BUILDING_DROP_OFF },
            { id: "digital_early_submission", label: "Digital events (with early submission)", tag: TAGS.DIGITAL_EARLY_SUBMISSION },
        ],
    },
    {
        id: "communityRole",
        question: "A local community center wants to host a tech event. Which of these roles would you be most excited to take on? (Rank them)",
        type: "sortable",
        options: [
            { id: "event_coordinator", label: "Event Coordinator: Plan the event logistics, schedule, and promotion", tag: TAGS.EVENT_COORDINATOR },
            { id: "workshop_leader", label: "Workshop Leader: Teach a hands-on workshop on a specific skill (e.g., 3D printing, basic coding)", tag: TAGS.WORKSHOP_LEADER },
            { id: "technical_support", label: "Technical Support: Manage the equipment, network, and troubleshoot issues during the event", tag: TAGS.TECHNICAL_SUPPORT },
            { id: "documentation_lead", label: "Documentation Lead: Create tutorials, guides, and a summary report of the event", tag: TAGS.DOCUMENTATION_LEAD },
            { id: "event_host", label: "Event Host: Welcome guests and give speeches", tag: TAGS.EVENT_HOST },
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
    const maxWeight = sortableItems.length - 1; // Subtract 1 so last item gets 0
    sortableItems.forEach((item, index) => {
      const weight = maxWeight - index; // Top item gets highest weight, last gets 0
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
    <Card className="w-full max-w-2xl mx-auto shadow-sm border-gray-200">
      <CardContent className="p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">Question {currentQuestion + 1} of {questions.length}</h3>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[300px] sm:min-h-[400px]"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-4 sm:mb-6 px-2">
              {currentQ.question}
            </h2>

            {currentQ.type === 'radio' && (
              <RadioGroup onValueChange={handleRadioAnswer} className="space-y-3">
                {currentQ.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-3 sm:p-4 soft-border rounded-xl cursor-pointer card-hover">
                    <RadioGroupItem value={option.value} id={option.value} className="border-gray-300" />
                    <Label htmlFor={option.value} className="text-base sm:text-lg flex-grow cursor-pointer text-gray-700 leading-relaxed">
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
                        <Label className="text-base sm:text-lg flex-grow text-gray-800 leading-relaxed font-medium">{item.label}</Label>
                      </SortableItem>
                    ))}
                  </div>
                </SortableContext>
                <Button onClick={handleSortableSubmit} className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 py-3 text-base font-medium rounded-xl">
                  Next
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
