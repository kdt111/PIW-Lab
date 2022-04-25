import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";

const SendMessage = () => {
	const location = useLocation();

	const sendMessage = (e) => {
		const title = document.getElementById("title");
		const message = document.getElementById("message");

		if (title.value === "" || message.value === "")
			return;

		alert("Message send!");
		title.value = "";
		message.value = "";
	};

	return(
		<div>
			<Navbar />
			<div className="content-container">
				<h1>Messaging: {location.state.name}</h1>
				<label>
					Title
					<input id="title" className="text-input" type="text" placeholder="Title..." required></input>
				</label>
				<label>
					Message
					<textarea id="message" style={{ minHeight: '400px', resize: 'none' }} className="text-input" placeholder="Message..." required></textarea>
				</label>
				<button style={{ width: '100%' }} onClick={sendMessage}>Send</button>
			</div>
		</div>
	);
};

export default SendMessage;