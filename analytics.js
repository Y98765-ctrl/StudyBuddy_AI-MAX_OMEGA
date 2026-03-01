function analyticsReport(){
    return `
📊 Stats:
Messages Stored: ${getMemory().length}
XP: ${SYSTEM.xp}
    `;
}
