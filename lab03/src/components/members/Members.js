import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MemberAdvert from "./MemberAdvert";
import Navbar from "../Navbar";
import Data from "../../Data";

const Members = () => {
	const [querry, setQuerry] = useState("");
	const navigate = useNavigate();

	const updateQuerry = (e) => setQuerry(e.target.value);

	const componentVisible = (content) => {
		const filter = querry.toLowerCase();
		let retVal = false;
		if (content.subject.toLowerCase().includes(filter))
			retVal = true;
		else if (content.description.toLowerCase().includes(filter))
			retVal = true;
		else {
			content.tags.forEach(tag => {
				if (tag.toLowerCase().includes(filter))
					retVal = true;
			})
		}
		return retVal;
	};

	return (
		<div>
			<Navbar />
			<div className="content-container">
				<input className="text-input" type="text" placeholder="Search..." onChange={updateQuerry}></input>
				{Data.members.map(el => componentVisible(el) ? <MemberAdvert key={el.id} content={el} /> : <></>)}
				<NavLink className="navbar-link button" to="/members/new">New advert...</NavLink>
			</div>
		</div>
	);
}

export default Members;