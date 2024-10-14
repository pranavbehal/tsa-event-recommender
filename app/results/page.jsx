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
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const middleSchoolEvents = [
  {
    name: "Biotechnology",
    teamSize: "3-6",
    description:
      "To address the annual theme, participants select a contemporary biotechnology issue and demonstrate understanding of the topic through their documented research and an original display. Semifinalists participate in an interview.",
    theme:
      "Biotechnology that supports sustainable cosmetics packaging to reduce waste to landfills",
    runningAtRegionals: true,
  },
  {
    name: "CAD Foundations",
    teamSize: "1",
    description:
      "Participants demonstrate their understanding of CAD fundamentals by creating a two-dimensional (2-D) graphic representation of an engineering part or object and answering questions from evaluators about their entry.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Career Prep",
    teamSize: "1",
    description:
      "Based on the annual theme, participants conduct research on a technology-related career, prepare a letter of introduction to a potential employer, and develop a job-specific resume. Semifinalists participate in a mock job interview.",
    theme:
      "Theme: Select a career from one (1) of the following:  Bioenergy Technicians, Data Architect, Machine Learning Engineer, Nurse Practitioner",
    runningAtRegionals: true,
  },
  {
    name: "Challenging Technology Issues",
    teamSize: "2",
    description:
      "Following the onsite random selection of a technology topic from a group of pre-conference posted topics, participants work to prepare for and deliver a debate-style presentation, in which they explain opposing views of the selected topic.",
    theme:
      "Topics: Genetic Testing and Counseling, Animal Testing for Scientific Research, The Use of Drones for Surveillance, Privatization of Space Travel, Nanotechnology in Consumer Goods",
    runningAtRegionals: true,
  },
  {
    name: "Chapter Team",
    teamSize: "6",
    description:
      "Participants take a parliamentary procedure written test to qualify for the semifinal round of competition. Semifinalists conduct an opening ceremony, items of business, parliamentary actions, and a closing ceremony.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Children's Stories",
    teamSize: "1-6",
    description:
      "Participants create an illustrated children's story based on the annual theme. The entry product is a physical storybook of artistic, instructional, and social value. Semifinalists read their story aloud and participate in an interview.",
    theme:
      "An interactive or pop-up book that focuses on making friends in-person",
    runningAtRegionals: true,
  },
  {
    name: "Coding",
    teamSize: "2",
    description:
      "To qualify for the semifinal round of competition, participants take a written test that concentrates on computer science and coding. Semifinalists demonstrate their programming knowledge by developing a solution to an onsite coding challenge.",
    theme: "",
    runningAtRegionals: false,
  },
  {
    name: "Community Service Video",
    teamSize: "1-6",
    description:
      "Participants create a video that depicts the local TSA chapter's involvement in a community service project. Semifinalists deliver a presentation on the project and participate in an interview.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Construction Challenge",
    teamSize: "2-6",
    description:
      "Participants submit a scale model, display, and documentation portfolio for a design that fulfills a community need related to construction. Semifinalists deliver a presentation about their entry and participate in an interview.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Cybersecurity",
    teamSize: "1",
    description:
      "Participants take a test that assesses knowledge of cybersecurity vocabulary and the skills needed to execute common cybersecurity tasks. Using digital presentation software, semifinalists deliver a presentation that addresses the annual theme/problem.",
    theme:
      "Problem Statement: Byte Inc.'s Internet of things and Bluetooth are acting strangely on devices in the company's network. Address the potential cause and propose a solution.",
    runningAtRegionals: false,
  },
  {
    name: "Data Science and Analytics",
    teamSize: "2-3",
    description:
      "Participants conduct research on the annual topic, collect data, use analytics to assess the data and make predictions, and document their work in a portfolio and a display. To address a challenge presented onsite at the conference, semifinalists review specific data sets, provide insights, make predictions, and present their findings for evaluation.",
    theme:
      'Determine the potential "movie success" of a fictitious feature film based on different public metrics, such as, but not limited to box office revenue, date of release, movie genre (selected by the team), movie production budget, and more.',
    runningAtRegionals: false,
  },
  {
    name: "Digital Photography",
    teamSize: "1",
    description:
      "Participants produce and submit a digital photographic portfolio that relates to the annual theme. Semifinalists participate in an onsite photographic challenge and a presentation/interview.",
    theme:
      'Students will take four photographs that fit the theme "Through the Eye of an Animal."',
    runningAtRegionals: true,
  },
  {
    name: "Dragster",
    teamSize: "1",
    description:
      "Participants design, draw, and construct a CO2-powered dragster that adheres to the annual specifications, design and documentation requirements, and theme. Semifinalists participate in an interview and compete in a double-elimination race.",
    theme:
      "Address weights and lengths only; there are no special design challenges.",
    runningAtRegionals: true,
  },
  {
    name: "Electrical Applications",
    teamSize: "2",
    description:
      "Participants take a test on basic electrical and electronic theory. In response to an onsite challenge, semifinalists assemble a specified circuit from a schematic diagram, make required electrical measurements, and explain their solution in an interview.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Essays on Technology",
    teamSize: "1",
    description:
      "Participants conduct research on specific subtopics from a broad technology area posted as part of the annual theme. Using a previously prepared note card as an approved resource, participants draft an outline of the subtopic randomly selected onsite at the conference. Semifinalists write an essay on that subtopic.",
    theme:
      "Topic: Reducing our impact on the planet. Subtopics: Reducing microplastics in our oceans, Reducing forever chemicals in soil, Reducing energy consumption for cooling in residential and commercial buildings as temperatures rise",
    runningAtRegionals: true,
  },
  {
    name: "Flight",
    teamSize: "1",
    description:
      "Participants submit a documentation portfolio and fabricate a glider designed to stay in flight for the greatest elapsed time. Semifinalists use their technical drawing skills to construct a glider that is flown onsite.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Forensic Technology",
    teamSize: "2",
    description:
      "Participants take a test of basic forensic science theory to qualify for the semifinal round of competition. Semifinalists participate in an onsite forensic skills demonstration.",
    theme:
      "Be familiar with, and be able to demonstrate, the following forensic concepts: Tool mark identification, Hair and fiber analysis, Forensic biometrics",
    runningAtRegionals: true,
  },
  {
    name: "Inventions and Innovations",
    teamSize: "3-6",
    description:
      "To address the annual theme, participants research a need - and brainstorm a solution - for an invention or innovation of a device, system, or process. Participants document their work in an interactive display and the creation of a model/prototype. Semifinalists deliver a presentation about their work and participate in an interview.",
    theme:
      "Create a product that enhances the daily productivity of a middle school student.",
    runningAtRegionals: true,
  },
  {
    name: "Junior Solar Sprint",
    teamSize: "2-4",
    description:
      "Participants apply STEM concepts, creativity, teamwork, and problem-solving skills to design, construct, and race a solar-powered model car. Documentation of the process is required. Learn more about JSS, then register via an Army Educational Outreach Program (AEOP) portal to begin the JSS journey.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Leadership Strategies",
    teamSize: "3",
    description:
      "Participants prepare for and deliver a presentation about a specific challenge that officers of a TSA chapter might encounter. Semifinalists follow the same competition procedure but must respond to a different chapter challenge.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Mass Production",
    teamSize: "3-6",
    description:
      "Participants manufacture a marketable product that addresses the annual theme. The development of the product prototype is documented in a portfolio that presents participant knowledge and skills related to the mass production process. Through a demonstration of the prototype and an interview, semifinalists support the viability of the prototype.",
    theme: "Pet supply storage tower",
    runningAtRegionals: true,
  },
  {
    name: "Mechanical Engineering",
    teamSize: "2-3",
    description:
      "Participants design, document, and build a mechanical device (mousetrap car) that incorporates the elements of the annual theme/problem – and then race the car. Finalists are determined based on an evaluation of the documentation portfolio, the race exit interview, and the race placement.",
    theme:
      "Problem Statement: A vehicle must go forward at least ten (10) feet, then reverse to a full stop at seven (7) feet from the original starting line. The floor surface for the 2025 National TSA Conference will be convention center concrete.  The floor surfaces for state conferences may vary.",
    runningAtRegionals: true,
  },
  {
    name: "Medical Technology",
    teamSize: "1-6",
    description:
      "Participants conduct research on a contemporary medical technology issue related to the annual theme, document their research, create a display, and build a prototype. Semifinalists deliver a presentation about their entry and participate in an interview.",
    theme:
      "Medical Drugs and Genetics: Why do some people respond to medicines differently than others?",
    runningAtRegionals: true,
  },
  {
    name: "Microcontroller Design",
    teamSize: "1-6",
    description:
      "To address the annual theme/problem, participants design and create a working digital device, document the development process, and demonstrate their product as part of a presentation.",
    theme: "Interactive gift box",
    runningAtRegionals: true,
  },
  {
    name: "Off The Grid",
    teamSize: "1-6",
    description:
      "Based on the annual theme, participants conduct research on a sustainable architectural design for a home in a country not their own. Participants produce a portfolio and create a display and a model. Semifinalists present their design and participate in an interview.",
    theme:
      "Design a home for a family of four (4) in a country (of your choice)  in which a boreal forest (taiga) biome is found. The house must be designed for an area that does not have access to a power grid. In addition, the house must include a renewable energy source, one (1) agricultural system, and must solve one (1) problem that is specific to the area.",
    runningAtRegionals: true,
  },
  {
    name: "Prepared Speech",
    teamSize: "1",
    description:
      "Participants deliver a timed speech that relates to the theme of the current national TSA conference. Semifinalists and finalists are determined using the same competition procedure.",
    theme: "2025 National Conference Theme: Tune into Technology",
    runningAtRegionals: true,
  },
  {
    name: "Problem Solving",
    teamSize: "2",
    description:
      "Participants use problem-solving skills to design and build a solution to an onsite challenge. Solutions are evaluated using measures appropriate to the challenge, such as elapsed time, horizontal or vertical distance, and/or strength.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Promotional Marketing",
    teamSize: "1",
    description:
      "Participants create and submit a marketing portfolio and required elements that address the annual theme/problem. Semifinalists complete a layout and design assignment for evaluation.",
    theme:
      'Charitable and service organizations are the backbone of our communities.  A group called "Students Helping Grandparents" has contacted your chapter advisor about your chapter hosting an event at a public library, during which chapter members will lead focus group discussions with senior citizens.  The topic for the focus groups will be helping senior citizens understand and avoid online cybercrime.  The event is Tuesday May 27, 2025, from 4:00 PM – 6:00 PM.',
    runningAtRegionals: true,
  },
  {
    name: "STEM Animation",
    teamSize: "1-6",
    description:
      "Participants design and create a STEM animation video and documentation portfolio to address the annual theme/problem. Semifinalists present their animation and explain the elements of their portfolio/entry.",
    theme: "Robotics in automobile manufacturing",
    runningAtRegionals: true,
  },
  {
    name: "Structural Engineering",
    teamSize: "2",
    description:
      "Participants apply the principles of structural engineering to design and construct a structure that complies with the annual challenge. An assessment of the required documentation and the destructive testing of the structure (to determine its design efficiency) determine both semifinalists and finalists.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "System Control Technology",
    teamSize: "3",
    description:
      "In response to a challenge presented onsite at the conference, participants analyze a problem (typically one in an industrial setting), build and program a computer-controlled mechanical model to solve the problem, explain the program and the features of the mechanical model solution, and provide instructions for evaluators to operate the device.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Tech Bowl",
    teamSize: "3",
    description:
      "Participants demonstrate their knowledge of TSA and concepts addressed in technology content standards by completing an objective test. Semifinalists participate in a head-to-head, team competition.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Technical Design",
    teamSize: "2",
    description:
      "Participants demonstrate their ability to use the technical design process to solve an engineering design problem provided onsite at the conference. Required elements of the entry are presented in a portfolio that includes technical drawings for a minimum of three viable solutions.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Video Game Design",
    teamSize: "2-6",
    description:
      "Participants design, build, provide documentation for, and launch an E-rated, online game on a subject of their choice. Onsite at the conference, semifinalists deliver a presentation and participate in an interview to demonstrate the knowledge and expertise gained during the development of the game.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Vlogging",
    teamSize: "2-6",
    description:
      "Participants use digital video technology to create original content about a pre-determined technology theme. Semifinalists compete in an onsite challenge to produce additional video(s) based on specified criteria, such as provided props, lines of dialog, and topics.",
    theme:
      "Topic: Setting and achieving goals; the minimum number of audio pieces is four (4).",
    runningAtRegionals: false,
  },
  {
    name: "Website Design",
    teamSize: "3-6",
    description:
      "To address the annual challenge, participants design, build, provide documentation for, and launch a website that incorporates the elements of website design, graphic layout, and proper coding techniques. Semifinalists participate in an interview to demonstrate the knowledge and expertise gained during the development of the website.",
    theme:
      "Topic: Website for food preparation recipes. Challenge – Develop an original website with simple recipes for young cooks (MS and HS age).  It should have an interactive element that will ask a few questions to direct the user to the desired ingredients and recipe.",
    runningAtRegionals: true,
  },
  {
    name: "PA - Battling Bots",
    teamSize: "2-6",
    description:
      "Students will design and build remote-controlled robots (Bots) to face off in a gladiator-style competition. Through the manufacturing process of Bot building, students' imaginations are captured as they design, build, and compete with their robotic creations. Through this hands-on effort, students gain practical knowledge of Science, Technology, Engineering, and Math (STEM), all essential skills for manufacturing careers.",
    theme: "",
    runningAtRegionals: false,
  },
  {
    name: "PA-Delta Dart/Sky Eagle",
    teamSize: "1",
    description:
      "The Delta Dart event requires analytical thinking, experimentation, and interpretation of instructions in the solution of a designed problem. The problem is to construct a glider following specifications.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "PA- Digital Video Challenge",
    teamSize: "2",
    description:
      "The PA-TSA Digital Video Challenge is designed to allow TSA members to demonstrate their skills in the field of impromptu digital videography.",
    theme: "",
    runningAtRegionals: false,
  },
  {
    name: "PA-Logo Design",
    teamSize: "1",
    description:
      "Screen-printing utilizes an area of screen mesh blocked off with a non-permeable material to form a stencil creating a negative of the image to be printed; that is, the open spaces are where the ink will appear when printed. Transfers and Direct to Garment (DTG) printing IS NOT PERMITTED. This contest requires the student to create promotional logo designs to be utilized for the next year's PA-TSA T-shirt, PA-TSA State Conference program, and the PA-TSA website banner. The Middle School or High School winner will be chosen to have the designs appear on all PA- TSA State Conference publications (website, mailings, programs, etc.). The State Conference PA-TSA Logo Design contest is designed to demonstrate design, layout, production, and presentation skills of Visual Communications with a primary focus on the screen-printing process.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "PA-Materials Processes",
    teamSize: "1",
    description:
      "TSA contestants entering the Materials Processes contest are required to submit drawings and photographs of a project that they have constructed during the school year. The purpose of the Materials Processes contest is to provide a means for TSA members to demonstrate their ability to fabricate a project or product.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "PA-Pin Design",
    teamSize: "1",
    description:
      "The PA-TSA Pin Design contest is intended for competitors to design a visually captivating and communicative pin that embodies the spirit and values of PA-TSA. Participants will have the chance to explore the world of visual communication, where symbols, colors, and design play a pivotal role in conveying a message. The purpose of the PA-TSA pin is to raise funds for the American Cancer Society, promote PA-TSA at Pin Trading at the National Conference, and boost PA-TSA pride.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "PA- R/C Off Road Racing",
    teamSize: "3",
    description:
      "The R/C Off-Road Racing competition is designed to promote teamwork and problem-solving among students as they acquire the technical skills to adapt, operate, race, and maintain a radio-controlled off-road racing vehicle that will also perform a task while racing around the track. Points earned for the portfolio contents, the appearance of the vehicle body and piece for the task, drawing(s) for the task, and racing results will determine each team's evaluation. The task will change from year to year. The task and the specifications will be included in a separate document each year.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "PA - Robotics",
    teamSize: "2-4",
    description:
      "Students will design, build, test, and demonstrate a remote-controlled robot and necessary accessories in order to carry out a specific challenge. This event is not platform-specific.",
    theme: "",
    runningAtRegionals: false,
  },
  {
    name: "PA-Safety Illustration",
    teamSize: "1",
    description:
      "The Safety Illustration event is designed to encourage members' attention to the promotion of safety and safety practices when using any form of technology. The purpose of the Safety Illustration event is to provide a means for TSA members to demonstrate their ability to recognize safety needs and safety practices when using all forms of technology, traditional or high-tech.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "PA-Snapshot",
    teamSize: "1",
    description:
      "The PA-TSA Snapshot Contest is designed to allow TSA members to demonstrate their skills in the field of Photography.",
    theme: "",
    runningAtRegionals: true,
  },
];

