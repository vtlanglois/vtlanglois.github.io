export interface Year {
    name: string;
    fallSemester: Semester;
    springSemester: Semester;
}

export interface Semester {
    name: string;
    classes: Class[];
}

export interface Class {
    name: string;
    code: string;
    topics?: string[];
    learned?: string[];
    credits: number;
    grade: Grade;
}

type Grade = 'A+' | 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'S' | 'In Progress'