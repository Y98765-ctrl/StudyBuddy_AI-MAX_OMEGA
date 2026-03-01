setInterval(()=>{
    document.getElementById("cpu").innerText=Math.floor(Math.random()*30+50);
    document.getElementById("gpu").innerText=Math.floor(Math.random()*20+60);
},2000);

function trainSimulation(){
    addMessage("Training neural network...","ai");
    setTimeout(()=>addMessage("Optimizing parameters...","ai"),1000);
    setTimeout(()=>addMessage("Training complete. Intelligence improved.","ai"),2000);
}
