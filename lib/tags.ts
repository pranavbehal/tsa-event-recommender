// Question-based tag system for TSA events
export const TAGS = {
  // Team Size (Question 2)
  INDIVIDUAL: 'individual',
  SMALL_TEAM: 'small_team',
  LARGE_TEAM: 'large_team',
  FLEXIBLE_SIZE: 'flexible_size',
  
  // Primary Activity Types (Question 3)
  BUILDING_CONSTRUCTION: 'building_construction',
  PROGRAMMING_TECHNOLOGY: 'programming_technology',
  DESIGN_CREATIVE: 'design_creative',
  RESEARCH_ANALYSIS: 'research_analysis',
  PUBLIC_SPEAKING: 'public_speaking',
  
  // Secondary Skills (Question 4)
  ENGINEERING_PROBLEM_SOLVING: 'engineering_problem_solving',
  WRITING_DOCUMENTATION: 'writing_documentation',
  MEDIA_PRODUCTION: 'media_production',
  LEADERSHIP_ORGANIZATION: 'leadership_organization',
  SCIENCE_INVESTIGATION: 'science_investigation',
  
  // Project Format (Question 5)
  LONG_TERM_PORTFOLIO: 'long_term_portfolio',
  PRESENTATION_DEMO: 'presentation_demo',
  HANDS_ON_BUILDING: 'hands_on_building',
  WRITTEN_TEST: 'written_test',
  ONSITE_PROBLEM_SOLVING: 'onsite_problem_solving',
  EARLY_SUBMISSION: 'early_submission',
  
  // Work Environment (Question 6)
  TECHNICAL_PRECISE: 'technical_precise',
  CREATIVE_ARTISTIC: 'creative_artistic',
  COLLABORATIVE_SOCIAL: 'collaborative_social',
  INDEPENDENT_FOCUSED: 'independent_focused',
  
  // Challenge Type (Question 7)
  SOLVE_COMPLEX_PROBLEMS: 'solve_complex_problems',
  CREATE_SOMETHING_NEW: 'create_something_new',
  COMPETE_HEAD_TO_HEAD: 'compete_head_to_head',
  DEMONSTRATE_KNOWLEDGE: 'demonstrate_knowledge'
} as const;

export type Tag = typeof TAGS[keyof typeof TAGS];