const highSchoolEvents = [
  {
    name: "Animatronics",
    teamSize: "2-6",
    description:
      "To address the annual design challenge, participants exhibit and demonstrate their knowledge of mechanical and control systems by creating an animatronic device with a specific purpose (i.e., communicate an idea, entertain, demonstrate a concept, etc.) that includes sound, lights, and an appropriate surrounding environment (a display).",
    theme:
      "Design Problem: Following the specified requirements, create an animatronic exhibit for a public library to excite young readers.",
    runningAtRegionals: false,
  },
  {
    name: "Architectural Design",
    teamSize: "1-6",
    description:
      "In response to the annual design challenge, participants develop a set of architectural plans and related materials, and construct both a physical and computer-generated model to accurately depict their design. Semifinalists deliver a presentation and participate in an interview.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Audio Podcasting",
    teamSize: "1-6",
    description:
      "Participants use digital audio technology to create original content for a podcast piece that addresses the annual theme. The podcast must feature high level storytelling techniques, voice acting, and folly sound effects; the full entry must include documentation of the podcast development process and elements. Semifinalists participate in an interview.",
    theme:
      "Preparing to compete in a TSA event and/or preparing for your first TSA conference",
    runningAtRegionals: true,
  },
  {
    name: "Biotechnology Design",
    teamSize: "2-6",
    description:
      "Participants select a contemporary biotechnology problem that addresses the annual theme and demonstrates understanding of the topic through documented research, the development of a solution, a display (including an optional model or prototype), and an effective multimedia presentation. Semifinalists deliver a presentation and participate in an interview.",
    theme:
      "Topic: Tissue Engineering. Tissue Engineering is a biomedical engineering discipline that uses a combination of cells, engineering, materials methods, and suitable biochemical and physicochemical factors to restore, maintain, improve, or replace different types of biological tissues.",
    runningAtRegionals: true,
  },
  {
    name: "Board Game Design",
    teamSize: "2-6",
    description:
      "Participants develop, build, and package a board game that focuses on a subject of their choice. Creative packaging, and the instructions, pieces, and cards associated with the pilot game will be evaluated. Semifinalists set up the game, demonstrate how the game is played, explain the game's features, and discuss the design process.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Chapter Team",
    teamSize: "6",
    description:
      "Participants take a parliamentary procedure test to qualify for the semifinal round of competition. Semifinalists conduct an opening ceremony, items of business, parliamentary actions, and a closing ceremony.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Children's Stories",
    teamSize: "1-6",
    description:
      "In response to the annual theme, participants create an illustrated children's story of artistic, instructional, and social value, and submit documentation related to the development of the physical storybook. Semifinalists read their story aloud and participate in an interview.",
    theme:
      'Create a "touch and feel" or interactive storybook that introduces TSA and its benefits to young readers in an engaging manner.',
    runningAtRegionals: true,
  },
  {
    name: "Coding",
    teamSize: "1-2",
    description:
      "Participants take a test, which concentrates on aspects of coding, to qualify for the semifinal round of competition. Semifinalists develop a software program – in a designated amount of time – that accurately addresses an onsite problem.",
    theme: "",
    runningAtRegionals: false,
  },
  {
    name: "Computer-Aided Design (CAD), Architecture",
    teamSize: "1",
    description:
      "Participants use complex computer graphic skills, tools, and processes to respond to a design challenge in which they develop representations of architectural subjects, such as foundation and/or floor plans, and/or elevation drawings, and/or details of architectural ornamentation or cabinetry. The solution to the design challenge and participant answers in an interview are evaluated.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Computer-Aided Design (CAD), Engineering",
    teamSize: "1",
    description:
      "Participants use complex computer graphic skills, tools, and processes to respond to a design challenge in which they develop three-dimensional representations of engineering subjects, such as a machine part, tool, device, or manufactured product. The solution to the design challenge and participant answers in an interview are evaluated.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Data Science and Analytics",
    teamSize: "1-2",
    description:
      "Participants identify a societal issue, collect or compile data from various sources about the issue, and then produce documentation and a digital scientific poster about their findings. Semifinalists create a synopsis and digital visual representation of a data set provided in an onsite challenge.",
    theme:
      'Identify and use a "Real Estate," "Housing," and/or "Community" related open-source data set for your analyses and research. In the scientific poster, cite the source of the data, including the URL/domain and file format.',
    runningAtRegionals: true,
  },
  {
    name: "Debating Technological Issues",
    teamSize: "2",
    description:
      "Participants research the annual topic and subtopics and prepare for a debate against a team from another chapter. Teams are instructed to take either the pro or con side of a selected subtopic, submit a summary of references, and use their research to support their assigned position. The quality of a team's debate determines semifinalists and finalists.",
    theme: "Topic: Biotechnology",
    runningAtRegionals: false,
  },
  {
    name: "Digital Video Production",
    teamSize: "1-6",
    description:
      "Participants develop and submit a digital video and a documentation portfolio (including such items as a storyboard, script, summary of references and sources, and equipment list) that reflects the annual theme. Semifinalists participate in an interview.",
    theme: "Create a short film that includes at least 30 seconds of animation",
    runningAtRegionals: true,
  },
  {
    name: "Dragster Design",
    teamSize: "1",
    description:
      "Participants design, draw, and construct a CO2-powered dragster that adheres to specifications, design and documentation requirements, and the annual theme. Semifinalists compete in a double-elimination race and participate in an interview.",
    theme:
      "Address weights and lengths only; there are no special design challenges.",
    runningAtRegionals: true,
  },
  {
    name: "Drone Challenge (UAV)",
    teamSize: "2-6",
    description:
      "Participants design, build, assemble, document, and test fly an open-source Unmanned Arial Vehicle (UAV) according to the stated annual theme/problem specifications. The required documentation portfolio must include elements such as a photographic log, wiring schematics, and a description of the programming software used. Semifinalists participate in an interview.",
    theme: "Dinosaur Rescue",
    runningAtRegionals: true,
  },
  {
    name: "Engineering Design",
    teamSize: "3-6",
    description:
      "Participants develop a solution to an annual theme that is based on a specific challenge noted by the National Academy of Engineering (NAE) in its compilation of the grand challenges for engineering in the 21st century. The solution will include a documentation portfolio, a display, and a model/prototype. Semifinalists deliver a presentation and participate in an interview.",
    theme: "Manage the nitrogen cycle",
    runningAtRegionals: true,
  },
  {
    name: "Extemporaneous Speech",
    teamSize: "1",
    description:
      "Participants select a technology-related or TSA topic from among three topic cards and prepare and give a three-to-five-minute speech that communicates their knowledge of the chosen topic. The quality of the speech determines advancement to the semifinalist level of competition, for which an identical competition procedure is followed to determine finalists.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Fashion Design and Technology",
    teamSize: "2-4",
    description:
      "To address the annual theme, participants demonstrate expertise in fashion design principles by creating a wearable garment, garment patterns, and a documentation portfolio. Semifinalist teams present their garment designs (worn by team models), discuss the design process with evaluators, and respond to interview questions.",
    theme:
      'Create a prototype of a marching band uniform for a performance with the theme of "Earth, Wind, Fire, Water."  The prototype must include a type of wearable technology. No pyrotechnics or ignitable elements are permitted.',
    runningAtRegionals: true,
  },
  {
    name: "Flight Endurance",
    teamSize: "1",
    description:
      "Participants design, build, fly, and adjust (trim) a rubber-band powered model aircraft to make long endurance flights inside a contained airspace. Documentation (including elements such as attributes of the model design, drawings, and an analysis of the trim modifications), an inspection of the model and the required model flight box, and official times for two flights are aspects of the evaluation",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Forensic Science",
    teamSize: "2",
    description:
      "Participants take a test of basic forensic science to qualify for the semifinal round of competition. Semifinalists examine a mock crime scene and demonstrate their knowledge of forensic science through crime scene analysis, with the findings synthesized in a written report/analysis.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Future Technology Teacher",
    teamSize: "1",
    description:
      "Participants research a developing technology, prepare a video showing an application of the technology in the classroom, and create a lesson plan/activity that features the application and connects to the Standards for Technological and Engineering Literacy (STEL), as well as STEM initiatives and integration. Semifinalists demonstrate the lesson plan and answer questions about their presentation.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Geospatial Technology",
    teamSize: "2-3",
    description:
      "To address the issue presented in an annual theme, participants interpret geospatial data and develop a digital portfolio containing maps, data, and pertinent documentation. Semifinalists defend their projections and visual infographic during a presentation/interview.",
    theme:
      "Identity a disaster threat, natural or otherwise, that may impact your community. Develop an infographic that communicates hazard zones, evacuation routes, and resource distribution.",
    runningAtRegionals: true,
  },
  {
    name: "Manufacturing Prototype",
    teamSize: "2-6",
    description:
      'Participants design, fabricate, and use Computer Integrated Manufacturing (CIM) to create a product that addresses the annual theme. A documentation portfolio and the completed product prototype are submitted for evaluation. Semifinalists give a product "sales pitch" and demonstration.',
    theme:
      "An item that can be used as picture frames for a home or office while also serving another purpose",
    runningAtRegionals: true,
  },
  {
    name: "Music Production",
    teamSize: "1-6",
    description:
      "Participants produce an original musical piece designed to be played during the closing session of the national TSA conference. The quality of the musical piece and required documentation (including elements such as a plan of work, self-evaluation, and a list of hardware, software, and instruments used) determines advancement to the semifinal level of competition, during which semifinalist participants are interviewed.",
    theme:
      "Create a musical piece that will be used as the background music for a role-playing game (RPG) video game. It will be played during the parts of the game when the player's character is visiting the blacksmith.",
    runningAtRegionals: true,
  },
  {
    name: "On Demand Video",
    teamSize: "2-6",
    description:
      "Once participants receive the challenge details (required criteria, such as props and a line of dialogue) at the national TSA conference, they have 36 hours to produce a 60-second film that showcases video skills, tools, and communication processes. The quality of the completed video production determines the finalists.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Photographic Technology",
    teamSize: "1",
    description:
      "Participants produce a photographic portfolio - demonstrating expertise in photo and imaging technology processes - to convey a message based on the annual theme. Semifinalists have 24 hours to complete a portfolio of photos (with required documentation) taken onsite at the national TSA conference. Finalists are determined based on the quality of the semifinal portfolio, the portfolio presentation, and interview responses.",
    theme:
      "Using five photographs, tell a story about your journey in TSA. The type of photo (color, black and white, macro, still life, and student choice) should add to the impact of the story you are sharing.",
    runningAtRegionals: true,
  },
  {
    name: "Prepared Presentation",
    teamSize: "1",
    description:
      "Participants deliver a three-to-five-minute oral presentation related to the current national TSA conference theme. Both semifinalists and finalists are determined based on the quality of the presentation and the appropriate use and content of the accompanying required slide deck.",
    theme:
      "Develop a presentation that highlights the field of digital music production, including the timeline of its origin, development, fruition, and release of the technology on a global scale.",
    runningAtRegionals: true,
  },
  {
    name: "Promotional Design",
    teamSize: "1",
    description:
      "Participants use computerized graphic communications layout and design skills to produce a promotional resource packet. The resource must address the annual theme/problem and include at least four printed publication items and required documentation. Semifinalists demonstrate publishing competency in an onsite technical design challenge.",
    theme:
      "Branding materials for a fictitious restaurant; the four (4) Promotional Folder items are student choice.",
    runningAtRegionals: true,
  },
  {
    name: "Robotics",
    teamSize: "2-6",
    description:
      "Participants design, build, document, and test a robot assembled using open-sourced parts according to stated specifications and to meet the challenge of the yearly theme/problem.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Senior Solar Sprint",
    teamSize: "2-4",
    description:
      "The Senior Solar Sprint (SSS) competition is managed by TSA. Students apply scientific understanding, creativity, experimentation, and teamwork to design, build, and race a model solar vehicle that carries a payload; documentation of the process is required. Students must register via an Army Educational Outreach Program (AEOP) portal to participate and begin the SSS journey.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Software Development",
    teamSize: "2-6",
    description:
      "Participants use their knowledge of cutting-edge technologies, algorithm design, problem-solving principles, effective communication, and collaboration to design, implement, test, document, and present a software development project of educational or social value. Both semifinalists and finalists are determined based on the quality of the presentation and project.",
    theme:
      "Develop a program that enhances the environment and/or agriculture to be more sustainable and efficient.",
    runningAtRegionals: false,
  },
  {
    name: "STEM Mass Media",
    teamSize: "2-3",
    description:
      "In response to an annual theme, participants use written and verbal communication skills to convey a news story in both a video broadcast (preliminary round) and a digital written format (semifinal round). Participants must demonstrate a strong understanding of journalism etiquette and the common practices of the field of mass media.",
    theme:
      "Brain-computer interfaces (BCIs) are advanced technologies that enable direct communication between the brain and computers. Using electrodes placed on the scalp, BCIs detect brain signals that are then translated into commands for computers. These signals can control various applications, from typing messages to playing video games, solely through thought. BCIs have practical applications beyond entertainment; they assist individuals with disabilities by allowing them to operate prosthetic limbs or communicate when speech is impaired. BCIs represent a remarkable intersection of neuroscience and computer science, offering promising solutions for both medical and technological advancements. Based on the following headline (link below), develop a news broadcast that includes an introduction of the headline, a summary of the information in the news story, and an explanation of potential future implications of the highlighted work. https://www.eurekalert.org/news-releases/1039721",
    runningAtRegionals: false,
  },
  {
    name: "Structural Design and Engineering",
    teamSize: "2",
    description:
      "Participants apply the principles of structural engineering to design and construct a structure that complies with the annual challenge. An assessment of the required documentation and the destructive testing of the structure (to determine its design efficiency) determine both semifinalists and finalists.",
    theme:
      "Problem Statement (https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2024-2025/2025-structural-design-and-engineering-problem-statement.pdf?sfvrsn=8e72e908_7) Verification Form (https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2024-2025/hs-structural-verification-form.pdf?sfvrsn=dfee5b2b_1)",
    runningAtRegionals: true,
  },
  {
    name: "System Control Technology",
    teamSize: "3",
    description:
      "Participants develop a solution to a problem (typically one from an industrial setting) presented onsite at the conference. They analyze the problem, build a computer-controlled mechanical model, program the model, demonstrate the programming and mechanical features of the model-solution in an interview, and provide instructions for evaluators to operate the model.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Technology Bowl",
    teamSize: "3",
    description:
      "Participants demonstrate their knowledge of TSA and concepts addressed in technology content standards by completing an objective test. Semifinalist teams participate in a question/response, head-to-head, team competition.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Technology Problem Solving",
    teamSize: "2",
    description:
      "Participants use problem-solving skills to design and construct a finite solution to a challenge provided onsite at the conference. Solutions are evaluated at the end of 90 minutes using measures appropriate to the challenge, such as elapsed time, horizontal or vertical distance, and/or strength.",
    theme: "Food trucks",
    runningAtRegionals: true,
  },
  {
    name: "Transportation Modeling",
    teamSize: "1",
    description:
      "Participants research, design, and produce a scale model of a vehicle that complies with the annual design problem. A display for the model and a documentation portfolio – containing elements such as a description of the vehicle, photographs and commentary detailing the vehicle production, and technical illustrations – are required. Semifinalists participate in an interview.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "Video Game Design",
    teamSize: "2-6",
    description:
      "Participants design, build, and launch an E-rated online video game – with accompanying required documentation - that addresses the annual theme. Semifinalists participate in an interview to demonstrate the knowledge and expertise they gained during the development of the game.",
    theme:
      "Kid's game, 2 to 4 players, playable on one (1) screen and one (1) keyboard at a time",
    runningAtRegionals: true,
  },
  {
    name: "Virtual Reality Visualization (VR)",
    teamSize: "1-6",
    description:
      "Participants use video and 3D computer graphics tools and design processes to create a two-to-three-minute VR visualization (accompanied by supporting documentation) that addresses the annual theme. Semifinalists deliver a presentation about their visualization and participate in an interview.",
    theme:
      "Create a virtual reality (VR) simulation of a family vacation destination that includes experiences and activities that appeal to both young children and teenagers.",
    runningAtRegionals: false,
  },
  {
    name: "Webmaster",
    teamSize: "3-5",
    description:
      "Participants design, build, and launch a website that addresses the annual challenge. Semifinalists participate in an interview to demonstrate the knowledge and expertise gained during the development of the website.",
    theme:
      "Topic: A restaurant (dine-in and carry-out) that specializes in vegetarian food Challenge: Design a website for a vegan/vegetarian restaurant. Showcase the restaurant's approach (such as farm-to-table, preparation processes, and sustainability) to the food served in the restaurant.",
    runningAtRegionals: true,
  },
  {
    name: "PA - Battling Bots",
    teamSize: "2-6",
    description:
      "Students will design and build remote-controlled robots (Bots) to face off in a gladiator-style competition. Through the manufacturing process of Bot building, students' imaginations are captured as they design, build, and compete with their robotic creations. Through this hands-on effort, students gain practical knowledge of Science, Technology, Engineering, and Math (STEM), all essential skills for manufacturing careers.",
    theme: "",
    runningAtRegionals: false,
  },
  {
    name: "PA - Cybersecurity",
    teamSize: "2-6",
    description:
      'Applying leadership and 21st-century skills, participants respond to a cybersecurity challenge by identifying a breach in computer security via "Capture the Flag" games. Areas of challenge might include exploit development, digital puzzles, cryptography, reverse engineering, binary analysis, mobile security, etc. Participants must accurately address a series of on-site problems within a specified, limited amount of time.',
    theme: "",
    runningAtRegionals: false,
  },
  {
    name: "PA - Logo Design",
    teamSize: "1",
    description:
      "Screen-printing utilizes an area of screen mesh blocked off with a non-permeable material to form a stencil creating a negative of the image to be printed; that is, the open spaces are where the ink will appear when printed. Transfers and Direct to Garment (DTG) printing IS NOT PERMITTED. This contest requires the student to create promotional logo designs to be utilized for the next year's PA-TSA T-shirt, PA-TSA State Conference program, and the PA-TSA website banner. The Middle School or High School winner will be chosen to have the designs appear on all PA- TSA State Conference publications (website, mailings, programs, etc.). The State Conference PA-TSA Logo Design contest is designed to demonstrate design, layout, production, and presentation skills of Visual Communications with a primary focus on the screen-printing process.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "PA - Materials Process",
    teamSize: "1",
    description:
      "TSA contestants entering the Materials Processes contest are required to submit drawings and photographs of a project that they have constructed during the school year. The purpose of the Materials Processes contest is to provide a means for TSA members to demonstrate their ability to fabricate a project or product.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "PA - Medical Technology",
    teamSize: "2-6",
    description:
      "Participants conduct research on a contemporary medical technology issue of their choosing, document their research and solution, and create a digital scientific poster. The entry may include student research or a re-creation or simulation of research performed by the scientific community. There is no semifinal portion to this event, all entries (consisting of a documentation portfolio and 8.5 inches x 11 inches digital scientific poster) will be early-submission only.",
    theme: "",
    runningAtRegionals: false,
  },
  {
    name: "PA - Pin Design",
    teamSize: "1",
    description:
      "The PA-TSA Pin Design contest is intended for competitors to design a visually captivating and communicative pin that embodies the spirit and values of PA-TSA. Participants will have the chance to explore the world of visual communication, where symbols, colors, and design play a pivotal role in conveying a message. The purpose of the PA-TSA pin is to raise funds for the American Cancer Society, promote PA-TSA at Pin Trading at the National Conference, and boost PA-TSA pride.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "PA - R/C Off-Road Racing",
    teamSize: "3",
    description:
      "The R/C Off-Road Racing competition is designed to promote teamwork and problem-solving among students as they acquire the technical skills to adapt, operate, race, and maintain a radio-controlled off-road racing vehicle that will also perform a task while racing around the track. Points earned for the portfolio contents, the appearance of the vehicle body and piece for the task, drawing(s) for the task, and racing results will determine each team's evaluation. The task will change from year to year. The task and the specifications will be included in a separate document each year.",
    theme: "",
    runningAtRegionals: true,
  },
  {
    name: "PA - Robotics",
    teamSize: "2-4",
    description:
      "Students will design, build, test, and demonstrate a remote-controlled robot and necessary accessories in order to carry out a specific challenge. This event is not platform-specific.",
    theme: "",
    runningAtRegionals: false,
  },
  {
    name: "PA - Safety Illustration",
    teamSize: "1",
    description:
      "The Safety Illustration event is designed to encourage members' attention to the promotion of safety and safety practices when using any form of technology. The purpose of the Safety Illustration event is to provide a means for TSA members to demonstrate their ability to recognize safety needs and safety practices when using all forms of technology, traditional or high-tech.",
    theme: "",
    runningAtRegionals: true,
  },
];

