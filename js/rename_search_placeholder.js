var itemNames = ["Google", "Apple", "Android", "Twitter", "Facebook", "Microsoft"];

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	//The maximum and minimum are inclusive
}

var randomInteger = getRandomIntInclusive(0, itemNames.length - 1);

var stringForPlaceholder = `Try typing ${itemNames[randomInteger]}…`;

var searchInput = document.getElementById("search-input");

searchInput.placeholder = stringForPlaceholder;