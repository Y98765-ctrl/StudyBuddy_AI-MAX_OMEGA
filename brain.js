let jokeMode = false;
let isAdmin = false;

/* =========================
   ADMIN PASSWORD SYSTEM
========================= */

function checkAdminAccess(input){

    if(input === "my name is muhammad yousaf"){
        isAdmin = true;
        return `
👑 ULTRA HIGH ADMIN ACCESS GRANTED 👑

Welcome Creator Muhammad Yousaf.

You now have ADMIN POWERS:

1. View AI Experience
2. Change AI Mood
3. Reset Memory
4. Enable God Mode
5. Shutdown Simulation
6. Reveal Hidden Stats

Type:
admin panel

To open control panel.
        `;
    }

    return null;
}

/* =========================
   ADMIN PANEL
========================= */

function adminPanel(){

    return `
⚙️ ADMIN CONTROL PANEL ⚙️

Choose Power:

1 - Show Experience
2 - Change Mood
3 - Reset Memory
4 - Enable God Mode
5 - Shutdown AI
6 - Hidden System Stats

Type number to execute.
    `;
}

/* =========================
   ADMIN COMMAND EXECUTION
========================= */

function executeAdminCommand(input){

    if(!isAdmin) return null;

    if(input === "admin panel"){
        return adminPanel();
    }

    if(input === "1"){
        return "AI Experience Level: " + aiState.experience;
    }

    if(input === "2"){
        aiState.mood = "overclocked";
        return "Mood changed to OVERCLOCKED 🔥";
    }

    if(input === "3"){
        localStorage.clear();
        return "Memory wiped successfully.";
    }

    if(input === "4"){
        aiState.mood = "GOD MODE";
        return "⚡ GOD MODE ENABLED ⚡";
    }

    if(input === "5"){
        return "Simulation shutting down... (not really 😏)";
    }

    if(input === "6"){
        return `
Hidden Stats:

Mood: ${aiState.mood}
Experience: ${aiState.experience}
Admin: ${isAdmin}
Storage Size: ${localStorage.length}
        `;
    }

    return null;
}