const eventRecommendations = {
  middleSchool: {
    primaryInterest: {
      building: [
        "Construction Challenge",
        "Structural Engineering",
        "Off The Grid",
        "Flight",
        "Dragster",
      ],
      coding: [
        "Coding",
        "Cybersecurity",
        "Video Game Design",
        "Website Design",
        "Microcontroller Design",
      ],
      design: [
        "CAD Foundations",
        "Digital Photography",
        "PA-Logo Design",
        "Promotional Marketing",
        "Website Design",
      ],
      research: [
        "Biotechnology",
        "Medical Technology",
        "Forensic Technology",
        "Essays on Technology",
        "Data Science and Analytics",
      ],
      presentation: [
        "Prepared Speech",
        "Chapter Team",
        "Career Prep",
        "Challenging Technology Issues",
        "Leadership Strategies",
      ],
    },
    workStyle: {
      individual: [
        "CAD Foundations",
        "Career Prep",
        "Digital Photography",
        "Dragster",
        "Essays on Technology",
        "Flight",
        "PA-Logo Design",
        "PA-Safety Illustration",
        "Prepared Speech",
      ],
      team: [
        "Biotechnology",
        "Challenging Technology Issues",
        "Chapter Team",
        "Children's Stories",
        "Coding",
        "Community Service Video",
        "Construction Challenge",
        "Inventions and Innovations",
        "Junior Solar Sprint",
      ],
      both: [
        "Data Science and Analytics",
        "Electrical Applications",
        "Forensic Technology",
        "Mass Production",
        "Mechanical Engineering",
        "Medical Technology",
        "Microcontroller Design",
        "Off The Grid",
        "Problem Solving",
      ],
    },
    challenge: {
      technical: [
        "Coding",
        "Cybersecurity",
        "Electrical Applications",
        "Flight",
        "Mechanical Engineering",
        "Microcontroller Design",
        "Robotics",
        "Structural Engineering",
        "Tech Bowl",
      ],
      creative: [
        "Children's Stories",
        "Digital Photography",
        "PA-Logo Design",
        "Promotional Marketing",
        "STEM Animation",
        "Video Game Design",
        "Website Design",
      ],
      analytical: [
        "Data Science and Analytics",
        "Essays on Technology",
        "Forensic Technology",
        "Geospatial Technology",
        "Medical Technology",
        "Problem Solving",
      ],
      "hands-on": [
        "Construction Challenge",
        "Dragster",
        "Flight",
        "Junior Solar Sprint",
        "Manufacturing Prototype",
        "PA - Battling Bots",
        "PA-Materials Processes",
        "PA - R/C Off-Road Racing",
      ],
    },
  },
  highSchool: {
    primaryInterest: {
      building: [
        "Architectural Design",
        "Engineering Design",
        "Flight Endurance",
        "Manufacturing Prototype",
        "Structural Design",
      ],
      coding: [
        "Coding",
        "Cybersecurity",
        "Software Development",
        "Video Game Design",
        "Webmaster",
      ],
      design: [
        "Animatronics",
        "Architectural Design",
        "Fashion Design and Technology",
        "Photographic Technology",
        "Video Game Design",
      ],
      research: [
        "Biotechnology Design",
        "Data Science and Analytics",
        "Debating Technological Issues",
        "Future Technology Teacher",
        "Scientific Visualization",
      ],
      presentation: [
        "Chapter Team",
        "Extemporaneous Speech",
        "Prepared Presentation",
        "Promotional Design",
        "Technology Bowl",
      ],
    },
    workStyle: {
      individual: [
        "CAD, Architecture",
        "CAD, Engineering",
        "Extemporaneous Speech",
        "Flight Endurance",
        "Photographic Technology",
      ],
      team: [
        "Animatronics",
        "Chapter Team",
        "Engineering Design",
        "On Demand Video",
        "Webmaster",
      ],
      both: [
        "Biotechnology Design",
        "Coding",
        "Data Science and Analytics",
        "Fashion Design and Technology",
        "Video Game Design",
      ],
    },
    challenge: {
      technical: [
        "Coding",
        "Cybersecurity",
        "Engineering Design",
        "Structural Design",
        "Technology Problem Solving",
      ],
      creative: [
        "Animatronics",
        "Digital Video Production",
        "Fashion Design and Technology",
        "Music Production",
        "Video Game Design",
      ],
      analytical: [
        "Biotechnology Design",
        "Data Science and Analytics",
        "Debating Technological Issues",
        "Essays on Technology",
        "Future Technology Teacher",
      ],
      "hands-on": [
        "Architectural Design",
        "Flight Endurance",
        "Manufacturing Prototype",
        "Robotics",
        "Technology Problem Solving",
      ],
    },
  },
};

