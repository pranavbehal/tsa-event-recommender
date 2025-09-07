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

export default function Results() {
  const searchParams = useSearchParams();
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
        <Card className="w-full max-w-4xl border-black">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-black">
              Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-red-600">{error}</p>
            <div className="text-center mt-4">
              <Link href="/">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  Start Over
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <Card className="w-full max-w-4xl border-black">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-black">
            Your Recommended TSA Events
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            Based on your preferences, here are your top event matches:
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-center text-gray-600">Loading recommendations...</p>
          ) : recommendedEvents.length === 0 ? (
            <p className="text-center text-gray-600">
              No recommendations found. Please try again with different preferences.
            </p>
          ) : (
            <div className="space-y-4">
              {recommendedEvents.map((event: any, index: number) => (
                <Card key={event.name} className="border-gray-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold text-black">
                        #{index + 1} {event.name}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant="outline" 
                          className="border-black text-black font-bold"
                        >
                          {event.matchPercentage}% match
                        </Badge>
                        {!event.runningAtRegionals && (
                          <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                            Not at Regionals
                          </Badge>
                        )}
                        {event.qualifier && (
                          <Badge variant="default" className="bg-blue-100 text-blue-800 border-blue-300">
                            Qualifier Event
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-gray-600">
                      Team Size: {event.teamSize}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-800 mb-3">
                      <strong>Description:</strong> {event.description}
                    </p>
                    {event.theme && (
                      <p className="text-gray-700">
                        <strong>Theme:</strong> {event.theme}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          <div className="mt-8 text-center">
            <Link href="/">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Take Quiz Again
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
