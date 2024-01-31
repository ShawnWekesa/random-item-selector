let itemsArray = document.querySelectorAll(".item");
	items = Array.from(itemsArray);


let selected = false;
let allItemsSelected = false;

function selectItem(){
	while (items.length > 0){
		let randomIndex = Math.floor(Math.random() * items.length);
		items[randomIndex].classList.add("selected");
		console.log(items[randomIndex], randomIndex, items);
		items.splice(randomIndex, 1);
	};
	// console.log(selectedIndex)
};


selectItem();

let ourArray = [ 1, 2, 3, 5, 9, 6]
let condition = ourArray.length
let dynamicArray = ourArray;


for(i=0;i<condition - 1;i++){
	let randomCondition = Math.floor(Math.random()*dynamicArray.length)
	let removedItem =	dynamicArray.splice(randomCondition, 1);
	console.log( randomCondition, removedItem, dynamicArray)
}

