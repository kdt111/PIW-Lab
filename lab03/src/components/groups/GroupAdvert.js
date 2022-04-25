import { useNavigate } from "react-router-dom";

const GroupAdvert = (props) => {
	const content = props.content;
	const navigate = useNavigate();

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
		</div>
	);
};

export default GroupAdvert;