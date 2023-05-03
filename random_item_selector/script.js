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
	// console.log(selectedIndex)
// };


// selectItem();

// let arr = [1, 2, 3, 4, 5];

//while (arr.length > 0) {
//  const element = arr[0];
  // Perform operation on the element
//  console.log(`Processing element ${element}`, arr, arr.length);
  // Remove element from the array
//  arr.splice(0, 1);
//}

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 4))
// const indexToRemove = 2;
// const newArray = arr.slice(0, indexToRemove).concat(arr.slice(indexToRemove + 1));
// console.log(newArray);
// console.log(arr);
