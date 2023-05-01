export function parseDate(date, isDatePicker=false) {
    let datetime = [
        isDatePicker? date.getFullYear() : date.getDate(),
        date.getMonth() + 1,
        isDatePicker? date.getDate() : date.getFullYear(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ]
    datetime = datetime.map(item => item < 10? `0${item}` : `${item}`)

    const dateItems = datetime.slice(0, 3)
    const timeItems = datetime.slice(3)

    return `${dateItems.join(isDatePicker? '-' : '.')}${isDatePicker? 'T' : ' '}${timeItems.join(':')}`
}