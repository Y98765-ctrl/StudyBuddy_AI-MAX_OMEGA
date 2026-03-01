function analyticsReport(){
    return `
📊 SYSTEM STATS
Messages Stored: ${getMemory().length}
XP: ${SYSTEM.xp}
Personality: ${SYSTEM.personality}
Strict Mode: ${SYSTEM.strict}
Auto Joke: ${SYSTEM.autoJoke}
    `;
}
