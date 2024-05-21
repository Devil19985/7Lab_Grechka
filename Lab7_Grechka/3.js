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
let marital = false; 

// Виведення результату множення висоти на 100
console.log(hight * 100); 
// Виведення привітання
console.log(`Привіт! Мене звати ${frstName} ${lastName}, мені ${age} роки.`); 

// Виведення віку у 10-ковому, 2-ковому та 16-ковому форматі
console.log(`Мій вік у 10-ковому форматі: ${age}`);
console.log(`Мій вік у 2-ковому форматі: ${age.toString(2)}`);
console.log(`Мій вік у 16-ковому форматі: ${age.toString(16)}`);

// Виведення прізвища та імені у верхньому регістрі
console.log(frstName.toUpperCase() + " " + lastName.toUpperCase());

// Виведення суми довжин в літерах прізвища та імені
console.log(frstName.length + lastName.length); 

// Виведення перших трьох літер імені
console.log(frstName.substring(0, 3)); 