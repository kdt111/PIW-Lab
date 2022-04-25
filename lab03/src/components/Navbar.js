import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav id="navbar">
			<NavLink className="navbar-link" to="/members">Find group members</NavLink>
			<NavLink className="navbar-link" to="/groups">Find groups</NavLink>
		</nav>
	);
}

export default Navbar;