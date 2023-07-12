
// @TODO: #23 refactor ExpDetails props
export interface ExperienceDetails {
  title: string,
  location?: string,
  startMonth?: string,
  startYear?: number,
  endMonth?: string,
  endYear?: number,
  job?: string,
  details: Array<string>
}

/* 
WORK & LEADERSHIP EXPERIENCES

Prefix: wl_
*/


const wl_lsec: ExperienceDetails = {
  title: "Luddy School of Informatics, Computing, and Engineering @ IU",
  location: "Bloomington, IN",
  job: "Student Engagement & Outreach Intern",
  startMonth: "September",
  startYear: 2020,
  endMonth: "July",
  endYear: 2023,
  details:
    [
      "Collaborated with a student-led committee to enhance student engagement and promote success throughout Luddy by organizing various events and opportunities for networking and involvement.",
      "Coordinated and managed events with 200+ students and families in attendance.",
      "Led the student outreach division of the Luddy Student Engagement.",
      "Directed and managed Luddy Saturdays, a fun youth outreach program designed to introduce students to tech through block-based programming and encouragement from mentors.",
      "Engaged Luddy students in community service by recruiting them to volunteer in outreach events across Monroe County.",
      "Trained 15+ volunteers on lesson materials and educational tools to ensure excellent performance at our events.",
      "Served and impacted the lives of 70+ students and families from 1st to 7th grade within the Bloomington community."
    ]
}

const wl_bcf: ExperienceDetails = {
  title: "BCForward",
  location: "Carmel, IN",
  job: "Software Engineering Intern, TechPoint Xtern",
  startMonth: "May",
  startYear: 2022,
  endMonth: "August",
  endYear: 2022,
  details: [
    "Collaborated remotely with a 7-person team to develop the Indiana Prosecutor Case Management System website.",
    "Engaged in professional development, civic engagement, and networking events as a TechPoint Xtern.",
    "Implemented quality-of-life features that effectively reduced customer service requests by hundreds, enhancing overall user and developer experiences.",
    "Utilized React/Node.js for frontend development, PHP for backend development, and MySQL databases for seamless integration."
  ]
}

const wl_lilly: ExperienceDetails = {
  title:"Eli Lilly & Company",
  location:"Indianapolis, IN",
  job:"Tech@Lilly Software Product Engineering, Web Developer",
  startMonth:"July",
  startYear: 2023,
  endMonth: "Ongoing",
  details: [
    "Details pending."
  ]
}

export const workExperiences = [wl_lilly, wl_bcf, wl_lsec]

/* 
SELECTED PROJECTS

Prefix: pr_
*/

const pr_website: ExperienceDetails = {
  title: "Personal Website",
  startMonth: "September",
  startYear: 2022,
  endMonth: "Ongoing",
  details: [
    "Continuously developing a personal website to showcase my education, projects, and personal story.",
    "Implemented a responsive design and key sections such as a project portfolio board and college semester summaries.",
    "Utilized React/Node.js for efficient page loading and component structure and TypeScript for improved code quality."
  ]
}

const pr_altas: ExperienceDetails = {
  title: "ATLAS M-1",
  startMonth: "March",
  startYear: 2022,
  endMonth: "May",
  endYear: 2022,
  details: [
    "Designed a short, immersive video game experience about being stuck on the ocean floor inside a submarine with monsters approaching the vessel",
    "Mixed audio to create an eerie atmosphere, sampling old radios, monster screams, and groaning metal",
    "Programmed necessary systems to allow for eerie atmosphere to engage players, including submarine controls and audio systems",
  ]
}

const pr_cordiall: ExperienceDetails = {
  title: "Cordiall.gg",
  startMonth: "February",
  startYear: 2022,
  endMonth: "May",
  endYear: 2022,
  details: [
    "Designed a robust framework for a website dedicated to delivering comprehensive information on accessibility options available in specific videos, catering specifically to the requirements of disabled individuals and competitive gamers.",
    "Led a team of four students in the design of the Figma prototype, effectively coordinating efforts to ensure the timely achievement of the project's accessibility objectives and deadlines.",
    "Conducted in-depth interviews and rigorous usability tests to gain valuable insights into our target audience's needs, while also validating the efficacy of our design choices."
  ]
}

const pr_brainstorm: ExperienceDetails = {
  title: "Brainstorm",
  startMonth: "September",
  startYear: 2021,
  endMonth: "December",
  endYear: 2021,
  job: "Fullstack Software Engineer",
  details: [
    "Developed a highly interactive web-based learning management system (LMS) application with a strong emphasis on gamified learning to enhance student engagement in grades K-8.",
    "Collaborated with a 4-person student team, employing Agile software development methodology across five two-week sprints to ensure efficient project execution.",
    "Utilized React/Node.js for frontend development, Java Spring Boot for backend development, and PostgreSQL databases for seamless integration."
  ]
}

export const projectExperiences = [pr_website, pr_cordiall, pr_brainstorm]