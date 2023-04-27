const items = [...document.querySelectorAll(".item")];
// console.log(items[1])


let selected = false;
let allItemsSelected = false;

function selectItem(){
	for(i = -1; i < items.length; i++){
		let randomIndex = Math.floor(Math.random() * items.length);
		console.log(items[randomIndex], randomIndex);
		items[randomIndex].classList.add('selected');
		items[randomIndex].style.background = 'red'
	};
}

// let randomIndex = Math.floor(Math.random() * items.length);
// 	console.log(items[randomIndex], randomIndex);
selectItem();