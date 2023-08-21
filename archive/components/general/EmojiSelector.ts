var currentDate = new Date();
var currentMonth = currentDate.getMonth() + 1;
var currentDay = currentDate.getDate();
var currentYear = currentDate.getFullYear();

var splashTexts = [
  "professional bugcatcher",
  "lego aficionado",
  "java enjoyer",
  "git galvanizer",
  "c explorer",
  "python tamer",
  "agile appreciator",
];


export function SelectSplash() {
  return splashTexts[Math.floor(Math.random() * splashTexts.length)];
}

export function GetDate() {
  return currentYear;
}
