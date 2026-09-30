function sendMessage() {

    let input = document.getElementById("userInput");
    let question = input.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user");

    let answer = findAnswer(question);

    setTimeout(function () {
        addMessage(answer, "bot");
    }, 500);

    input.value = "";
}


function addMessage(message, type) {

    let chatBox = document.getElementById("chatBox");

    let messageDiv = document.createElement("div");

    messageDiv.classList.add("message", type);

    messageDiv.innerHTML = message;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}


function handleEnter(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

}


function findAnswer(question) {

    question = question.toLowerCase();


    // Greeting
    if (
        question.includes("hello") ||
        question.includes("hi") ||
        question.includes("hey")
    ) {
        return "Hello! 👋 How can I help you?";
    }


    // What is FAQ
    if (
        question.includes("what is faq") ||
        question.includes("faq assistant") ||
        question.includes("faq")
    ) {
        return "FAQ Assistant AI is an intelligent system that provides quick answers to frequently asked questions.";
    }


    // Registration
    if (
        question.includes("register") ||
        question.includes("registration") ||
        question.includes("sign up")
    ) {
        return "To register, go to the registration page and enter your name, email and password.";
    }


    // Login
    if (
        question.includes("login") ||
        question.includes("log in")
    ) {
        return "To login, enter your registered email and password on the login page.";
    }


    // Password
    if (
        question.includes("password") ||
        question.includes("forgot password")
    ) {
        return "If you forgot your password, click on 'Forgot Password' and follow the instructions.";
    }


    // Services
    if (
        question.includes("service") ||
        question.includes("services")
    ) {
        return "Our services include FAQ support, information search, user assistance and quick answers.";
    }


    // Contact
    if (
        question.includes("contact") ||
        question.includes("support")
    ) {
        return "You can contact our support team through the Contact Us section.";
    }


    // Working
    if (
        question.includes("how does it work") ||
        question.includes("how it works") ||
        question.includes("working")
    ) {
        return "The FAQ Assistant understands your question, searches the available FAQ information and displays the most relevant answer.";
    }


    // AI
    if (
        question.includes("artificial intelligence") ||
        question.includes("what is ai") ||
        question.includes("ai")
    ) {
        return "Artificial Intelligence (AI) is technology that enables computers to perform tasks that normally require human intelligence.";
    }


    // College
    if (
        question.includes("college") ||
        question.includes("course")
    ) {
        return "Please check the college or course information section for detailed information.";
    }


    // Internship
    if (
        question.includes("internship") ||
        question.includes("intern")
    ) {
        return "Internship opportunities help students gain practical knowledge and real-world experience.";
    }


    // Thanks
    if (
        question.includes("thank") ||
        question.includes("thanks")
    ) {
        return "You're welcome! 😊 Feel free to ask another question.";
    }


    // Bye
    if (
        question.includes("bye") ||
        question.includes("goodbye")
    ) {
        return "Goodbye! 👋 Have a nice day.";
    }


    // Default answer
    return "Sorry, I couldn't find a suitable answer. Please try asking your question in a different way.";
}