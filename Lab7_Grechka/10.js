let now = new Date();                     // плинне значення поточного часу
let tssp = new Date(now.getTime() - 5000); // задане значення часу (5 секунд тому)
console.log("Зараз - \t\t" + now.toLocaleString()); // Виведення поточного часу
console.log("5 секунд назад було \t" + tssp.toLocaleString()); // Виведення часу 5 секунд тому

let ny = new Date(now.getFullYear() + ", 1, 1 00:00:00"); // дата та час нового року
let fromny = {
    // кількість секунд з нового року
    totalsec: Math.fround((now.getTime() - ny.getTime()) / 1000)
};
// поділено на кількість секунд за добу
fromny.days = Math.floor(fromny.totalsec / (60 * 60 * 24));
// остача від ділення кількості годин з НР на 24
fromny.hours = Math.floor(fromny.totalsec / (60 * 60)) % 24;
// остача від ділення кількості хвилин з НР на 60
fromny.mins = Math.floor(fromny.totalsec / 60) % 60;
// остача від ділення кількості секунд з НР на 60
fromny.seconds = fromny.totalsec % 60;
console.log("З нового року пройшло \t" + fromny.days + " днів, " + fromny.hours + " годин," + fromny.mins + " хвилин, " + fromny.seconds + " секунд.");

// Призначення функцій, що використанф в фрагментах:
// new Date() - створює об'єкт дати з поточним часом або заданим часом
// getTime() - повертає кількість мілісекунд з 1 січня 1970 року
// toLocaleString() - повертає дату та час у вигляді рядка у локальному форматі
// getFullYear() - повертає поточний рік (чотирьохзначне число)
// Math.fround() - повертає найточніше представлення числа з плаваючою комою 
// Math.floor() - округлює число вниз до найближчого цілого числа

// Пояснення, як розраховується час нового року:
// Створюється новий об'єкт дати з поточним роком, місяцем січнем і першим числом о 00:00:00, що представляє початок нового року

// Пояснення призначення службового символу \t:
// Символ табуляції (\t) використовується для додавання горизонтальних відступів у виведенні, щоб вирівняти текст у консольному виведенні

// Пояснення призначення оператора %:
// Оператор % (залишок від ділення) використовується для отримання залишку від ділення двох чисел. У даному контексті він використовується для визначення кількості годин, хвилин та секунд, що залишилися після повних днів та годин

// Порівняння результатів кількості годин, що пройшли з Н.Р. з астрономічним часом:
// Результати повинні відповідати астрономічному часу. Якщо є неспівпадіння, це може бути пов'язано з некоректним визначенням часу нового року або тимчасовою зоною. Також може вплинути використання Math.fround() замість Math.floor() для розрахунку загальної кількості секунд. Перевірка та заміна Math.fround() на Math.floor() може вирішити це питання