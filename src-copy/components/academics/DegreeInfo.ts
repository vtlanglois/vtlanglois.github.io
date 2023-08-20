import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface Year {
  title: string;
  icon: IconDefinition;
  fallSemester: Semester;
  springSemester: Semester;
}

export interface Semester {
  title: string;
  classes: CollegeClass[];
}

export interface CollegeClass {
  title: string;
  number: string;
  topics?: string[];
  grade: Grade;
}

// Future-Proofing: Keeping "In Progress" in-case I go get a Master's

type Grade = "A+" | "A" | "A-" | "B+" | "B" | "B-" | "S" | "In Progress";


