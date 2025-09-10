"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getRecommendedEvents } from "@/lib/events";
import { Tag } from "@/lib/tags";

type RecommendedEvent = {
  name: string;
  teamSize: string;
  description: string;
  theme?: string;
  runningAtRegionals: boolean;
  qualifier?: boolean;
  matchPercentage: number;
};

export default function Results() {
  const searchParams = useSearchParams();
  const [recommendedEvents, setRecommendedEvents] = useState<RecommendedEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const level = searchParams.get('level') as 'middle' | 'high';
      const regionalsOnly = searchParams.get('regionalsOnly') === 'true';
      const tagsParam = searchParams.get('tags');
      
      if (!level || !tagsParam) {
        setError('Missing required parameters');
        setLoading(false);
        return;
      }

      const userTags = JSON.parse(tagsParam) as Record<Tag, number>;
      const recommendations = getRecommendedEvents(userTags, level, regionalsOnly);
      setRecommendedEvents(recommendations);
    } catch (err) {
      console.error('Error getting recommendations:', err);
      setError('Failed to get recommendations');
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-4 flex items-center justify-center">
        <Card className="w-full max-w-md soft-border bg-white shadow-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
              Oops! Something went wrong
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-red-600 mb-6">{error}</p>
            <Link href="/">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 px-6 py-3 rounded-xl">
                Start Over
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            Your Recommended TSA Events
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Based on your preferences, here are your top event matches:
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading recommendations...</p>
          </div>
        ) : recommendedEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              No recommendations found. Please try again with different preferences.
            </p>
            <Link href="/">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 px-6 py-3 rounded-xl">
                Take Quiz Again
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {recommendedEvents.map((event: any, index: number) => (
                <Card key={event.name} className="soft-border card-hover bg-white shadow-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-800 mb-1 leading-tight">
                          <span className="text-blue-600 font-bold">#{index + 1}</span> {event.name}
                        </CardTitle>
                        <CardDescription className="text-base text-gray-600">
                          Team Size: {event.teamSize}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        variant="outline" 
                        className="border-blue-200 text-blue-700 bg-blue-50 font-semibold text-sm"
                      >
                        {event.matchPercentage}% match
                      </Badge>
                      {!event.runningAtRegionals && (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-sm">
                          Not at Regionals
                        </Badge>
                      )}
                      {event.qualifier && (
                        <Badge className="bg-green-100 text-green-700 border-green-200 text-sm">
                          Qualifier Event
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                      <strong className="text-gray-800">Description:</strong> {event.description}
                    </p>
                    {event.theme && (
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <p className="text-base text-gray-700 leading-relaxed">
                          <strong className="text-gray-800">Theme:</strong> {event.theme}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Link href="/">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 px-8 py-3 text-base font-medium rounded-xl">
                  Take Quiz Again
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
