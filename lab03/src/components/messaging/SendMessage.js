import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import { useState, useEffect } from "react";

const SendMessage = () => {
	const location = useLocation();
    const [img, setImg] = useState("");

    const user = location.state.user;

    const getImg = async () => {
        const res = await fetch(user.picture === "" ? "https://picsum.photos/64/64" : user.picture);
        user.picture = res.url;
        const blob = await res.blob();
        setImg(URL.createObjectURL(blob));
    };

    useEffect(() => {
        // Pobieramy obraz, tylko jeśli go jeszcze nie ma
        if (img === "") {
            getImg();
        }
    });

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
				<h1>Messaging: {user.name}</h1>
                <img src={img} alt="User" />
                <br></br>
				<label>
					Title
					<input id="title" className="text-input" type="text" placeholder="Title..." required></input>
				</label>
				<label>
					Message
					<textarea autoFocus id="message" style={{ minHeight: '400px', resize: 'none' }} className="text-input" placeholder="Message..." required></textarea>
				</label>
				<button style={{ width: '100%' }} onClick={sendMessage}>Send</button>
			</div>
		</div>
	);
};

export default SendMessage;