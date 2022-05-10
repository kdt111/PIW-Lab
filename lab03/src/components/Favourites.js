import Data from "../Data";
import GroupAdvert from "./groups/GroupAdvert";
import MemberAdvert from "./members/MemberAdvert";
import Navbar from "./Navbar";

const Favourites = () => {
    return (
        <div>
            <Navbar />
            <div className="content-container">
            {Data.currentUser ? Data.currentUser.favourites.map(el => el.type === "member" ? <MemberAdvert key={el.key} content={el} /> : <GroupAdvert key={el.id} content={el} />) : <p>Nothing here...</p>}
            </div>
        </div>
    );
}

export default Favourites;