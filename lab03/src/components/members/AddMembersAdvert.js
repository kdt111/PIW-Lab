import Navbar from "../Navbar";
import Data from "../../Data";
import { useNavigate } from "react-router-dom";

const AddMembersAdvert = () => {
	const navigate = useNavigate();

	const submitForm = (e) => {
		e.preventDefault();		
		const formData = {
			id: Data.GetMemberNextId(),
			email: e.target.email.value,
			name: e.target.name.value,
			subject: e.target.subject.value,
			description: e.target.description.value,
			tags: e.target.tags.value.split(",").map(tag => tag.trim()),
		};

		Data.members.push(formData);
		navigate("/members", {replace: true});
	};

	return (
		<div>
			<Navbar />
			<div className="content-container">
				<form onSubmit={submitForm}>
					<label>
						Name
						<input id="name" className="text-input" type="text" placeholder="Name..." required></input>
					</label>
					<label>
						Email address
						<input id="email" className="text-input" type="text" placeholder="Email..." required></input>
					</label>
					<label>
						Subject
						<input id="subject" className="text-input" type="text" placeholder="Subject..." required></input>
					</label>
					<label>
						Description
						<textarea id="description" style={{minHeight: '150px', resize: 'none'}} className="text-input" placeholder="Description..." required></textarea>
					</label>
					<label>
						Tags (comma separated)
						<input id="tags" className="text-input" type="text" placeholder="Tags..." required></input>
					</label>
					<br></br>
					<button style={{width: '100%'}} type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default AddMembersAdvert;