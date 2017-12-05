var cart = [];

function viewCart () {
	var list = "";
	for (var i = 0; i < cart.length; i++) {
		list += "<li><span id='plus'>+</span>&emsp;<span id='minus'>-</span>&emsp;" 
		+ cart[i][0] + " --- " + cart[i][1] +  " --- € " + cart[i][2] 
		+ "&emsp;<span id='delete'>x</span><span id='parentId'>" 
		+ cart[i][3] + "</span></li>";
	}
	document.getElementById("cart-content").classList.add("show");
	document.querySelector("#cart-content ul").innerHTML = list;
	updateCartBottom();
}

document.getElementById('viewCart').addEventListener("click", viewCart);

var addButtons = document.getElementsByClassName("add");
//console.log(addButtons);
for (var i = 0; i < addButtons.length; i++) {
	addButtons[i].addEventListener("click", function () {
		var parentId = this.parentElement.getAttribute('id');
		var name = document.querySelector("#" + parentId + " p.p-name").innerHTML;
		var price = Number(document.querySelector("#" + parentId 
			+ " p.price").innerHTML.slice(2));
		var found = false;
		for (var i = 0; i < cart.length; i++) {
		//check if same product is in cart already
		//if so --> increment count
			if (cart[i][3] == parentId) {
				cart[i][0] ++;
				found = true;
			}
		}
		//otherwise push new element with count 1 to cart
		if (!found) {
			cart.push([1, name, price, parentId]);
		}
	});
}

function cartSubTotal () {
	var subtotal = 0;
	for (var i = 0; i < cart.length; i++) {
		subtotal += (cart[i][2] * cart[i][0]);
	}
	return subtotal.toFixed(2);
}

function updateCartBottom () {
	document.getElementById("subtotal").innerHTML = "<b>Subtotal:<b> € " + cartSubTotal();
}

document.addEventListener("click", deleteItem);
document.addEventListener("click", incrementCount);


function deleteItem ( event ) {
	var element = event.target;
	if (element.getAttribute("id") == "delete") {
		var parentId = element.parentElement.querySelector("#parentId").innerHTML;
		//remove item from cart array
		for (var i = 0; i < cart.length; i++) {
			if (cart[i][3] == parentId) {
				cart.splice(i, 1);
			}
		}
		//remove item from the DOM
		element.parentElement.remove();
		updateCartBottom();
		//console.log(cart);
	}
}

function incrementCount (event) {
	var element = event.target;
	if (element.getAttribute("id") == "plus") {
		var parentId = element.parentElement.querySelector("#parentId").innerHTML;

	}
}


