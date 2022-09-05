
export function SelectEmoji(){

    var currentDate = new Date();
    var currentMonth = currentDate.getMonth()+1;
    var currentDay = currentDate.getDate();
    var currentYear = currentDate.getFullYear();
    const data = getData(currentMonth, currentDay, currentYear);
    /**
     * @TODO rewrite this to use a holiday API call.
     */

     data.then((response) => {
        console.log(response[0]["name"]);
        if(response[0]["name"] === "World Sexual Health Day") return "A";
        else console.log
    });
    
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

async function getData(month: number, day: number, year: number) {
    const response = await fetch('https://holidays.abstractapi.com/v1/?api_key=7e2fea7dd76d440ebb65a75476e11e63&country=US&year='+year+'&month='+month+'&day='+day, {method: 'GET', headers: {Accept: 'application/json'}});
    const data = await response.json()
    return data;
}

