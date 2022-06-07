import { NavLink, useNavigate } from "react-router-dom";
import Data from "../Data";
import { logOut } from "../firebase/Users";

const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        Data.clearCurrentUser();
        logOut();
        navigate("/", {replace: true});
    }

    const authLink = Data.currentUser ? <a className="navbar-link" onClick={logout}>Logout ({Data.currentUser.displayName})</a> : <NavLink className="navbar-link" to="/auth">Login/Register</NavLink>

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