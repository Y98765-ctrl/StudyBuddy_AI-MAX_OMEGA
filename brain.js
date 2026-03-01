let SYSTEM = {
    isAdmin:false,
    lock:false,
    freeze:false,
    personality:"default",
    xp:0
};

function checkAdmin(input){
    if(input.toLowerCase()==="my name is muhammad yousaf"){
        SYSTEM.isAdmin=true;
        return "👑 Creator Access Granted";
    }
    return null;
}

function executeAdmin(input){
    if(!SYSTEM.isAdmin) return null;
    if(!input.startsWith("admin:")) return null;

    let cmd=input.replace("admin:","").trim().toLowerCase();

    if(cmd==="lock") {SYSTEM.lock=true; return "🔒 Locked";}
    if(cmd==="unlock") {SYSTEM.lock=false; return "🔓 Unlocked";}
    if(cmd==="freeze") {SYSTEM.freeze=true; return "🧊 Frozen";}
    if(cmd==="unfreeze") {SYSTEM.freeze=false; return "🔥 Active";}
    if(cmd==="clear") {document.getElementById("chat").innerHTML=""; return "Cleared";}
    if(cmd==="teacher") {SYSTEM.personality="teacher"; return "Teacher Mode";}
    if(cmd==="hacker") {SYSTEM.personality="hacker"; return "Hacker Mode";}
    if(cmd==="stats") return analyticsReport();

    return "Unknown admin command";
}

function getResponse(input){

    SYSTEM.xp++;

    let adminLogin=checkAdmin(input);
    if(adminLogin) return adminLogin;

    let adminAction=executeAdmin(input);
    if(adminAction) return adminAction;

    if(SYSTEM.lock) return "Chat is locked.";
    if(SYSTEM.freeze) return null;

    if(isMathExpression(input)) return calculate(input);

    if(SYSTEM.personality==="teacher")
        return "Let me explain that clearly.";
    if(SYSTEM.personality==="hacker")
        return "Accessing encrypted knowledge...";

    return "I am listening.";
}

function sendMessage(){

    let inputField=document.getElementById("userInput");
    let input=inputField.value.trim();
    if(!input) return;

    addMessage(input,"user");
    memoryStore(input,"user");
    inputField.value="";

    setTimeout(()=>{
        let response=getResponse(input);
        if(response){
            addMessage(response,"ai");
            memoryStore(response,"ai");
            speak(response);
        }
    },300);
}

function addMessage(text,type){
    let chat=document.getElementById("chat");
    let div=document.createElement("div");
    div.className="message "+type;
    div.innerText=text;
    chat.appendChild(div);
    chat.scrollTop=chat.scrollHeight;
}
