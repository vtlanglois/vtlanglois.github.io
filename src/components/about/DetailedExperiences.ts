
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


export const wl_lsec: ExperienceDetails = {
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

export const wl_bcf: ExperienceDetails = {
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

/* 
SELECTED PROJECTS

Prefix: pr_
*/

export const pr_website: ExperienceDetails = {
  title: "Personal Website",
  startMonth: "September",
  startYear: 2022,
  endMonth: "Ongoing",
  details: [
    "Working on a personal website to provide more information about myself beyond my LinkedIN profile",
    "Serving as a way to learn more about web development and front-end programming",
    "Developing using React, Typescript, and Reactstrap, hosted on Github Pages",
  ]
}

export const pr_altas: ExperienceDetails = {
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

export const pr_cordiall: ExperienceDetails = {
  title: "Cordiall.gg",
  startMonth: "February",
  startYear: 2022,
  endMonth: "May",
  endYear: 2022,
  details: [
    "Created a framework for a website focused on providing information about accessibility options present in certain videos to aid disabled and competitive gamers and their needs",
    "Led a 4-person team in designing the Figma prototype and ensuring the projects accessibility goals and deadlines were met",
    "Conducted interviews and usability tests to understand the needs of our customers and test our design decisions",
  ]
}

export const pr_brainstorm: ExperienceDetails = {
  title: "Brainstorm",
  startMonth: "September",
  startYear: 2021,
  endMonth: "December",
  endYear: 2021,
  job: "Fullstack Software Engineer",
  details: [
    "Created a learning management system web application focused on increasing K-8th grade student engagement through gamified learning",
    "Collaborated with 4-person team using Agile software development methodology over 5 two-week sprints",
    "Developed using Java Spring Boot, React, and PostgreSQL",
  ]
}