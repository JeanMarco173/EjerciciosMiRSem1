const regexDate = /^((0?[1-9])|([1-2]\d)|(3[0-1]))[\/]((0?[1-9])|(1[0-2]))[\/](\d\d\d\d)$/


console.log(regexDate.test("05/12/2021")) // true
console.log(regexDate.test("35/12/2021")) // false