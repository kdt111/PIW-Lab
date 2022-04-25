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

const members = [
	{
		id: memberNextId(),
		email: "",
		name: "Andrzej",
		subject: "PiW",
		description: "Project description...",
		tags: ["React", "JavaScript", "NodeJs"],
	},
	{
		id: memberNextId(),
		email: "",
		name: "Kacper",
		subject: "SO2",
		description: "Diffrent project description...",
		tags: ["Bash", "C++", "CMake"],
	},
	{
		id: memberNextId(),
		email: "",
		name: "Kamil",
		subject: "UCiSW2",
		description: "Even more different project description...",
		tags: ["VHDL", "FPGA"],
	},
];

const groups = [
	{
		id: groupNextId(),
		email: "",
		name: "Group 1",
		subject: "PiW",
		description: "Some text about how good this group is...",
		members: ["Kamil", "Michał", "Maciej"],
	},
	{
		id: groupNextId(),
		email: "",
		name: "Group 2",
		subject: "SO2",
		description: "Different group description...",
		members: ["Jan", "Damian"],
	},
];



const Data = {
	members: members,
	groups: groups,
	GetMemberNextId: memberNextId,
	GetGroupNextId: groupNextId,
}

export default Data;