// Complete Events (not full functional)
/*
const eventRecommendations = {
  middleSchool: {
    primaryInterest: {
      building: [
        "Construction Challenge",
        "Structural Engineering",
        "Off The Grid",
        "Flight",
        "Dragster",
        "Junior Solar Sprint",
        "Mechanical Engineering",
        "Mass Production",
        "PA - Battling Bots",
        "PA-Delta Dart/Sky Eagle",
        "PA- R/C Off Road Racing",
        "PA - Robotics"
      ],
      coding: [
        "Coding",
        "Cybersecurity",
        "Video Game Design",
        "Website Design",
        "Microcontroller Design",
        "System Control Technology"
      ],
      design: [
        "CAD Foundations",
        "Digital Photography",
        "PA-Logo Design",
        "Promotional Marketing",
        "Website Design",
        "Inventions and Innovations",
        "STEM Animation",
        "PA-Pin Design",
        "PA-Safety Illustration",
        "PA-Snapshot"
      ],
      research: [
        "Biotechnology",
        "Medical Technology",
        "Forensic Technology",
        "Essays on Technology",
        "Data Science and Analytics",
        "Inventions and Innovations",
        "Electrical Applications",
        "Tech Bowl"
      ],
      presentation: [
        "Prepared Speech",
        "Chapter Team",
        "Career Prep",
        "Challenging Technology Issues",
        "Leadership Strategies",
        "Community Service Video",
        "Vlogging",
        "PA-Digital Video Challenge"
      ],
    },
    workStyle: {
      individual: [
        "CAD Foundations",
        "Career Prep",
        "Digital Photography",
        "Dragster",
        "Essays on Technology",
        "Flight",
        "PA-Logo Design",
        "PA-Safety Illustration",
        "Prepared Speech",
        "Cybersecurity",
        "PA-Delta Dart/Sky Eagle",
        "PA-Materials Processes",
        "PA-Pin Design",
        "PA-Snapshot"
      ],
      team: [
        "Biotechnology",
        "Challenging Technology Issues",
        "Chapter Team",
        "Children's Stories",
        "Coding",
        "Community Service Video",
        "Construction Challenge",
        "Inventions and Innovations",
        "Junior Solar Sprint",
        "Leadership Strategies",
        "Mass Production",
        "Structural Engineering",
        "System Control Technology",
        "Tech Bowl",
        "Website Design",
        "PA - Battling Bots",
        "PA-Digital Video Challenge",
        "PA- R/C Off Road Racing",
        "PA - Robotics"
      ],
      both: [
        "Data Science and Analytics",
        "Electrical Applications",
        "Forensic Technology",
        "Mass Production",
        "Mechanical Engineering",
        "Medical Technology",
        "Microcontroller Design",
        "Off The Grid",
        "Problem Solving",
        "Promotional Marketing",
        "STEM Animation",
        "Technical Design",
        "Video Game Design",
        "Vlogging"
      ],
    },
    challenge: {
      technical: [
        "Coding",
        "Cybersecurity",
        "Electrical Applications",
        "Flight",
        "Mechanical Engineering",
        "Microcontroller Design",
        "Robotics",
        "Structural Engineering",
        "Tech Bowl",
        "System Control Technology",
        "PA - Battling Bots",
        "PA- R/C Off Road Racing",
        "PA - Robotics"
      ],
      creative: [
        "Children's Stories",
        "Digital Photography",
        "PA-Logo Design",
        "Promotional Marketing",
        "STEM Animation",
        "Video Game Design",
        "Website Design",
        "Inventions and Innovations",
        "Off The Grid",
        "Vlogging",
        "PA-Digital Video Challenge",
        "PA-Pin Design",
        "PA-Safety Illustration",
        "PA-Snapshot"
      ],
      analytical: [
        "Data Science and Analytics",
        "Essays on Technology",
        "Forensic Technology",
        "Medical Technology",
        "Problem Solving",
        "Biotechnology",
        "Challenging Technology Issues",
        "Tech Bowl",
        "Technical Design"
      ],
      "hands-on": [
        "Construction Challenge",
        "Dragster",
        "Flight",
        "Junior Solar Sprint",
        "Mass Production",
        "PA - Battling Bots",
        "PA-Materials Processes",
        "PA - R/C Off-Road Racing",
        "Structural Engineering",
        "Mechanical Engineering",
        "Microcontroller Design",
        "PA-Delta Dart/Sky Eagle",
        "PA - Robotics"
      ],
    },
  },
  highSchool: {
    primaryInterest: {
      building: [
        "Architectural Design",
        "Engineering Design",
        "Flight Endurance",
        "Manufacturing Prototype",
        "Structural Design and Engineering",
        "Animatronics",
        "Drone Challenge (UAV)",
        "PA - Battling Bots",
        "PA - R/C Off-Road Racing",
        "PA - Robotics",
        "Senior Solar Sprint",
        "PA - Materials Process"
      ],
      coding: [
        "Coding",
        "Cybersecurity",
        "Software Development",
        "Video Game Design",
        "Webmaster",
        "Computer-Aided Design (CAD), Architecture",
        "Computer-Aided Design (CAD), Engineering",
        "PA - Cybersecurity"
      ],
      design: [
        "Animatronics",
        "Architectural Design",
        "Fashion Design and Technology",
        "Photographic Technology",
        "Video Game Design",
        "Board Game Design",
        "Children's Stories",
        "Promotional Design",
        "Transportation Modeling",
        "PA - Logo Design",
        "PA - Pin Design",
        "PA - Safety Illustration"
      ],
      research: [
        "Biotechnology Design",
        "Data Science and Analytics",
        "Debating Technological Issues",
        "Future Technology Teacher",
        "Geospatial Technology",
        "PA - Medical Technology",
        "Essays on Technology",
        "Forensic Science"
      ],
      presentation: [
        "Chapter Team",
        "Extemporaneous Speech",
        "Prepared Presentation",
        "Promotional Design",
        "Technology Bowl",
        "Audio Podcasting",
        "Children's Stories",
        "Debating Technological Issues",
        "Digital Video Production",
        "Future Technology Teacher",
        "On Demand Video",
        "STEM Mass Media"
      ],
    },
    workStyle: {
      individual: [
        "CAD, Architecture",
        "CAD, Engineering",
        "Extemporaneous Speech",
        "Flight Endurance",
        "Photographic Technology",
        "Essays on Technology",
        "Future Technology Teacher",
        "PA - Logo Design",
        "PA - Materials Process",
        "PA - Pin Design",
        "PA - Safety Illustration",
        "Prepared Presentation",
        "Promotional Design",
        "Transportation Modeling"
      ],
      team: [
        "Animatronics",
        "Chapter Team",
        "Engineering Design",
        "On Demand Video",
        "Webmaster",
        "Audio Podcasting",
        "Debating Technological Issues",
        "PA - Battling Bots",
        "PA - R/C Off-Road Racing",
        "PA - Robotics",
        "Senior Solar Sprint",
        "System Control Technology",
        "Technology Bowl"
      ],
      both: [
        "Biotechnology Design",
        "Coding",
        "Data Science and Analytics",
        "Fashion Design and Technology",
        "Video Game Design",
        "Architectural Design",
        "Board Game Design",
        "Children's Stories",
        "Digital Video Production",
        "Drone Challenge (UAV)",
        "Forensic Science",
        "Geospatial Technology",
        "Manufacturing Prototype",
        "Music Production",
        "PA - Cybersecurity",
        "PA - Medical Technology",
        "Software Development",
        "STEM Mass Media",
        "Structural Design and Engineering",
        "Technology Problem Solving",
        "Virtual Reality Visualization (VR)"
      ],
    },
    challenge: {
      technical: [
        "Coding",
        "Cybersecurity",
        "Engineering Design",
        "Structural Design and Engineering",
        "Technology Problem Solving",
        "Computer-Aided Design (CAD), Architecture",
        "Computer-Aided Design (CAD), Engineering",
        "Drone Challenge (UAV)",
        "Flight Endurance",
        "Geospatial Technology",
        "PA - Battling Bots",
        "PA - Cybersecurity",
        "PA - R/C Off-Road Racing",
        "PA - Robotics",
        "Senior Solar Sprint",
        "Software Development",
        "System Control Technology",
        "Technology Bowl"
      ],
      creative: [
        "Animatronics",
        "Digital Video Production",
        "Fashion Design and Technology",
        "Music Production",
        "Video Game Design",
        "Architectural Design",
        "Audio Podcasting",
        "Board Game Design",
        "Children's Stories",
        "On Demand Video",
        "PA - Logo Design",
        "PA - Pin Design",
        "PA - Safety Illustration",
        "Photographic Technology",
        "Promotional Design",
        "STEM Mass Media",
        "Transportation Modeling",
        "Virtual Reality Visualization (VR)",
        "Webmaster"
      ],
      analytical: [
        "Biotechnology Design",
        "Data Science and Analytics",
        "Debating Technological Issues",
        "Essays on Technology",
        "Future Technology Teacher",
        "Extemporaneous Speech",
        "Forensic Science",
        "Geospatial Technology",
        "PA - Cybersecurity",
        "PA - Medical Technology",
        "Prepared Presentation",
        "Technology Bowl"
      ],
      "hands-on": [
        "Architectural Design",
        "Flight Endurance",
        "Manufacturing Prototype",
        "Robotics",
        "Technology Problem Solving",
        "Animatronics",
        "Drone Challenge (UAV)",
        "Fashion Design and Technology",
        "PA - Battling Bots",
        "PA - Materials Process",
        "PA - R/C Off-Road Racing",
        "PA - Robotics",
        "Senior Solar Sprint",
        "Structural Design and Engineering",
        "System Control Technology"
      ],
    },
  },
};
*/

