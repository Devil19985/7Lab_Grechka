let now = new Date();    
let shedevt = {
    tbegin: new Date(now.getTime() + 5000), // дата/час початку події (через 5 секунд від поточного часу)
    tend: new Date(now.getTime() + 10000),  // дата/час кінця події (через 10 секунд від поточного часу)
    topic: "lamp",  // адресат для події (тема)
    cmdbegin: "on",  // команда на виконання для початку події (увімкнення)
    cmdend: "off"   // команда на виконання для кінця події (вимкнення)
};

let fnshed = function () {
    let dt = new Date();
    let msgtxt = dt.toLocaleString();
    let msg = {};

    // умова перевіряє, чи поточний час більше або дорівнює часу закінчення події
    if (dt.getTime() >= shedevt.tend.getTime()) {
        clearTimeout(htmr);  // зупиняє інтервал, якщо подія закінчена
        msgtxt = msgtxt + ": Подію зупинено";
        shedevt.started = false;  // прапорець, що подія зараз не працює
        msg.payload = shedevt.cmdend;
        msg.topic = shedevt.topic;
        console.log(msg);
    }    

    // умова перевіряє, чи поточний час більше або дорівнює часу початку події і подія ще не розпочалася
    else if ((dt.getTime() >= shedevt.tbegin.getTime()) && (!shedevt.started)) {
        msgtxt = msgtxt + ": Подію запущено";
        msg.payload = shedevt.cmdbegin;
        msg.topic = shedevt.topic;
        shedevt.started = true;  // прапорець, що подія зараз працює
        console.log(msg);  
    }
    console.log(msgtxt);  // виведення повідомлення у консоль
}

htmr = setInterval(fnshed, 1000);  // запуск інтервалу, який викликає функцію fnshed кожну секунду
console.log(now.toLocaleString() + " Планувальник запущено");  // виведення повідомлення про запуск планувальника
