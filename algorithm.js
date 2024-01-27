function getDayName(day) {
    if(typeof day !== 'number')
    {
        return 'error'
    }

    if(day > 0 && day < 8) {
        let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
        return days
    }else {
        return 'Неверные данные на входе'
    }
}
console.log(getDayName(7))