const items = document.querySelectorAll(".item");
	itemsArray = Array.from(items);


let selected = false;
let allItemsSelected = false;

function selectItem(){
	for(i = -1; i < itemsArray.length; i++){
		let randomIndex = Math.floor(Math.random() * itemsArray.length);
		console.log(items[randomIndex], randomIndex);
		items[randomIndex].classList.add('selected');
		items[randomIndex].style.background = 'red';
	};
}

// let randomIndex = Math.floor(Math.random() * items.length);
	console.log(typeof(itemsArray));
selectItem();