const items = Array.from(document.getElementsByClassName('activity-dynamic-item'));
console.log("items here");
console.log(items);
items.forEach((item,i) => {
	let prev = items[i-1];
	if (!prev) prev = items[items.length - 1];

	prev.addEventListener('animationend',()=>{
		item.classList.add('animate');
		prev.classList.remove('animate');
	});
})

items[0].classList.add('animate');
