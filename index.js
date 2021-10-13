// Your code here
function saturdayFun(act = 'roller-skate') {
   return `This Saturday, I want to ${act}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(string = "*") {
   function innerFunction(str = "special"){
       return `You are ${string}${str}${string}!`
    }
    return innerFunction
}

wrapAdjective('||')