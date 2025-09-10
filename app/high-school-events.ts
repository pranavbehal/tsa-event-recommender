import { TAGS } from "@/lib/tags";

const demoEvent = {
    name: "",
    teamSize: "",
    description: "",
    theme: ``,
    runningAtRegionals: true,
    qualifier: true,
    tags: [] as string[],
}

export const highSchoolEvents = [
    {
        name: "Animatronics",
        teamSize: "2-3",
        description: "To address the annual design challenge, participants exhibit and demonstrate their knowledge of mechanical and control systems by creating an animatronic device with a specific purpose (i.e., communicate an idea, entertain, demonstrate a concept, etc.) that includes sound, lights, and an appropriate surrounding environment (a display).",
        theme: ` "Time Travelers' Museum"

Design Problem: Create an animatronic figure or scene from a key moment in American history. The character should "come to life" to explain their world to a young audience. Designed for a children's museum or educational tour.`,
        runningAtRegionals: false,
        qualifier: false,
        tags: [TAGS.SMALL_TEAM, TAGS.HANDS_ON_BUILDING, TAGS.PROGRAMMING_TECHNOLOGY, TAGS.ROBOTICS, TAGS.ENGINEERING, TAGS.BUILD_PROGRAM_ROBOT, TAGS.BUILDING_DROP_OFF, TAGS.TECHNICAL_SUPPORT],
    },
    {
        name: "Architectural Design",
        teamSize: "1-6",
        description: "In response to the annual design challenge, participants develop a set of architectural plans and related materials, and construct both a physical and computer-generated model to accurately depict their design. Semifinalists deliver a presentation and participate in an interview.",
        theme: `Design Problem available at https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2025-2026/2026-architectural-design-problem.pdf?sfvrsn=4af21af4_1`,
        runningAtRegionals: true,
        qualifier: true,
        tags: [TAGS.LARGE_TEAM, TAGS.DESIGN_CREATIVE, TAGS.HANDS_ON_BUILDING, TAGS.ART_DESIGN, TAGS.ENGINEERING, TAGS.DESIGN_BRAND_MARKETING, TAGS.PRESENTATIONS_ONSITE, TAGS.WORKSHOP_LEADER],
    },
    {
        name: "Audio Podcasting",
        teamSize: "1-6",
        description: "Participants use digital audio technology to create original content for a podcast piece that addresses the annual theme. The podcast must feature high level storytelling techniques, voice acting, and folly sound effects; the full entry must include documentation of the podcast development process and elements. Semifinalists participate in an interview.",
        theme: `Theme: "History or Mystery" Students create an audio podcast that focuses on a real-life or fictitious historical event from the past.`,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.LARGE_TEAM, TAGS.DESIGN_CREATIVE, TAGS.ART_DESIGN, TAGS.WRITE_SHOOT_FILM, TAGS.DIGITAL_EARLY_SUBMISSION, TAGS.DOCUMENTATION_LEAD],
    },
    {
        name: "Biotechnology Design",
        teamSize: "2-6",
        description: "Participants select a contemporary biotechnology problem that addresses the annual theme and demonstrates understanding of the topic through documented research, the development of a solution, a display (including an optional model or prototype), and an effective multimedia presentation. Semifinalists deliver a presentation and participate in an interview.",
        theme: `Topic: Topic: Bioconjugation. Bioconjugation is a biochemical technique that has been applied in various fields, such as medicine, diagnostics, biocatalysis, and materials. From chemical warfare to corrective eye surgery, the applications of bioconjugation are vast. Highlight the science behind bioconjugation and demonstrate one of its many uses.`,
        runningAtRegionals: true,
        qualifier: true,
        tags: [TAGS.LARGE_TEAM, TAGS.RESEARCH_ANALYSIS, TAGS.ENGINEERING, TAGS.RESEARCH_WRITE_REPORT, TAGS.RESEARCH_DOCUMENTATION, TAGS.PRESENTATIONS_ONSITE],
    },
    {
        name: "Board Game Design",
        teamSize: "2-6",
        description: "Participants develop, build, and package a board game that focuses on a subject of their choice. Creative packaging, and the instructions, pieces, and cards associated with the pilot game will be evaluated. Semifinalists set up the game, demonstrate how the game is played, explain the game's features, and discuss the design process.",
        theme: ``,
        runningAtRegionals: true,
        qualifier: true,
        tags: [TAGS.LARGE_TEAM, TAGS.DESIGN_CREATIVE, TAGS.HANDS_ON_BUILDING, TAGS.ART_DESIGN, TAGS.DESIGN_BRAND_MARKETING, TAGS.BUILDING_DROP_OFF, TAGS.WORKSHOP_LEADER],
    },
    {
        name: "Chapter Team",
        teamSize: "6",
        description: "Participants take a parliamentary procedure test to qualify for the semifinal round of competition. Semifinalists conduct an opening ceremony, items of business, parliamentary actions, and a closing ceremony.",
        theme: ``,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.LARGE_TEAM, TAGS.PUBLIC_SPEAKING_PRESENTATIONS, TAGS.LEADERSHIP_PUBLIC_SPEAKING, TAGS.PREPARE_DELIVER_SPEECH, TAGS.TESTS_EXAMS, TAGS.EVENT_COORDINATOR],
    },
    {
        name: "Children's Stories",
        teamSize: "1-6",
        description: "In response to the annual theme, participants create an illustrated children's story of artistic, instructional, and social value, and submit documentation related to the development of the physical storybook. Semifinalists read their story aloud and participate in an interview.",
        theme: `Theme: Students develop and produce a non-fiction, die-cut board book`,
        runningAtRegionals: true,
        qualifier: true,
        tags: [TAGS.LARGE_TEAM, TAGS.DESIGN_CREATIVE, TAGS.ART_DESIGN, TAGS.WRITE_SHOOT_FILM, TAGS.RESEARCH_DOCUMENTATION, TAGS.EVENT_HOST],
    },
    {
        name: "Coding",
        teamSize: "2",
        description: "Participants take a test, which concentrates on aspects of coding, to qualify for the semifinal round of competition. Semifinalists develop a software program – in a designated amount of time – that accurately addresses an onsite problem.",
        theme: `The following programming languages may be used to complete the assigned problems: 

C version C17
C++ version C++20
C# version 8
Java version 21.0
Javascript/Node version 18.19
Python version 3.9
Ruby version 3.2
Rust version 1.75
Swift version 5.10`,
        runningAtRegionals: false,
        qualifier: false,
        tags: [TAGS.SMALL_TEAM, TAGS.PROGRAMMING_TECHNOLOGY, TAGS.COMPUTER_SCIENCE, TAGS.BUILD_PROGRAM_ROBOT, TAGS.TESTS_EXAMS, TAGS.TECHNICAL_SUPPORT],
    },
    {
        name: "Computer-Aided Design (CAD), Architecture",
        teamSize: "1",
        description: "Participants use complex computer graphic skills, tools, and processes to respond to a design challenge in which they develop representations of architectural subjects, such as foundation and/or floor plans, and/or elevation drawings, and/or details of architectural ornamentation or cabinetry. The solution to the design challenge and participant answers in an interview are evaluated.",
        theme: ``,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.INDIVIDUAL, TAGS.DESIGN_CREATIVE, TAGS.PROGRAMMING_TECHNOLOGY, TAGS.ART_DESIGN, TAGS.ENGINEERING, TAGS.DESIGN_BRAND_MARKETING, TAGS.PRESENTATIONS_ONSITE],
    },
    {
        name: "Computer-Aided Design (CAD), Engineering",
        teamSize: "1",
        description: "Participants use complex computer graphic skills, tools, and processes to respond to a design challenge in which they develop three-dimensional representations of engineering subjects, such as a machine part, tool, device, or manufactured product. The solution to the design challenge and participant answers in an interview are evaluated.",
        theme: ``,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.INDIVIDUAL, TAGS.DESIGN_CREATIVE, TAGS.PROGRAMMING_TECHNOLOGY, TAGS.COMPUTER_SCIENCE, TAGS.ENGINEERING, TAGS.DESIGN_BRAND_MARKETING, TAGS.PRESENTATIONS_ONSITE],
    },
    {
        name: "Data Science and Analytics",
        teamSize: "1-2",
        description: "Participants identify a societal issue, collect or compile data from various sources about the issue, and then produce documentation and a digital scientific poster about their findings. Semifinalists create a synopsis and digital visual representation of a data set provided in an onsite challenge.",
        theme: `Theme: Identify and use a "Tourism"- related open-source data set for analysis and research. In the scientific poster, cite the source of the data, including the URL/domain and file format. A Scientific Poster Template is provided at https://tsaweb.org/competitions/themes-and-problems?hspage=1&mspage=2#dl0#dl1`,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.SMALL_TEAM, TAGS.RESEARCH_ANALYSIS, TAGS.COMPUTER_SCIENCE, TAGS.RESEARCH_WRITE_REPORT, TAGS.RESEARCH_DOCUMENTATION, TAGS.PRESENTATIONS_ONSITE],
    },
    {
        name: "Debating Technological Issues",
        teamSize: "2",
        description: "Participants research the annual topic and subtopics and prepare for a debate against a team from another chapter. Teams are instructed to take either the pro or con side of a selected subtopic, submit a summary of references, and use their research to support their assigned position. The quality of a team’s debate determines semifinalists and finalists.",
        theme: `Theme: Artificial Intelligence and Ethics

Subtopic 1: AI decision-making in judicial systems introduces bias and undermines human moral judgment.
Subtopic 2: The development of artificial general intelligence (AGI) poses a greater existential threat than nuclear weapons.
Subtopic 3: AI-generated art and literature diminish the value of human creativity and cultural authenticity.`,
        runningAtRegionals: false,
        qualifier: false,
    },
    {
        name: "Digital Video Production",
        teamSize: "1-6",
        description: "Participants develop and submit a digital video and a documentation portfolio (including such items as a storyboard, script, summary of references and sources, and equipment list) that reflects the annual theme. Semifinalists participate in an interview.",
        theme: `Theme: “A Twist in Time” Create a story that alters a key historical moment—or imagines a character from the past suddenly appearing in the modern day.`,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.LARGE_TEAM, TAGS.DESIGN_CREATIVE, TAGS.ART_DESIGN, TAGS.WRITE_SHOOT_FILM, TAGS.DIGITAL_EARLY_SUBMISSION, TAGS.DOCUMENTATION_LEAD],
    },
    {
        name: "Dragster Design",
        teamSize: "1",
        description: "Participants design, draw, and construct a CO2-powered dragster that adheres to specifications, design and documentation requirements, and the annual theme. Semifinalists compete in a double-elimination race and participate in an interview.",
        theme: `No theme for 2026, see official rules for specifications`,
        runningAtRegionals: true,
        qualifier: true,
        tags: [TAGS.INDIVIDUAL, TAGS.HANDS_ON_BUILDING, TAGS.DESIGN_CREATIVE, TAGS.ENGINEERING, TAGS.DESIGN_BRAND_MARKETING, TAGS.BUILDING_DROP_OFF],
    },
    {
        name: "Drone Challenge (UAV)",
        teamSize: "2-6",
        description: "Participants design, build, assemble, document, and test fly an open-source Unmanned Arial Vehicle (UAV) according to the stated annual theme/problem specifications. The required documentation portfolio must include elements such as a photographic log, wiring schematics, and a description of the programming software used. Semifinalists participate in an interview.",
        theme: `Theme available at https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2025-2026/2026-hs_uav-drone.pdf?sfvrsn=28e74e45_3`,
        runningAtRegionals: false,
        qualifier: false,
    },
    {
        name: "Engineering Design",
        teamSize: "3-6",
        description: "Participants develop a solution to an annual theme that is based on a specific challenge noted by the National Academy of Engineering (NAE) in its compilation of the grand challenges for engineering in the 21st century. The solution will include a documentation portfolio, a display, and a model/prototype. Semifinalists deliver a presentation and participate in an interview.",
        theme: `Theme: Engineering the tools of scientific discovery`,
        runningAtRegionals: true,
        qualifier: true,
    },
    {
        name: "Extemporaneous Speech",
        teamSize: "1",
        description: "Participants select a technology-related or TSA topic from among three topic cards and prepare and give a three-to-five-minute speech that communicates their knowledge of the chosen topic. The quality of the speech determines advancement to the semifinalist level of competition, for which an identical competition procedure is followed to determine finalists.",
        theme: ``,
        runningAtRegionals: true,
        qualifier: true,
    },
    {
        name: "Fashion Design and Technology",
        teamSize: "2-4",
        description: "To address the annual theme, participants demonstrate expertise in fashion design principles by creating a wearable garment, garment patterns, and a documentation portfolio. Semifinalist teams present their garment designs (worn by team models), discuss the design process with evaluators, and respond to interview questions.",
        theme: `Theme: Villain Era with one element of the main garment being 3-D printed.`,
        runningAtRegionals: true,
        qualifier: false,
    },
    {
        name: "Flight Endurance",
        teamSize: "1",
        description: "Participants design, build, fly, and adjust (trim) a rubber-band powered model aircraft to make long endurance flights inside a contained airspace. Documentation (including elements such as attributes of the model design, drawings, and an analysis of the trim modifications), an inspection of the model and the required model flight box, and official times for two flights are aspects of the evaluation",
        theme: ``,
        runningAtRegionals: true,
        qualifier: true,
        tags: [TAGS.INDIVIDUAL, TAGS.HANDS_ON_BUILDING, TAGS.ENGINEERING, TAGS.BUILD_PROGRAM_ROBOT, TAGS.BUILDING_DROP_OFF, TAGS.TECHNICAL_SUPPORT],
    },
    {
        name: "Forensic Science",
        teamSize: "2",
        description: "Participants take a test of basic forensic science to qualify for the semifinal round of competition. Semifinalists examine a mock crime scene and demonstrate their knowledge of forensic science through crime scene analysis, with the findings synthesized in a written report/analysis.",
        theme: ``,
        runningAtRegionals: true,
        qualifier: false,
    },
    {
        name: "Future Technology Teacher",
        teamSize: "1",
        description: "Participants research a developing technology, prepare a video showing an application of the technology in the classroom, and create a lesson plan/activity that features the application and connects to the Standards for Technological and Engineering Literacy (STEL), as well as STEM initiatives and integration. Semifinalists demonstrate the lesson plan and answer questions about their presentation.",
        theme: ``,
        runningAtRegionals: true,
        qualifier: true,
    },
    {
        name: "Geospatial Technology",
        teamSize: "2-3",
        description: "To address the issue presented in an annual theme, participants interpret geospatial data and develop a digital portfolio containing maps, data, and pertinent documentation. Semifinalists defend their projections and visual infographic during a presentation/interview.",
        theme: `Theme: Urban Heat Islands and Cooling Solutions

Identify urban heat island (UHI) hotspots in your area using temperature, vegetation, and land use data. Map areas most affected by heat and propose equitable solutions—such as tree planting zones, reflective surfaces, or community cooling centers—especially in vulnerable neighborhoods.`,
        runningAtRegionals: true,
        qualifier: false,
    },
    {
        name: "Manufacturing Prototype",
        teamSize: "2-6",
        description: "Participants design, fabricate, and use Computer Integrated Manufacturing (CIM) to create a product that addresses the annual theme. A documentation portfolio and the completed product prototype are submitted for evaluation. Semifinalists give a product \"sales pitch\" and demonstration.",
        theme: `Theme: Marble Maze or Puzzle Box`,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.LARGE_TEAM, TAGS.HANDS_ON_BUILDING, TAGS.PROGRAMMING_TECHNOLOGY, TAGS.ENGINEERING, TAGS.BUILD_PROGRAM_ROBOT, TAGS.BUILDING_DROP_OFF, TAGS.WORKSHOP_LEADER],
    },
    {
        name: "Music Production",
        teamSize: "1-6",
        description: "Participants produce an original musical piece that reﬂects the annual theme on the TSA website under Themes & Problems. The quality of the musical piece and required documentation (including elements such as a plan of work, self-evaluation, and a list of hardware, software, and instruments used) determines advancement to the semifinal level of competition, during which semifinalist participants are interviewed.",
        theme: `Theme: The year 2026 marks the 250th birthday of the United States. Create a musical piece that can be played as the opening number at a July 4th fireworks show.`,
        runningAtRegionals: true,
        qualifier: true,
    },
    {
        name: "On Demand Video",
        teamSize: "2-6",
        description: "Once participants receive the challenge details (required criteria, such as props and a line of dialogue) at the national TSA conference, they have 36 hours to produce a 60-second film that showcases video skills, tools, and communication processes. The quality of the completed video production determines the finalists.",
        theme: ``,
        runningAtRegionals: false,
        qualifier: false,
    },
    {
        name: "Photographic Technology",
        teamSize: "1",
        description: "Participants produce a photographic portfolio - demonstrating expertise in photo and imaging technology processes - to convey a message based on the annual theme. Semifinalists have 24 hours to complete a portfolio of photos (with required documentation) taken onsite at the national TSA conference. Finalists are determined based on the quality of the semifinal portfolio, the portfolio presentation, and interview responses.",
        theme: `Theme: Photo Essay Series; Create a series of photos that tell a story`,
        runningAtRegionals: true,
        qualifier: true,
    },
    {
        name: "Prepared Presentation",
        teamSize: "1",
        description: "Participants deliver a three-to-five-minute oral presentation related to the current national TSA conference theme. Both semifinalists and finalists are determined based on the quality of the presentation and the appropriate use and content of the accompanying required slide deck.",
        theme: `Topic: Everyone knows the classic game of rock, paper, scissors: rock beats scissors, scissors beat paper, and paper beats rock. At the end of the day, which is the most revolutionary tool? Develop a presentation in which you select one of these three technologies/tools and describe its impact on human civilization.`,
        runningAtRegionals: true,
        qualifier: true,
        tags: [TAGS.INDIVIDUAL, TAGS.PUBLIC_SPEAKING_PRESENTATIONS, TAGS.LEADERSHIP_PUBLIC_SPEAKING, TAGS.PREPARE_DELIVER_SPEECH, TAGS.PRESENTATIONS_ONSITE, TAGS.EVENT_HOST],
    },
    {
        name: "Promotional Design",
        teamSize: "1",
        description: "Participants use computerized graphic communications layout and design skills to produce a promotional resource packet. The resource must address the annual theme/problem and include at least four printed publication items and required documentation. Semifinalists demonstrate publishing competency in an onsite technical design challenge.",
        theme: `Theme: Create promotional materials for a chapter-hosted event in which TSA alumni return to the chapter to share career stories, run workshops, and mentor students. The promotional items must include: 

an event information flyer
a social media promotional graphic
a name badge template
a promotional item of the participant’s choice
Participants should use the following details in the designs:

Event title: “Back to Impact: TSA Alumni Day Celebration”
Date of event: June 2-4, 2026
Chapter name: Bluewater Heights School of Innovation TSA
School mascot: Jets
Address: 870 Trail Bend Road, Bluewater Heights, MD 21903`,
        runningAtRegionals: true,
        qualifier: true,
    },
    {
        name: "Robotics",
        teamSize: "2-6",
        description: "Participants design, build, document, and test a robot assembled using open-sourced parts according to stated specifications and to meet the challenge of the yearly theme/problem. ",
        theme: `Theme available at https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2025-2026/2026-hs-robotics.pdf?sfvrsn=2849ac4c_1`,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.LARGE_TEAM, TAGS.HANDS_ON_BUILDING, TAGS.PROGRAMMING_TECHNOLOGY, TAGS.ROBOTICS, TAGS.ENGINEERING, TAGS.BUILD_PROGRAM_ROBOT, TAGS.BUILDING_DROP_OFF, TAGS.TECHNICAL_SUPPORT],
    },
    {
        name: "Senior Solar Sprint",
        teamSize: "2-4",
        description: "Students apply scientific understanding, creativity, experimentation, and teamwork to design, build, and race a model solar vehicle that carries a payload. Documentation of the process is required.",
        theme: ``,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.SMALL_TEAM, TAGS.HANDS_ON_BUILDING, TAGS.ENGINEERING, TAGS.BUILD_PROGRAM_ROBOT, TAGS.BUILDING_DROP_OFF, TAGS.TECHNICAL_SUPPORT],
    },
    {
        name: "Software Development",
        teamSize: "2-6",
        description: "Participants use their knowledge of cutting-edge technologies, algorithm design, problem-solving principles, effective communication, and collaboration to design, implement, test, document, and present a software development project of educational or social value. Both semifinalists and finalists are determined based on the quality of the presentation and project.",
        theme: `Develop a software program that removes barriers and increases accessibility for people with vision or hearing disabilities.`,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.LARGE_TEAM, TAGS.PROGRAMMING_TECHNOLOGY, TAGS.COMPUTER_SCIENCE, TAGS.BUILD_PROGRAM_ROBOT, TAGS.DIGITAL_EARLY_SUBMISSION, TAGS.TECHNICAL_SUPPORT],
    },
    {
        name: "STEM Mass Media",
        teamSize: "2-3",
        description: "In response to an annual theme, participants use written and verbal communication skills to convey a news story in both a video broadcast (preliminary round) and a digital written format (semifinal round). Participants must demonstrate a strong understanding of journalism etiquette and the common practices of the field of mass media.",
        theme: `Headline: The green past of the Saharo-Arabian Desert: Cave deposits reveal recurring humid periods over eight million years

Background: A new study led by the Max Planck Institute for Chemistry has uncovered compelling evidence that the Saharo-Arabian Desert—today one of Earth’s driest regions—experienced multiple periods of significantly wetter climate over the past eight million years. Researchers analyzed speleothems, or cave deposits, from seven Saudi Arabian caves and found chemical clues indicating repeated monsoonal rainfall that transformed the desert into a habitable landscape for thousands of years at a time.
These wetter intervals likely enabled the migration of mammals, including early human ancestors, between Africa and Eurasia—despite the desert’s role as a natural barrier. The study highlights the powerful influence of climate change on human and animal history, as well as the importance of cave formations as records of ancient weather patterns. Using isotopic analysis and radiometric dating, the team also discovered that the decline of monsoonal rainfall was caused by long-term cooling in the Northern Hemisphere, which shifted rain belts southward.

Prompt: Based on the following headline, develop a news broadcast that includes an introduction of the headline, a summary of the information in the news story, and an explanation of potential future implications of the highlighted work.
https://www.eurekalert.org/news-releases/1079999`,
        runningAtRegionals: false,
        qualifier: false,
    },
    {
        name: "Structural Design and Engineering",
        teamSize: "2",
        description: "Participants apply the principles of structural engineering to design and construct a structure that complies with the annual challenge. An assessment of the required documentation and the destructive testing of the structure (to determine its design efficiency) determine both semifinalists and finalists.",
        theme: `Problem statement available at: https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2025-2026/2026-hs-structural-design-and-engineering-problem-statement.pdf?sfvrsn=def98886_1.
        
        Verification form available at: https://tsaweb.org/docs/default-source/competitions/themes-and-problems-2025-2026/2026-hs-structural-verification-form.pdf?sfvrsn=fcb8845c_1`,
        runningAtRegionals: true,
        qualifier: true,
    },
    {
        name: "System Control Technology",
        teamSize: "3",
        description: "Participants develop a solution to a problem (typically one from an industrial setting) presented onsite at the conference. They analyze the problem, build a computer-controlled mechanical model, program the model, demonstrate the programming and mechanical features of the model-solution in an interview, and provide instructions for evaluators to operate the model.",
        theme: ``,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.SMALL_TEAM, TAGS.HANDS_ON_BUILDING, TAGS.PROGRAMMING_TECHNOLOGY, TAGS.ROBOTICS, TAGS.ENGINEERING, TAGS.BUILD_PROGRAM_ROBOT, TAGS.PRESENTATIONS_ONSITE, TAGS.TECHNICAL_SUPPORT],
    },
    {
        name: "Technology Bowl",
        teamSize: "3",
        description: "Participants demonstrate their knowledge of TSA and concepts addressed in technology content standards by completing an objective test. Semifinalist teams participate in a question/response, head-to-head, team competition.",
        theme: ``,
        runningAtRegionals: true,
        qualifier: false,
    },
    {
        name: "Technology Problem Solving",
        teamSize: "2",
        description: "Participants use problem-solving skills to design and construct a finite solution to a challenge provided onsite at the conference. Solutions are evaluated at the end of 90 minutes using measures appropriate to the challenge, such as elapsed time, horizontal or vertical distance, and/or strength.",
        theme: ``,
        runningAtRegionals: true,
        qualifier: true,
        tags: [TAGS.SMALL_TEAM, TAGS.HANDS_ON_BUILDING, TAGS.ENGINEERING, TAGS.BUILD_PROGRAM_ROBOT, TAGS.PRESENTATIONS_ONSITE, TAGS.TECHNICAL_SUPPORT],
    },
    {
        name: "Transportation Modeling",
        teamSize: "1",
        description: "Participants research, design, and produce a scale model of a vehicle that complies with the annual design problem. A display for the model and a documentation portfolio – containing elements such as a description of the vehicle, photographs and commentary detailing the vehicle production, and technical illustrations – are required. Semifinalists participate in an interview.",
        theme: `Design Problem: The Sky is Not the Limit- Next-gen space travel. `,
        runningAtRegionals: true,
        qualifier: true,
    },
    {
        name: "Video Game Design",
        teamSize: "2-6",
        description: "Participants design, build, and launch an E-rated online video game – with accompanying required documentation - that addresses the annual theme. Semifinalists participate in an interview to demonstrate the knowledge and expertise they gained during the development of the game.",
        theme: `Theme: Retro Revival: Reimagine an 8-bit or 16-bit era type of game with a modern twist.`,
        runningAtRegionals: true,
        qualifier: false,
        tags: [TAGS.LARGE_TEAM, TAGS.PROGRAMMING_TECHNOLOGY, TAGS.DESIGN_CREATIVE, TAGS.COMPUTER_SCIENCE, TAGS.BUILD_PROGRAM_ROBOT, TAGS.DIGITAL_EARLY_SUBMISSION, TAGS.TECHNICAL_SUPPORT],
    },
    {
        name: "Virtual Reality Simulation (VR)",
        teamSize: "16",
        description: "Participants use video and 3D computer graphics tools and design processes to create a two-to-three-minute VR visualization (accompanied by supporting documentation) that addresses the annual theme. Semifinalists deliver a presentation about their visualization and participate in an interview.",
        theme: `Design Topic: Design an interactive, walk-through VR museum based on a topic in art, history, or technology. 
`,
        runningAtRegionals: false,
        qualifier: false,
    },
    {
        name: "Webmaster",
        teamSize: "2-6",
        description: "Participants design, build, and launch a website that addresses the annual challenge. Semifinalists participate in an interview to demonstrate the knowledge and expertise gained during the development of the website.",
        theme: `Topic: Community Resource Hub

Create a website that will serve as a community resource hub to highlight resources available to residents within the community (e.g., non-profits, support services, community events and programs, etc.). Your website should include the following: 

an interactive directory of community resources (resource hub) that allows users to search and filter the resources. 
a highlight section that spotlights at least three of the community resources you have listed in your resource hub. 
a form that users can submit to indicate new resources that should be added to the community resources hub. 
additional content to enhance the community resource hub for end users.`,
        runningAtRegionals: true,
        qualifier: true,
        tags: [TAGS.LARGE_TEAM, TAGS.PROGRAMMING_TECHNOLOGY, TAGS.DESIGN_CREATIVE, TAGS.COMPUTER_SCIENCE, TAGS.BUILD_PROGRAM_ROBOT, TAGS.DIGITAL_EARLY_SUBMISSION, TAGS.TECHNICAL_SUPPORT],
    }
]