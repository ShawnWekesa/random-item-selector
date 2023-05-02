const items = document.querySelectorAll(".item");
	// itemsArray = Array.from(items);


let selected = false;
let allItemsSelected = false;

function selectItem(){
	for(i = 0; i < items.length; i++){
		let randomIndex = Math.floor(Math.random() * items.length);
		console.log(items[randomIndex], randomIndex);
		items[randomIndex].classList.add("selected");
		
	};
};


selectItem();
