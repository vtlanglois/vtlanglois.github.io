var currentDate = new Date();
var currentMonth = currentDate.getMonth()+1;
var currentDay = currentDate.getDate();
var currentYear = currentDate.getFullYear();

var splashTexts = ['professional bugcatcher', 'lego aficionado', 'java enjoyer', 'git galvanizer']

export function SelectEmoji(){

    /**
     * @TODO rewrite this to use a holiday API call.
     */

    if(currentMonth == 1 && currentDay == 1) return "🎆";
    if(currentMonth == 2 && currentDay == 14) return "💘";
    if(currentMonth == 3 && currentDay == 20) return "🌱"
    if(currentMonth == 4 && currentDay == 1) return "🤡";
    if(currentMonth == 6 && currentDay == 23) return "☀️";
    if(currentMonth == 9 && currentDay == 22) return "🍂";
    if(currentMonth == 10 && currentDay == 31) return "🎃";
    if(currentMonth == 12 && currentDay == 15) return "🎂";
    if(currentMonth == 12 && currentDay == 21) return "❄️";
    if(currentMonth == 12 && currentDay == 25) return "🎄";
    else return "✌️";
    

    
}

export function SelectSplash() {
    return splashTexts[Math.floor(Math.random() * (splashTexts.length))];
}

export function GetDate() {
    return currentYear;
}


