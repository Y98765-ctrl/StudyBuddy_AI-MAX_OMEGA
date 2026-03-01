/* ===============================
   SYSTEM STATE
================================ */

let isAdmin = false;

let aiState = {
    mood: "stable",
    xp: 0
};

/* ===============================
   ADMIN LOGIN
================================ */

function checkAdmin(input){
    if(input === "my name is muhammad yousaf"){
        isAdmin = true;
        return "👑 Admin Access Granted. Type 'admin panel'";
    }
    return null;
}

/* ===============================
   ADMIN PANEL TEXT
================================ */

function adminPanel(){
    return `
⚙️ ADMIN PANEL ⚙️

admin: typing box
admin: change title YourTitle
admin: set mood calm
admin: add xp 500
admin: system color gold
admin: reset ui
    `;
}

/* ===============================
   ADMIN COMMAND EXECUTION
================================ */

function executeAdmin(input){

    if(!isAdmin) return null;

    if(input === "admin panel"){
        return adminPanel();
    }

    if(input.startsWith("admin:")){

        let command = input.replace("admin:","").trim().toLowerCase();

        if(command === "typing box"){
            createBroadcastBox();
            return "📡 Broadcast Control Activated.";
        }

        if(command.startsWith("change title")){
            let newTitle = input.replace("admin: change title","").trim();
            if(newTitle){
                document.getElementById("systemTitle").innerText = newTitle;
                return "Title changed.";
            }
        }

        if(command.startsWith("set mood")){
            let mood = input.replace("admin: set mood","").trim();
            aiState.mood = mood;
            return "Mood updated to " + aiState.mood;
        }

        if(command.startsWith("add xp")){
            let value = parseInt(input.replace("admin: add xp","").trim());
            if(!isNaN(value)){
                aiState.xp += value;
                return "XP increased to " + aiState.xp;
            }
        }

        if(command.startsWith("system color")){
            let color = input.replace("admin: system color","").trim();
            document.querySelector(".chat-container").style.boxShadow =
                "0 0 30px " + color;
            return "System color changed.";
        }

        if(command === "reset ui"){
            document.querySelector(".chat-container").style.boxShadow =
                "0 0 20px cyan";
            return "UI Reset Complete.";
        }

        return "Unknown admin command.";
    }

    return null;
}

/* ===============================
   BROADCAST SYSTEM (FIXED)
================================ */

let broadcastBox = null;

function createBroadcastBox(){

    if(broadcastBox) return;

    const container = document.querySelector(".chat-container");

    broadcastBox = document.createElement("div");
    broadcastBox.style.marginTop = "15px";
    broadcastBox.style.padding = "10px";
    broadcastBox.style.background = "#111";
    broadcastBox.style.border = "2px solid gold";
    broadcastBox.style.borderRadius = "10px";
    broadcastBox.style.display = "flex";
    broadcastBox.style.justifyContent = "center";
    broadcastBox.style.gap = "10px";

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type broadcast message...";
    input.style.padding = "8px";
    input.style.width = "250px";
    input.style.borderRadius = "6px";
    input.style.border = "none";

    let btn = document.createElement("button");
    btn.innerText = "Broadcast";
    btn.style.padding = "8px 12px";
    btn.style.borderRadius = "6px";
    btn.style.border = "none";
    btn.style.background = "gold";
    btn.style.cursor = "pointer";

    broadcastBox.appendChild(input);
    broadcastBox.appendChild(btn);
    container.appendChild(broadcastBox);

    input.focus();

    function sendBroadcast(){
        if(input.value.trim() !== ""){
            showBroadcast(input.value.trim());
            input.value = "";
        }
    }

    btn.addEventListener("click", sendBroadcast);
    input.addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            sendBroadcast();
        }
    });
}

function showBroadcast(text){

    let banner = document.createElement("div");
    banner.innerText = text;

    banner.style.position = "fixed";
    banner.style.top = "30px";
    banner.style.left = "50%";
    banner.style.transform = "translateX(-50%)";
    banner.style.background = "gold";
    banner.style.color = "black";
    banner.style.padding = "12px 30px";
    banner.style.borderRadius = "30px";
    banner.style.fontWeight = "bold";
    banner.style.boxShadow = "0 0 25px gold";
    banner.style.zIndex = "9999";

    document.body.appendChild(banner);

    setTimeout(()=>{
        banner.remove();
    },5000);
}

/* ===============================
   MAIN AI RESPONSE
================================ */

function getResponse(input){

    input = input.trim();
    aiState.xp++;

    let adminCheck = checkAdmin(input.toLowerCase());
    if(adminCheck) return adminCheck;

    let adminAction = executeAdmin(input);
    if(adminAction) return adminAction;

    let lower = input.toLowerCase();

    if(lower.includes("hello") || lower.includes("hi")){
        return "Hello 👋";
    }

    if(lower === "who are you"){
        return "I am AURA | Mood: " + aiState.mood + " | XP: " + aiState.xp;
    }

    if(input.match(/^[0-9+\-*/(). ]+$/)){
        try{
            return "Result: " + eval(input);
        }catch{
            return "Calculation error.";
        }
    }

    return "I am listening.";
}

/* ===============================
   SEND SYSTEM
================================ */

function sendMessage(){

    let inputField = document.getElementById("userInput");
    let input = inputField.value;

    if(!input.trim()) return;

    addMessage(input,"user");
    inputField.value = "";

    setTimeout(()=>{
        let response = getResponse(input);
        addMessage(response,"ai");
    },300);
}

function addMessage(text,type){

    let chat = document.getElementById("chat");
    let div = document.createElement("div");
    div.className = "message " + type;
    div.innerText = text;

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}
