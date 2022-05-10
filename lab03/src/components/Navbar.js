import { NavLink, useNavigate } from "react-router-dom";
import Data from "../Data";

const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        Data.clearCurrentUser();
        navigate("/", {replace: true});
    }

    const authLink = Data.currentUser ? <a className="navbar-link" onClick={logout}>Logout</a> : <NavLink className="navbar-link" to="/auth">Login/Register</NavLink>

	return (
		<nav id="navbar">
			<NavLink className="navbar-link" to="/members">Find group members</NavLink>
			<NavLink className="navbar-link" to="/groups">Find groups</NavLink>
            {authLink}
            {Data.currentUser ? <NavLink className="navbar-link" to="/favourites">Favourites</NavLink> : <></>}
		</nav>
	);
}

export default Navbar;