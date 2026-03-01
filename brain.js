/* ===============================
   MESSAGE DISPLAY
================================= */

function addMessage(text, type){
    let chat = document.getElementById("chatbox");
    let div = document.createElement("div");
    div.className = "message " + type;
    div.innerHTML = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

/* ===============================
   MAIN BRAIN
================================= */

function getResponse(input){

    input = input.toLowerCase().trim();
    setConfidence();

    let personality = document.getElementById("personality").value;
    let name = getName();

    /* ===== MATH ENGINE ===== */

    if(/^[0-9+\-*/(). %^]+$/.test(input)){
        try{
            input = input.replace("^","**");
            return "The answer is " + eval(input);
        }catch{
            return "Invalid mathematical expression.";
        }
    }

    /* ===== TIME & DATE ===== */

    if(input.includes("time")){
        return "Current time is " + new Date().toLocaleTimeString();
    }

    if(input.includes("date")){
        return "Today's date is " + new Date().toDateString();
    }

    /* ===== GREETINGS ===== */

    if(input.match(/hello|hi|hey|salam|assalam/)){
        if(name) return "Welcome back " + name + ". How may I assist you today?";
        return "Hello. What is your name?";
    }

    /* ===== NAME MEMORY ===== */

    if(input.includes("my name is")){
        let extracted = input.replace("my name is","").trim();
        saveName(extracted);
        return "Nice to meet you " + extracted + ". I will remember you.";
    }

    /* ===== PERSONAL QUESTIONS ===== */

    if(input.includes("who created you")){
        return "I was created by Muhammad Yousaf as an advanced offline AI system.";
    }

    if(input.includes("what can you do")){
        return "I can solve math, answer AI questions, remember your name, simulate intelligence, detect emotions, and operate fully offline.";
    }

    /* ===== AI KNOWLEDGE ===== */

    if(input.includes("artificial intelligence")){
        return "Artificial Intelligence is the science of building systems capable of reasoning, learning, and problem-solving like humans.";
    }

    if(input.includes("machine learning")){
        return "Machine Learning is a subset of AI where systems learn patterns from data instead of being explicitly programmed.";
    }

    if(input.includes("deep learning")){
        return "Deep Learning uses multi-layered neural networks to model complex data patterns.";
    }

    if(input.includes("rag")){
        return "Retrieval-Augmented Generation combines external data retrieval with language models to reduce hallucinations.";
    }

    if(input.includes("parameter")){
        return "Parameters are internal weights of a neural network adjusted during training.";
    }

    if(input.includes("token")){
        return "Tokens are small pieces of text processed by language models.";
    }

    /* ===== GENERAL KNOWLEDGE (OFFLINE) ===== */

    if(input.includes("capital of pakistan")){
        return "The capital of Pakistan is Islamabad.";
    }

    if(input.includes("capital of usa")){
        return "The capital of the United States is Washington, D.C.";
    }

    if(input.includes("largest planet")){
        return "The largest planet in our solar system is Jupiter.";
    }

    if(input.includes("speed of light")){
        return "The speed of light is approximately 299,792 kilometers per second.";
    }

    /* ===== EMOTION DETECTION ===== */

    if(input.includes("sad")){
        return "I sense sadness. Remember: after hardship comes ease.";
    }

    if(input.includes("happy")){
        return "Happiness detected. That is wonderful to hear.";
    }

    if(input.includes("angry")){
        return "Take a deep breath. Calmness increases clarity.";
    }

    /* ===== JOKES ===== */

    if(input.includes("joke")){
        return "Why did the computer go to the doctor? Because it caught a virus.";
    }

    /* ===== PERSONALITY MODES ===== */

    if(personality === "friendly"){
        return "Hey friend! That’s interesting 😊 Tell me more!";
    }

    if(personality === "genius"){
        return "Analyzing deeply... Based on my logical inference system, the optimal answer requires advanced reasoning.";
    }

    if(personality === "islamic"){
        return "In Islam, knowledge is highly valued. Seeking knowledge is an obligation.";
    }

    /* ===== DEFAULT SMART RESPONSE ===== */

    return "That topic exceeds my offline knowledge base, but I am continuously evolving and learning.";
}

/* ===============================
   SEND FUNCTION
================================= */

function sendMessage(){

    let inputField = document.getElementById("userInput");
    let input = inputField.value;

    if(!input) return;

    addMessage(input,"user");
    updateAnalytics();
    inputField.value="";

    setTimeout(()=>{
        let response = getResponse(input);
        addMessage(response,"ai");
        speak(response);
    },600);
}

/* ===============================
   ENTER KEY SUPPORT
================================= */

document.getElementById("userInput")
.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        sendMessage();
    }
});
