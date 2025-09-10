// Tag system for TSA Event Recommender
// Based on quiz questions to create personalized event recommendations

export const TAGS = {
  // Team Size Preferences
  INDIVIDUAL: "individual",
  SMALL_TEAM: "small_team", 
  LARGE_TEAM: "large_team",
  ANY_TEAM_SIZE: "any_team_size",

  // Activity Type Preferences  
  HANDS_ON_BUILDING: "hands_on_building",
  PROGRAMMING_TECHNOLOGY: "programming_technology", 
  DESIGN_CREATIVE: "design_creative",
  RESEARCH_ANALYSIS: "research_analysis",
  PUBLIC_SPEAKING_PRESENTATIONS: "public_speaking_presentations",

  // Topic Interest Areas
  COMPUTER_SCIENCE: "computer_science",
  ROBOTICS: "robotics",
  ENGINEERING: "engineering",
  ART_DESIGN: "art_design",
  LEADERSHIP_PUBLIC_SPEAKING: "leadership_public_speaking",

  // Project Task Preferences
  BUILD_PROGRAM_ROBOT: "build_program_robot",
  DESIGN_BRAND_MARKETING: "design_brand_marketing",
  WRITE_SHOOT_FILM: "write_shoot_film", 
  RESEARCH_WRITE_REPORT: "research_write_report",
  PREPARE_DELIVER_SPEECH: "prepare_deliver_speech",

  // Event Format Preferences
  PRESENTATIONS_ONSITE: "presentations_onsite",
  TESTS_EXAMS: "tests_exams",
  RESEARCH_DOCUMENTATION: "research_documentation",
  BUILDING_DROP_OFF: "building_drop_off",
  DIGITAL_EARLY_SUBMISSION: "digital_early_submission",

  // Community Role Preferences  
  EVENT_COORDINATOR: "event_coordinator",
  WORKSHOP_LEADER: "workshop_leader",
  TECHNICAL_SUPPORT: "technical_support",
  DOCUMENTATION_LEAD: "documentation_lead",
  EVENT_HOST: "event_host",
} as const;

export type Tag = typeof TAGS[keyof typeof TAGS];
