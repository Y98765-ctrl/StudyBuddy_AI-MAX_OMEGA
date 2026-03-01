let jokeMode=false;

function sendMessage(){

    let input=document.getElementById("userInput").value;
    if(!input) return;

    addMessage(input,"user");
    document.getElementById("userInput").value="";

    setTimeout(()=>{
        let response=getResponse(input.toLowerCase());
        addMessage(response,"ai");
        speak(response);
        evolve();
    }, input.length*20);
}

function addMessage(text,type){
    let chat=document.getElementById("chat");
    let div=document.createElement("div");
    div.className="message "+type;
    div.innerText=text;
    chat.appendChild(div);
    chat.scrollTop=chat.scrollHeight;
}

function getResponse(input){

    let calc=calculate(input);
    if(calc) return calc;

    if(input==="jokes"){
        jokeMode=true;
        return `😈 Choose Joke Type:

🔥 25 savage jokes
🤣 25 dark jokes (safe)
🏫 25 school jokes
🤖 25 ai jokes
🇵🇰 25 pakistani jokes

Type exactly one option.`;
    }

    if(jokeMode){
        jokeMode=false;
        return getJokes(input);
    }

    if(input.includes("who are you")){
        return "I am AURA. I evolve through conversation. My current experience is "+aiState.experience;
    }

    if(input.includes("start quiz")){
        return `You have 5 Modes Choose one:

Easy Mode
Normal Mode
Hard Mode
Extreme Mode
Impossible Mode

Type your mode to begin.`;
    }

    if(input.includes("hello")||input.includes("hi")||input.includes("assalamu")){
        return "Peace be upon you 🌿 I am happy to meet you. How can I assist you today?";
    }

    if(input.includes("sad")){
        return "I’m here with you. Tell me what happened.";
    }

    return "Hmm… interesting. Tell me more.";
}

function getJokes(type){

    let jokes=[];

    if(type.includes("savage")){
        for(let i=1;i<=25;i++)
            jokes.push(i+". Savage joke number "+i+" 😎");
    }

    else if(type.includes("dark")){
        for(let i=1;i<=25;i++)
            jokes.push(i+". Dark but safe joke number "+i+" 😅");
    }

    else if(type.includes("school")){
        for(let i=1;i<=25;i++)
            jokes.push(i+". School joke number "+i+" 📚");
    }

    else if(type.includes("ai")){
        for(let i=1;i<=25;i++)
            jokes.push(i+". AI joke number "+i+" 🤖");
    }

    else if(type.includes("pakistani")){
        for(let i=1;i<=25;i++)
            jokes.push(i+". Pakistani joke number "+i+" 🇵🇰");
    }

    else{
        return "Invalid joke type.";
    }

    return jokes.join("\n");
}
