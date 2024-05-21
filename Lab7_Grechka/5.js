// Змінна з ім'ям
let frstName = "Максим"; // вписати своє ім’я

// Змінна з прізвищем
let lastName = "Греча"; // вписати своє прізвище

// Змінна з ніком на GitHub
let nick = "Devil19985"; // вписати нік на GitHub

// Змінна з віком
let age = 18; // вписати свій вік

// Змінна з вагою
let weight = 84; // вписати вагу (приблизно)

// Змінна з ростом
let hight = 1.85; // вписати свій ріст в метрах (приблизно)

// Змінна з днем народження
let birthday = ""; // залишити порожнім

// Змінна з сімейним станом
let marital = true; // вписати одружений/заміжня

// Розрахунок остачі від ділення росту на 1
let heightRemainder = hight % 1;

// Розрахунок результату порівняння росту > 1.80
let isHigh = hight > 1.80;

// Розрахунок індексу маси тіла (IMT)
let IMT = weight / (hight ** 2);

// Визначення стану ваги за допомогою if та встановлення IMTstate
let IMTstate;
if (IMT < 18.5) {
    IMTstate = "недостатня вага";
} else if (IMT >= 18.5 && IMT <= 24.9) {
    IMTstate = "нормальна вага";
} else if (IMT >= 25.0 && IMT <= 29.9) {
    IMTstate = "зайва вага";
} else {
    IMTstate = "дуже надмірна вага";
}

// Виведення стану ваги в консоль
console.log(IMTstate); 

// Визначення приналежності до діапазону значень за допомогою switch
let IMTDivision = Math.floor(IMT / 10);
switch (IMTDivision) {
    case 0:
        console.log("IMT нульове");
        break;
    case 1:
        console.log("IMT від 10 до 20");
        break;
    case 2:
        console.log("IMT від 20 до 30");
        break;
    case 3:
        console.log("IMT від 30 до 40");
        break;
    default:
        console.log("IMT неможливе");
        break;
}

// Виведення в консоль остачі від ділення росту на 1
console.log(heightRemainder); 

// Виведення в консоль результату порівняння росту > 1.80
console.log(isHigh); 

// Виведення в консоль індексу маси тіла (IMT)
console.log(IMT); 
