// Змінна з ім'ям
let frstName = "Максим"; // вписати своє ім’я

// Змінна з прізвищем
let lastName = "Гречка"; // вписати своє прізвище

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

// Розрахунок індексу маси тіла (IMT)
let IMT = weight / (hight ** 2);

// Визначення стану ваги за IMT
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

// Пошук найчастіше використовуваної літери у імені та прізвищі
let fullName = (frstName + lastName).toLowerCase(); // об'єднання імені та прізвища, регістр не має значення
let letterCount = {};

// Перерахунок частоти кожної літери
for (let i = 0; i < fullName.length; i++) {
    let letter = fullName[i];
    if (letter in letterCount) {
        letterCount[letter]++;
    } else {
        letterCount[letter] = 1;
    }
}

// Знаходження найчастіше використовуваної літери
let maxCount = 0;
let mostFrequentLetter = '';

for (let letter in letterCount) {
    if (letterCount[letter] > maxCount) {
        maxCount = letterCount[letter];
        mostFrequentLetter = letter;
    }
}

// Запис результату у змінні
let lit = mostFrequentLetter;
let cnt = maxCount;

// Виведення результату в консоль
console.log(`Найчастіше використовувана у імені та прізвищі літера - ${lit}, зустрічається ${cnt} разів`); // Виведення найчастіше використовуваної літери та її кількості
