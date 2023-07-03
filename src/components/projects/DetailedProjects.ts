
export interface ProjectCardInfo {
    title: string,
    desc: string,
    links: Array<string>,
    topics: Array<string>
}

/**
 * Software Engineering
 * 
 * Prefix: sw_
 */


export const sw_pybot: ProjectCardInfo = {
    title: "PyBot",
    desc: "A chatbot using OpenAI text completion and image generation APIs. Built for Indiana Pacers STEM Fest 2023 to demonstrate generative A.I to local families.",
    links: ["https://github.com/vtlanglois/PyBot"],
    topics: ["Generative A.I.", "Educational Outreach", "Backend Programming"],
}

export const sw_website: ProjectCardInfo = {
    title: "Personal Website",
    desc: "A website built with Typescript and React. Used to highlight my experience, education, and projects, alongside teaching me web development.",
    links: ["https://github.com/vtlanglois/vtlanglois.github.io"],
    topics: ["Web Design", "Frontend Programming"],
}

export const sw_xinu: ProjectCardInfo = {
    title: "Improved Xinu",
    desc: "This is a test 9",
    links: ["AA"],
    topics: ["Operating Systems", "Low-level Programming"],
}

export const sw_gwd: ProjectCardInfo = {
    title: "GWD Resource Repository",
    desc: "A repository of HTML/CSS resources for future outreach events. Built to aid volunteers and give students ideas for their website projects.",
    links: ["https://github.com/vtlanglois/GWD"],
    topics: ["Web Design", "Educational Outreach"]

}

export const swProjects = [sw_pybot, sw_website, sw_gwd]

/**
 * UI/UX Projects
 * 
 * Prefix: ui_
 */
export const ui_cordiall: ProjectCardInfo = {
    title: "Cordiall.gg",
    desc: "An online platform for disabled gamers to find games that suit their specific needs. Designed the framework with accessability and simplicity in mind.",
    links: ["https://www.figma.com/file/uVlfoTeBxFI4tFz5kgeZWA/ID%26C-Prototype?node-id=0%3A1&t=MMOxlEdMeO6acpDZ-1"],
    topics: ["Accessability", "UI/UX Research"],
}

export const ui_websiteredesign: ProjectCardInfo = {
    title: "Website Redesign",
    desc: "A potential redesign for my personal website. Focuses on a consistent theme based on cards. Work in Progress",
    links: ["https://www.figma.com/proto/sGpntXl0XHxCtPcGOHDm4L/Personal-Website?node-id=132-99&scaling=min-zoom&page-id=0%3A1"],
    topics: ["UI Design"]
}

export const ui_cardinal: ProjectCardInfo = {
    title: "Cardinal",
    desc: "This is a test 2",
    links: ["AA"],
    topics: ["Prototyping, Education"]
}

export const uiProjects = [ui_cordiall, ui_websiteredesign];

/**
 * Game Design & Development
 * 
 * Prefix: gd_
 */

export const gd_flockofcats: ProjectCardInfo = {
    title: "Flock of Cats",
    desc: "An arcade game about herding cats from going off-screen. Developed accessability systems and gameplay settings architecture.",
    links: ["https://github.com/vtlanglois/flock-of-cats"],
    topics: ["System Design", "Accessability", "Arts"]
}

export const gd_atlasm1: ProjectCardInfo = {
    title: "ATLAS M-1",
    desc: "A short experience about being in an experimental submarine stuck deep below the ocean. Focused on designing a tense atmosphere through audio design.",
    links: ["https://startcmd.itch.io/atlas-m-1"],
    topics: ["Audio Design", "Playtesting"]
}

export const gdProjects = [gd_flockofcats, gd_atlasm1]

/**
 * Arduino
 * 
 * Prefix: ar_
 */

export const ar_legocontroller = {
    title: "Youtube Controller",
    desc: "A prototype for a YouTube controller designed for young children. Built to be accessible and inviting.",
    links: ["https://github.com/vtlanglois/ArduinoKidController-I341"],
    topics: ["Low-level Programming", "Electronics", "Targeted Design"]
}

export const ar_medflow = {
    title: "Medflow",
    desc: "A prototype for a medicine and water dispenser designed for older adults. Made use of ultrasonic sensors and motors.",
    links: ["https://github.com/vtlanglois/MedicineDispenser"],
    topics: ["Low-level Programming", "Electronics", "Targeted Design"]
}

export const ar_oledDemo = {
    title: "OLED Demo",
    desc: "A showcase of the capabilities of an OLED Screen for Arduino devices. Made for educators and hobbyists.",
    links: ["https://github.com/vtlanglois/OLED-Demo"],
    topics: ["Low-level Programming", "Arts", "Targeted Design"]
}

export const ar_RGBLEDDialSelector = {
    title: "RGB LED Dial Selector",
    desc: "An interactive educational experience built to demonstrate an Arduino's analog and PWD pins for a young audience. Built for developers and educators.",
    links:["https://github.com/vtlanglois/RGB_LED_Dials"],
    topics: ["Low-level Programming", "Electronics", "Education Outreach"]
}

export const ar_simpleDataLogger = {
    title: "Light and Temperature Data Logger",
    desc: "A simple light and temperature data logger. Log data, stores it, then analyses it. Work in Progress. ",
    links: ["https://github.com/vtlanglois/simple_data_logger"],
    topics: ["Data Collection", "Data Analysis", "Electronics"]
}
export const arProjects = [ar_oledDemo, ar_medflow, ar_legocontroller, ar_RGBLEDDialSelector, ar_simpleDataLogger]