let now = new Date();    
let scheduler = [];
scheduler.push({
    tbegin: new Date(now.getTime()+ 5000), // час початку події через 5 секунд від поточного часу
    tend: new Date (now.getTime() + 10000), // час закінчення події через 10 секунд від поточного часу
    topic: "lamp1", // адресат для події
    cmdbegin:"on", // команда на виконання для початку події
    cmdend:"off" // команда на виконання для кінця події
});
scheduler.push({
    tbegin: new Date(now.getTime()+ 6000), // час початку події через 6 секунд від поточного часу
    tend: new Date (now.getTime() + 8000), // час закінчення події через 8 секунд від поточного часу
    topic: "lamp2", // адресат для події
    cmdbegin:"on", // команда на виконання для початку події
    cmdend:"off" // команда на виконання для кінця події
});
scheduler.push({
    tbegin: new Date(now.getTime()+ 3000), // час початку події через 3 секунди від поточного часу
    tend: new Date (now.getTime() + 9000), // час закінчення події через 9 секунд від поточного часу
    topic: "power", // адресат для події
    cmdbegin:"85", // команда на виконання для початку події
    cmdend:"0" // команда на виконання для кінця події
});

// виведення адресатів у консоль
for (let schedevt of scheduler) {
    console.log(schedevt.topic);
}

// функція fnshed, яка виконується кожну секунду
let fnshed = function () {
    let dt = new Date();
    let msgtxt = dt.toLocaleString();
    console.log(msgtxt); // виведення поточного часу у консоль
    
    // перевірка кожної події у scheduler
    for (let schedevt of scheduler) {
        checkshed(schedevt); // виклик функції для перевірки події
    }
    
    // перевірка закінчення подій та їх видалення з scheduler
    for (let i = 0; i < scheduler.length; i++) {
        if (dt.getTime() > scheduler[i].tend.getTime()) {
            console.log(scheduler[i].topic); // виведення адресату, якому закінчилася подія
            scheduler.splice(i, 1); // видалення події зі scheduler
        }
    }
    
    // якщо більше не залишилося подій, зупиняємо інтервал
    if (scheduler.length === 0) {
        clearTimeout(htmr);
    }         
}

// функція для перевірки події
function checkshed(shedevt) {
    let dt = new Date();
    let msg = {};
    
    if (dt.getTime() >= shedevt.tend.getTime()) { // якщо час закінчення події пройшов
        if (shedevt.started) { // якщо подія вже була запущена
            shedevt.started = false; // встановлюємо прапорець, що подія зупинена
            msg.payload = shedevt.cmdend; // встановлюємо команду для виконання
            msg.topic = shedevt.topic; // встановлюємо адресата
            console.log("Подію для " + msg.topic + " зупинено ");
        }        
    }    
    else if ((dt.getTime() >= shedevt.tbegin.getTime()) && (!shedevt.started)) {
        msg.payload = shedevt.cmdbegin; // встановлюємо команду для виконання
        msg.topic = shedevt.topic; // встановлюємо адресата
        shedevt.started = true; // встановлюємо прапорець, що подія запущена
        console.log("Подію для " + msg.topic + " запущено");  
    }
}    

htmr = setInterval(fnshed, 1000); // запуск інтервалу, який викликає функцію fnshed кожну секунду
console.log(now.toLocaleString() + " Планувальник запущено"); // виведення повідомлення про запуск планувальника