function getRecommendedEvents(answers, isHighSchool) {
  console.log("Starting getRecommendedEvents with answers:", answers);

  let eventScores = {};
  const events = isHighSchool ? highSchoolEvents : middleSchoolEvents;
  const recommendations = isHighSchool
    ? eventRecommendations.highSchool
    : eventRecommendations.middleSchool;

  // Initializes scores for all events to 0
  events.forEach((event) => {
    eventScores[event.name] = 0;
  });

  // Adds scores based on answers
  Object.entries(answers).forEach(([question, answer]) => {
    if (recommendations[question] && recommendations[question][answer]) {
      const relevantEvents = recommendations[question][answer];
      relevantEvents.forEach((eventName) => {
        eventScores[eventName] = (eventScores[eventName] || 0) + 1;
      });
    }
  });

  console.log("Event scores:", eventScores);

  // Sorts events by score and add some randomization for tied scores
  const sortedEvents = events
    .map((event) => ({
      ...event,
      score: eventScores[event.name] || 0,
    }))
    .sort((a, b) => {
      const scoreDiff = b.score - a.score;
      if (scoreDiff !== 0) return scoreDiff;
      return Math.random() - 0.5; // Adds randomness for events with the same score
    });

  console.log("Sorted events:", sortedEvents);

  // Returns top 5 events
  return sortedEvents.slice(0, 5);
}

