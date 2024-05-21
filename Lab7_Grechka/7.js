// Змінна з ім'ям
let frstName = "Максим"; 

// Змінна з прізвищем
let lastName = "Гречка"; 

// Змінна з ніком на GitHub
let nick = "Devil19985"; 

// Змінна з віком
let age = 18; 

// Змінна з вагою
let weight = 84; 

// Змінна з ростом
let hight = 1.85; 

// Змінна з днем народження
let birthday = ""; 

// Змінна з сімейним станом
let marital = true; // вписати одружений/заміжня

// Функція для розрахунку індексу маси тіла (IMT)
function getIMT(weight, hight) {
    return weight / (hight ** 2);
}

// Функція для визначення стану ваги за IMT
function getIMTstate(IMT) {
    if (IMT < 18.5) {
        return "недостатня вага";
    } else if (IMT >= 18.5 && IMT <= 24.9) {
        return "нормальна вага";
    } else if (IMT >= 25.0 && IMT <= 29.9) {
        return "зайва вага";
    } else {
        return "дуже надмірна вага";
    }
}

// Функція для розрахунку найчастіше застосовної літери та їх кількості за переданим іменем та прізвищем
function getLitfavor(frstName, lastName) {
    let fullName = frstName + lastName;
    let letterCount = {};
    
    for (let letter of fullName) {
        if (letter in letterCount) {
            letterCount[letter]++;
        } else {
            letterCount[letter] = 1;
        }
    }
    
    let maxCount = 0;
    let mostFrequentLetter = '';
    
    for (let letter in letterCount) {
        if (letterCount[letter] > maxCount) {
            maxCount = letterCount[letter];
            mostFrequentLetter = letter;
        }
    }
    
    return { letter: mostFrequentLetter, count: maxCount };
}

// Розрахунок індексу маси тіла (IMT)
let IMT = getIMT(weight, hight);

// Розрахунок стану ваги
let IMTstate = getIMTstate(IMT);

// Розрахунок найчастіше застосовної літери та їх кількості
let litfavor = getLitfavor(frstName, lastName);

// Виведення результатів у консоль
console.log(`Індекс маси тіла: ${IMT}`);
console.log(`Стан ваги: ${IMTstate}`);
console.log(`Найчастіше застосовна літера: ${litfavor.letter}, кількість: ${litfavor.count}`);
