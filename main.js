const lang = prompt("Выбор языка") === undefined ? 'ru' : 'en';

const daysOfWeek = [
    {'en': [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
    ]},
    {'ru': [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
    ]}];


if (lang === 'en') {
    
    console.log(...daysOfWeek[0]['en']);
}
else {

    console.log(...daysOfWeek[1]['ru']);
}

switch (lang) {

    case 'ru': console.log(...daysOfWeek[1]['ru']);
    break;
    case 'en': console.log(...daysOfWeek[0]['en']);
    break;
    default: "Нет языка в списке"
}


//////////Second part/////////////
const namePerson = prompt("Как вас зовут?");

const rang = namePerson === "Артем" ? "директор" : 
             namePerson === "Александр" ? "преподаватель" : "студент";

console.log(rang);
