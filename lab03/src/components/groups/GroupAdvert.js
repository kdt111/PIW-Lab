import { useNavigate } from "react-router-dom";
import Data from "../../Data";

const GroupAdvert = (props) => {
	const content = props.content;
	const navigate = useNavigate();

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

	const sendMessage = () => {
		navigate("/message", { replace: true, state: { name: content.name, address: content.address } });
	}

	return (
		<div className="advert">
			<h2>{`Subject: ${content.subject}`}</h2>
			<h3>{`Posted by: ${content.name}`}</h3>
			<p>{content.description}</p>
			<p>{`Members: ${content.members.join(", ")}`}</p>
			<button onClick={sendMessage}>Message</button>
            {Data.currentUser ? <button onClick={favourite}>(Un)Favourite</button> : <></>}
		</div>
	);
};

export default GroupAdvert;