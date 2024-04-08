const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const sendChatbox = document.querySelector(".chatbox");


let userMessage;
const API_KEY = "";

const creteChatLi = (message,className) => {
	const chatLi = document.createElement("li");
	chatLi.classList.add("chat",className);
	let chatContent = className === "outgoing" ? '<p>${message}</p>' :'		<span class="material-symbols-outlined">close</span>'
	chatLi.innerHTML = chatContent;
	return chatLi;
}

const generateResponse = () {
	const API_URL = "https://api.openai.com/v1/chat/completions";

	const requestOptions = {
		method: "POST"
		headers: {
			"Content-Type": "application/json", 
			"Authorisation": 'Bearer ${API_KEY}'
		},
		body: JSON.stringify({
			model: "gpt-3.5-turbo",
			message:[{role: "user",content: userMessage}]
		})
	}
}
const handleChat = () => {
	userMessage = chatInput.value.trim();
	if (!userMessage) return;
	chatbox.appendchild(creteChatLi(userMessage,"outgoing"));

	setTimeout(() => {
         chatbox.appendchild(creteChatLi("Thinking....","incoming"));
         generateResponse();

	},600)
}
sendChatBtn.addEventListener("click",handleChat);