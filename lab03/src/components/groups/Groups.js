import { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Data from "../../Data";
import GroupAdvert from "./GroupAdvert";

class Groups extends Component {
	constructor(props) {
		super(props);
		this.state = {querry: ""};
	}

	render() {
		const updateQuerry = (e) => this.setState({querry: e.target.value});

		const componentVisible = (content) => {
			const filter = this.state.querry.toLowerCase();
			let retVal = false;
			if (content.subject.toLowerCase().includes(filter))
				retVal = true;
			else if (content.description.toLowerCase().includes(filter))
				retVal = true;
			else if (content.name.toLowerCase().includes(filter))
				retVal = true;
			
			return retVal;
		};

		return (
			<div>
				<Navbar />
				<div className="content-container">
					<input className="text-input" type="text" placeholder="Search..." onChange={updateQuerry}></input>
					{Data.groups.map(el => componentVisible(el) ? <GroupAdvert key={el.id} content={el} /> : <></>)}
					<NavLink className="navbar-link button" to="/groups/new">New advert...</NavLink>
				</div>
			</div>
		);
	}
}

export default Groups;