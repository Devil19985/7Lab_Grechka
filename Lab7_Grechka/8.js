// Створення об'єкта Student
let Student = {
    frstName: "Максим", // вписати своє ім’я

    lastName: "Гречка", // вписати своє прізвище

    nick: "Devil19985", // вписати нік на GitHub

    age: 18, // вписати свій вік

    weight: 84, // вписати вагу (приблизно)

    hight: 1.85, // вписати свій ріст в метрах (приблизно)

    birthday: "", // залишити 
    
    marital: true, // вписати одружений/заміжня
    
    // Метод для розрахунку індексу маси тіла (IMT) та стану ваги (IMTstate)
    getIMT() {
        let IMT = this.weight / (this.hight ** 2);
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

        return { IMT, IMTstate };
    },
    
    // Метод для розрахунку найчастіше застосовної літери та їх кількості за переданим іменем та прізвищем
    getLitfavor() {
        let fullName = this.frstName + this.lastName;
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
        
        return { lit: mostFrequentLetter, cnt: maxCount };
    }
};

// Зміна властивості ваги і виведення на консоль IMT та IMTstate
Student.weight = 75; // Нова вага
let IMTResult = Student.getIMT();
console.log(`Індекс маси тіла: ${IMTResult.IMT}`);
console.log(`Стан ваги: ${IMTResult.IMTstate}`);

// Зміна прізвища та імені і виведення на консоль lit та cnt
Student.frstName = "Олександр"; // Нове ім’я
Student.lastName = "Шевченко"; // Нове прізвище
let litfavorResult = Student.getLitfavor();
console.log(`Найчастіше застосовна літера: ${litfavorResult.lit}, кількість: ${litfavorResult.cnt}`);
