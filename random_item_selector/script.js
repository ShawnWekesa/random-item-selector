let itemsArray = document.querySelectorAll(".item");
	items = Array.from(itemsArray);


// let selected = false;
// let allItemsSelected = false;

// function selectItem(){
// 	while (items.length > 0){
// 		let randomIndex = Math.floor(Math.random() * items.length);
// 		items[randomIndex].classList.add("selected");
// 		console.log(items[randomIndex], randomIndex, items);
// 		items.splice(randomIndex, 1);
// 	};
// };

// selectItem();

for(i = items.length - 1; i > 0; i--) {
	const j = Math.floor(Math.random() * (i + 1));
	[items[i], items[j]] = [items[j], items[i]]
}

console.log(items)

function randomFlash(){
	if (items.length > 0) {
		items[0].classList.add("selected");
		items.splice(0, 1)
		console.log(items)

		setTimeout(randomFlash, 200)
	}
}

randomFlash()

// for (let i = arr.length - 1; i > 0; i--) {
//   const j = Math.floor(Math.random() * (i + 1));
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }

// let ourArray = ["a", "b", "c", "d", "e", "f"];
// let dynamicArray = ourArray.slice(); 

// for(i = dynamicArray.length - 1; i > 0; i--) {
// 	const j = Math.floor(Math.random() * (i + 1));
// 	[dynamicArray[i], dynamicArray[j]] = [dynamicArray[j], dynamicArray[i]]
// }
//  console.log(dynamicArray)

// function arrey() {
// 	if (dynamicArray.length > 1) {
// 		let randomCondition = Math.floor(Math.random() * dynamicArray.length);
//     	let removedItem = dynamicArray.splice(randomCondition, 1);
//     	console.log(randomCondition, removedItem, dynamicArray);

//     	setTimeout(arrey, 200)
// 	}
// }


// arrey();
