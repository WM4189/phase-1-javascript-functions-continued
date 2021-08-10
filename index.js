function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(argument = "*") {
    return function (adjective) {
        return `You are ${argument}${adjective}${argument}!` 
    }
}
// let empathetic = wrapAdjective('/-')("a dedicated programmer");
// console.log(empathetic);
