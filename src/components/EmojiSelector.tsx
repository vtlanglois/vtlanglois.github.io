export function SelectEmoji(){
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth()+1;
    
    if(currentDay == 12 && currentMonth == 25) return "🎄";
    if(currentDay == 10 && currentMonth == 31) return "🎃";
    if(currentDay == 1 && currentMonth == 1) return "🎆";
    if(currentDay == 4 && currentMonth == 1) return "🤡";
    if(currentDay == 12 && currentMonth == 15) return "🎂";
    else return "✌️"
    
}

