import Navbar from "../Navbar";
import Data from "../../Data";
import { useNavigate } from "react-router-dom";

const AddGroupAdvert = () => {
	const navigate = useNavigate();

	const submitForm = (e) => {
		e.preventDefault();
		const formData = {
			id: Data.GetGroupNextId(),
			name: e.target.name.value,
			subject: e.target.subject.value,
			description: e.target.description.value,
			members: e.target.members.value.split(",").map(member => member.trim()),
		};

		Data.groups.push(formData);
		navigate("/groups", { replace: true });
	};

	return (
		<div>
			<Navbar />
			<div className="content-container">
				<form onSubmit={submitForm}>
					<label>
						Group name
						<input id="name" className="text-input" type="text" placeholder="Group name..." required></input>
					</label>
					<label>
						Leader email address
						<input id="email" className="text-input" type="text" placeholder="Leader email..." required></input>
					</label>
					<label>
						Subject
						<input id="subject" className="text-input" type="text" placeholder="Subject..." required></input>
					</label>
					<label>
						Description
						<textarea id="description" style={{ minHeight: '150px', resize: 'none' }} className="text-input" placeholder="Description..." required></textarea>
					</label>
					<label>
						Members (comma separated)
						<input id="members" className="text-input" type="text" placeholder="Tags..." required></input>
					</label>
					<br></br>
					<button style={{ width: '100%' }} type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default AddGroupAdvert;