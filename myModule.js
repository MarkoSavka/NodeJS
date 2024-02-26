
let currentDate = new Date(); 
module.exports.date = currentDate; 
 
//це є анонімна функція
//функція яка зразу йде на експорт,яка більше не буде юзатись
module.exports.getMessage = function (name) { 
    let hour = currentDate.getHours(); 
    if (hour > 18) 
        return `добрий вечір ${name}`; 
    else if (hour > 10) 
        return "добрий день " + name; 
    else 
        return "добрий ранок " + name; 
 
}