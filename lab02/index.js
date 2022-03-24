"use strict"

let bin = null;
let entryToRemove = null;

const PadString = (number) => {
	const str = number.toString();

	if (str.length === 2)
		return str;
	else
		return "0" + str;
}

const CreateTodoEntry = (text) => {
	let listId = "todo-list-regular";
	if (document.getElementById("is-important").checked)
		listId = "todo-list-important";

	const todoList = document.getElementById(listId);
	
	const container = document.createElement("div");
	const textElement = document.createElement("p");

	container.classList.add("todo-entry");

	textElement.textContent = text;
	textElement.classList.add("todo-text");

	container.appendChild(textElement);

	$("<input/>").attr({
		type: "button",
		class: "btn btn-danger",
		value: "Remove",
		style: "display: table-cell;",
	}).appendTo(container).click(() => RemoveEntryDialog(container));

	textElement.onclick = () => TodoOnClick(textElement);
	todoList.appendChild(container);
}

const AddNewElement = () => {
	const newElementText = document.getElementById("new-element-text");

	if(newElementText.value === "")
		return;

	CreateTodoEntry(newElementText.value);
	newElementText.value = ""
}

const TodoOnClick = (entry) => {
	if (!entry.classList.contains("done-text"))
	{
		entry.classList.add("done-text");
		const dateText = document.createElement("p");
		const today = new Date();

		dateText.textContent = `Finished on: ${PadString(today.getDay())}-${PadString(today.getMonth())}-${today.getFullYear()} - ${today.getHours()}:${PadString(today.getMinutes())}`;
		entry.parentNode.insertBefore(dateText, entry.nextSibling);
	}		
}

const RemoveEntryDialog = (entry) => {
	entryToRemove = entry;
	$("#remove-modal").show();
}

const HideRemoveDialog = () => {
	entryToRemove = null;
	$("#remove-modal").hide();
}

const RemoveEntry = () => {
	if(bin !== null)
		$(bin).remove();

	$(entryToRemove).hide();
	bin = entryToRemove;
	entryToRemove = null;
	$("#remove-modal").hide();
}

const RestoreFromBin = () => {
	if(bin !== null)
	{
		$(bin).show();
		bin = null;
	}
}

const ToggleList = (listId) => {
	$(`#${listId}`).toggle();
}

const UpdateFilter = (filterText) => {
	const isCaseSensitive = document.getElementById("is-case-sensitive").checked;
	if(!isCaseSensitive)
		filterText = filterText.toUpperCase();

	const todoElements = document.getElementsByClassName("todo-text");

	for (let i = 0; i < todoElements.length; i++) 
	{
		const element = todoElements.item(i);
		
		if (element.parentNode === bin)
			continue;
		
		let elementText = element.innerHTML;
		if (!isCaseSensitive)
			elementText = elementText.toUpperCase();
		
		$(element.parentNode).toggle(elementText.includes(filterText));
	}
}