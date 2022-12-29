import { Semester } from "./DegreeInfo";

export const fall2019Semester: Semester = {
  title: "Fall 2019",
  classes: [{ title: "Intro to CS Honors", number: "CSCI-H 211", grade: "A" },
  { title: "Tech Leadership and Innovation", number: "INFO-Y 101", grade: "A-" },
  { title: "Intro to Folklore", number: "FOLK-F 101", grade: "A" },
  { title: "Intro To Psyschology", number: "PSY-P 155", grade: "A" },
  { title: "Foundations for Undergrad Success", number: "EDUC-U 215", grade: "A+" }]
};
export const spring2020Semester: Semester = {
  title: "Spring 2020",
  classes: [{ title: "Intro to Software Systems", number: "CSCI-C 212", grade: "A-" },
  { title: "Discrete Structures Honors", number: "CSCI-H 241", grade: "S" },
  { title: "Tech Leadership and Innovation II", number: "INFO-Y 102", grade: "A+" },
  { title: "Classical Mythology", number: "CLAS-C 205", grade: "A" },
  { title: "Intro to Argumentative Writing: Robots", number: "ENG-W 170", grade: "A" }]
};

export const fall2020Semester: Semester = {
  title: "Fall 2020",
  classes: [{ title: "Data Structures", number: "CSCI-C 343", grade: "B+" },
  { title: "Mobile App Development", number: "CSCI-C 323", grade: "A-" },
  { title: "Career Development for CS", number: "CSCI-Y 395", grade: "A" },
  { title: "Intro to Games", number: "MSCH-C 210", grade: "A+" },
  { title: "The Solar System", number: "AST-A 100", grade: "A-" }]
}

export const spring2021Semester: Semester = {
  title: "Spring 2021",
  classes: [{ title: "Object-Oriented Software Methods", number: "CSCI-C 322", grade: "A" },
  { title: "System Programming with C and Unix", number: "CSCI-C 291", grade: "B" },
  { title: "Intro to Statistical Interence", number: "STAT-S 350", grade: "A" },
  { title: "Undergraduate Independent Study", number: "CSCI-Y 390", grade: "A" },
  { title: "Search for Life in the Universe", number: "AST-A 103", grade: "A" }]
}

export const baseSemester: Semester = {
  title: "",
  classes: [{ title: "", number: "", grade: "A-" },
  { title: "", number: "", grade: "S" },
  { title: "", number: "", grade: "A+" },
  { title: "", number: "", grade: "A" },
  { title: "", number: "", grade: "A" }]
}
