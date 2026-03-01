function isMathExpression(input){
    return /^[0-9+\-*/(). ]+$/.test(input);
}

function calculate(expr){
    try{
        return "Result: "+eval(expr);
    }catch{
        return "Calculation error";
    }
}
