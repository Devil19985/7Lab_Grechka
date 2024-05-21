// Оголошення змінних
let now = new Date();                     
let tssp = new Date(now.getTime() - 5000); // задане значення часу (5 секунд тому)
console.log("Зараз - \t\t" + now.toLocaleString()); // Виведення поточного часу
console.log("5 секунд назад було \t" + tssp.toLocaleString()); // Виведення часу 5 секунд тому

// Функція для розрахунку різниці у часі
function calculateTimeDifference(DT1, DT2) {
    let totalsec = Math.floor((DT1 - DT2) / 1000); 
    let days = Math.floor(totalsec / (60 * 60 * 24)); 
    let hours = Math.floor(totalsec / (60 * 60)) % 24; 
    let mins = Math.floor(totalsec / 60) % 60; 
    let seconds = totalsec % 60; 
    
    return {
        totalsec,
        days,
        hours,
        mins,
        seconds
    };
}

// Дата та час нового року
let ny = new Date(now.getFullYear() + ", 1, 1 00:00:00");
// Визначення часу з нового року
let fromny = calculateTimeDifference(now, ny);

// Виведення часу з нового року
console.log("З нового року пройшло \t" + fromny.days + " днів, " + fromny.hours + " годин, " + fromny.mins + " хвилин, " + fromny.seconds + " секунд.");

// Дата та час дня народження
let birthday = new Date("2006-03-30T00:00:00"); // Мій день народження: 30 березня 2006 року

// Визначення часу з дня народження
let fromBirthday = calculateTimeDifference(now, birthday);

// Виведення часу з дня народження
console.log("З дня народження пройшло \t" + fromBirthday.days + " днів, " + fromBirthday.hours + " годин, " + fromBirthday.mins + " хвилин, " + fromBirthday.seconds + " секунд.");

// Виведення результатів у консоль
console.log(`З нового року пройшло: ${fromny.days} днів, ${fromny.hours} годин, ${fromny.mins} хвилин, ${fromny.seconds} секунд.`); 
console.log(`З дня народження пройшло: ${fromBirthday.days} днів, ${fromBirthday.hours} годин, ${fromBirthday.mins} хвилин, ${fromBirthday.seconds} секунд.`); 
