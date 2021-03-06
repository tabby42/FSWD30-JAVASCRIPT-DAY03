var cart = [];

// function viewCart () {
// 	document.getElementById("cart-content").classList.add("show");
// 	updateCartTop();
// 	updateCartBottom();
// }

// function hideCart () {
// 	document.getElementById("cart-content").classList.remove("show");
// }

function updateCartTop () {
	var list = "";
	for (var i = 0; i < cart.length; i++) {
		list += "<li><span id='plus'>+</span>&emsp;<span id='minus'>-</span>&emsp;" 
		+ cart[i][0] + "x --- " + cart[i][1] +  " --- € " + (cart[i][2] * cart[i][0]).toFixed(2)
		+ "&emsp;<span id='delete'>x</span><span id='parentId'>" 
		+ cart[i][3] + "</span></li>";
	}
	document.querySelector("#cart-content ul").innerHTML = list;
}

function updateCartBottom () {
	document.getElementById("subtotal").innerHTML = 
	"<b>Subtotal:&emsp;<b> € " + cartSubTotal();
	document.getElementById("shipping").innerHTML = 
	"<b>Shipping:&emsp;<b> € " + shippingInfo();
	document.getElementById("tax").innerHTML = 
	"<b>Tax 22%:&emsp;<b> € " + calcTax();
	document.getElementById("discount").innerHTML = 
	"<b>Discount:&emsp;<b> € " + calcDiscount();
	document.getElementById("total").innerHTML = 
	"<b>Total:&emsp;<b> € " + cartTotal();
}

function updateCount () {
	var count = 0;
	for (var i = 0; i < cart.length; i++) {
		count += cart[i][0];
	}
	document.getElementById("count").innerHTML = "(" + count + ")";
}

//add event listeners for "View Cart" Button and "Close" Button
//document.getElementById('viewCart').addEventListener("click", viewCart);
//document.getElementById('close').addEventListener("click", hideCart);
//event listeners for buttons that don't exist in the initial html
document.addEventListener("click", deleteItem);
document.addEventListener("click", incrementCount);
document.addEventListener("click", decrementCount);
//event handling for "Add to cart" Buttons
var addButtons = document.getElementsByClassName("add");
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
		updateCount();
		updateCartTop();
		updateCartBottom();
	});
}

function cartSubTotal () {
	var subtotal = 0;
	for (var i = 0; i < cart.length; i++) {
		subtotal += (cart[i][2] * cart[i][0]);
	}
	return subtotal.toFixed(2);
}

function shippingInfo () {
	if (cartSubTotal() > 80) {
		return 6;
	} else {
		return 9;
	}
}

function calcTax() {
	var total = cartSubTotal() + shippingInfo();
	return (total * 0.22).toFixed(2);
}

function calcDiscount() {
	//< 40 Euros = 0%, < 100 = 7%, < 200 = 12%
	var total = cartSubTotal() + shippingInfo();
	if (total < 40) {
		return 0;
	} else if (total < 100) {
		return (total * 0.07).toFixed(2);
	} else {
		return (total * 0.12).toFixed(2);
	}
}

function cartTotal () {
	return ((cartSubTotal() + shippingInfo()) - calcDiscount()).toFixed(2);
}

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
		updateCount();
		updateCartBottom();
	}
}

function incrementCount ( event ) {
	var element = event.target;
	if (element.getAttribute("id") == "plus") {
		var parentId = element.parentElement.querySelector("#parentId").innerHTML;
		for (var i = 0; i < cart.length; i++) {
			if (cart[i][3] === parentId) {
				cart[i][0]++;
			}
		}
		updateCount();
		updateCartTop();
		updateCartBottom();
	}
}

function decrementCount ( event ) {
	var element = event.target;
	if (element.getAttribute("id") == "minus") {
		var parentId = element.parentElement.querySelector("#parentId").innerHTML;
		for (var i = 0; i < cart.length; i++) {
			if (cart[i][3] === parentId) {
				if (cart[i][0] - 1 >= 0) {
					cart[i][0]--;
				}
			}
		}
		updateCount();
		updateCartTop();
		updateCartBottom();
	}
}

