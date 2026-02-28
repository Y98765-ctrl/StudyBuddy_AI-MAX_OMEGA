function toggleCalculator(){
    document.getElementById("calculator").classList.toggle("hidden");
}

function calculate(){
    let input = document.getElementById("calcInput").value;
    try{
        let result = eval(input);
        addMessage("Calculator", result);
    } catch {
        addMessage("Calculator", "Invalid expression.");
    }
}