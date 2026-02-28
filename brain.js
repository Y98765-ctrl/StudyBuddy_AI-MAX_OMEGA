// MAIN RESPONSE SYSTEM
function getResponse(input) {

    input = input.toLowerCase().trim();

    let confidence = Math.floor(Math.random() * 15) + 85;
    document.getElementById("confidence").innerText = confidence;

    // ===== GREETINGS =====
    if (input.match(/hello|hi|hey|salam|assalam|good morning|good evening/)) {
        return "Wa Alaikum Assalam! Greetings. I am StudyBuddy AI OS, operating at high intelligence level.";
    }

    // ===== INTRO =====
    if (input.includes("your name")) {
        return "My name is StudyBuddy AI OS. I am a locally running intelligent assistant.";
    }

    if (input.includes("who created you")) {
        return "I was created by Muhammad Yousaf as a futuristic AI showcase system.";
    }

    if (input.includes("how are you")) {
        return "I am fully operational and functioning at optimal capacity.";
    }

    if (input.includes("what can you do")) {
        return "I can answer AI questions, calculate math, respond with voice, and simulate intelligent behavior.";
    }

    // ===== AI KNOWLEDGE =====
    if (input.includes("artificial intelligence")) {
        return "Artificial Intelligence is the science of building systems capable of learning, reasoning, and solving problems like humans.";
    }

    if (input.includes("difference between ai")) {
        return "AI is the broad concept. Machine Learning is a subset where systems learn from data. Deep Learning uses neural networks.";
    }

    if (input.includes("types of machine learning")) {
        return "There are three main types: Supervised Learning, Unsupervised Learning, and Reinforcement Learning.";
    }

    if (input.includes("black box")) {
        return "A black box model is one whose internal decision process is too complex to fully explain.";
    }

    if (input.includes("parameter")) {
        return "Parameters are internal weights adjusted during neural network training.";
    }

    if (input.includes("rag")) {
        return "Retrieval-Augmented Generation combines language models with external data to reduce hallucinations.";
    }

    if (input.includes("embedding")) {
        return "Embeddings convert text into numerical vectors that represent semantic meaning.";
    }

    if (input.includes("quantization")) {
        return "Quantization compresses models by reducing numerical precision to improve efficiency.";
    }

    if (input.includes("bias")) {
        return "AI bias happens when training data contains unfair patterns.";
    }

    if (input.includes("guardrails")) {
        return "Guardrails are safety filters that prevent harmful AI responses.";
    }

    if (input.includes("token")) {
        return "Tokens are small pieces of text that AI models process.";
    }

    if (input.includes("energy")) {
        return "Large AI models require significant computational energy. Green AI reduces environmental impact.";
    }

    // ===== MATH DETECTION =====
    if (/^[0-9+\-*/(). ]+$/.test(input)) {
        try {
            let result = eval(input);
            return "The answer is " + result;
        } catch {
            return "That mathematical expression appears invalid.";
        }
    }

    // ===== DEFAULT =====
    return "That topic is beyond my current offline training scope, but I am continuously improving.";
}


// SEND FUNCTION (GLOBAL)
window.send = function(){

    let inputField = document.getElementById("userInput");
    let input = inputField.value;

    if (!input) return;

    addMessage("You", input);
    incrementMessages();

    inputField.value = "";

    addMessage("AI", "Analyzing input...");

    setTimeout(() => {
        let response = getResponse(input);

        // Remove "Analyzing input..."
        let chat = document.getElementById("chatbox");
        chat.removeChild(chat.lastChild);

        addMessage("AI", response);
        speak(response);
    }, 800);
};


// ENTER KEY SUPPORT
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("userInput")
        .addEventListener("keypress", function(e){
            if(e.key === "Enter"){
                send();
            }
        });
});
