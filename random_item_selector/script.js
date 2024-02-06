let itemsArray = document.querySelectorAll(".item");
	items = Array.from(itemsArray);


let selected = false;
let allItemsSelected = false;

// function selectItem(){
// 	while (items.length > 0){
// 		let randomIndex = Math.floor(Math.random() * items.length);
// 		items[randomIndex].classList.add("selected");
// 		console.log(items[randomIndex], randomIndex, items);
// 		items.splice(randomIndex, 1);
// 	};
// };


// selectItem();

function randomFlash(){
	if (items.length > 1) {
		randomIndex = Math.floor(Math.random()*items.length)
		itemsArray[randomIndex].classList.add("selected");
		items.splice(randomIndex, 1)
		console.log(items, itemsArray, randomIndex)

		setTimeout(randomFlash, 400)
	}
}

randomFlash()

for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// let ourArray = [1, 2, 3, 5, 9, 6];
// let dynamicArray = ourArray.slice(); 


// function arrey() {
// 	if (dynamicArray.length > 1) {
// 		let randomCondition = Math.floor(Math.random() * dynamicArray.length);
//     	let removedItem = dynamicArray.splice(randomCondition, 1);
//     	console.log(randomCondition, removedItem, dynamicArray);

//     	setTimeout(arrey, 200)
// 	}
// }


// arrey();
