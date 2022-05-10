let nextMemberId = -1;
let nextGroupId = -1;

const memberNextId = () => {
	nextMemberId++;
	return nextMemberId;
};

const groupNextId = () => {
	nextGroupId++;
	return nextGroupId;
};

const favourites = [];

const setCurrentUser = (user) => {
    Data.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
};

const clearCurrentUser = () => {
    Data.currentUser = null;
    favourites.length = 0;
    localStorage.removeItem("currentUser");
};

const members = [];
const groups = [];

const Data = {
    currentUser: null,
    setCurrentUser: setCurrentUser,
    clearCurrentUser: clearCurrentUser,
    allUsers: {},
	members: members,
	groups: groups,
    favourites: favourites,
	GetMemberNextId: memberNextId,
	GetGroupNextId: groupNextId,
}

export default Data;