
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
  endMonth: "Ongoing",
  details:
    [
      "Collaborate with student-led committee to promote student engagement and success throughout Luddy by creating events and opportunities for students to network and get involved",
      "Coordinate and administer events with 200+ students and participating faculty in attendance",
      "Assist with student organizations for event planning and promotion",
      "Leads student outreach division of the Luddy Student Engagement Committee",
      "Design and develop educational and entertaining computer science lesson plans using block-based programming, virtual worlds, and physical robots",
      "Train and guide volunteers on lesson materials and educational tools to ensure excellent performance at our events",
    ]
}

export const wl_bcf: ExperienceDetails = {
  title: "BCForward",
  location: "Carmel, IN",
  job: "Software Engineering Intern",
  startMonth: "May",
  startYear: 2022,
  endMonth: "August",
  endYear: 2022,
  details: [
    "Worked remotely in a 7-person team developing the Indiana Prosecutor Case Management System",
    "Created quality-of-life features that reduced customer service requests for account-related issues by the hundreds",
    "Developed features using a React frontend, PHP backend, and MySQL databases",
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