export default function Results() {
  const searchParams = useSearchParams();
  const [recommendedEvents, setRecommendedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isHighSchool, setIsHighSchool] = useState(false);

  useEffect(() => {
    try {
      const answers = Object.fromEntries(searchParams.entries());
      console.log("Answers:", answers);
      const recommendations = getRecommendedEvents(answers, isHighSchool);
      console.log("Recommendations:", recommendations);
      setRecommendedEvents(recommendations);
    } catch (err) {
      console.error("Error in getRecommendedEvents:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [searchParams, isHighSchool]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-destructive">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Tabs
        defaultValue="middle"
        className="w-full max-w-4xl mb-4"
        onValueChange={(value) => setIsHighSchool(value === "high")}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="middle">Middle School</TabsTrigger>
          <TabsTrigger value="high">High School</TabsTrigger>
        </TabsList>
      </Tabs>
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Your Recommended TSA Events
          </CardTitle>
          <CardDescription className="text-center">
            Based on your interests and preferences, we recommend the following
            events:
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-center">Loading recommendations...</p>
          ) : recommendedEvents.length === 0 ? (
            <p className="text-center">
              No recommendations found. Please try again.
            </p>
          ) : (
            recommendedEvents.map((event) => (
              <Card key={event.name} className="mb-4">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center justify-between">
                    {event.name}
                    {!event.runningAtRegionals && (
                      <Badge variant="outline" className="ml-2">
                        Not running at Regionals
                      </Badge>
                    )}
                  </CardTitle>
                  <CardDescription>Team Size: {event.teamSize}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">
                    <strong>Description: </strong>
                    {event.description}
                  </p>
                  {event.theme && (
                    <p className="mt-2">
                      <strong>Theme:</strong> {event.theme}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))
          )}
          <div className="mt-8 text-center">
            <Link href="/">
              <Button variant="secondary">Take the Quiz Again</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
