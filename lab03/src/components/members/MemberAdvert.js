import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Data from "../../Data";

const MemberAdvert = (props) => {
    const [img, setImg] = useState("");

	const content = props.content;
	const navigate = useNavigate();

	const sendMessage = () => {
		navigate("/message", {replace: true, state: {user: content}});
	}

    const favourite = () => {
        if (Data.currentUser) {
            const idx = Data.currentUser.favourites.findIndex(el => el === content);
            if (idx < 0) {
                Data.currentUser.favourites.push(content);
            } else {
                Data.currentUser.favourites.splice(idx, 1);
            }
        }
    };

    const getImg = async () => {
        const res = await fetch(content.picture === "" ? "https://picsum.photos/64/64" : content.picture);
        content.picture = res.url;
        const blob = await res.blob();
        setImg(URL.createObjectURL(blob));
    };

    useEffect(() => {
        // Pobieramy obraz, tylko jeśli go jeszcze nie ma
        if (img === "") {
            getImg();
        }
    });

	return (
		<div className="advert">
			<h2>{`Subject: ${content.subject}`}</h2>
            <h3>{`Posted by: ${content.name}`}</h3>
            <img src={img} alt="User" />
			<p>{content.description}</p>
			<p>{`Tags: ${content.tags.join(", ")}`}</p>
			<button onClick={sendMessage}>Message</button>
            {Data.currentUser ? <button onClick={favourite}>(Un)Favourite</button> : <></>}
		</div>
	);
};

export default MemberAdvert;