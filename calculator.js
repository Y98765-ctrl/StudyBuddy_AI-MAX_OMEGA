function calculate(input){
    try{
        if(input.match(/^[0-9+\-*/().% ]+$/)){
            return "🧮 Result: " + eval(input);
        }
    }catch(e){}
    return null;
}
