var cart = [];

function viewCart () {
	var list = "";
	for (var i = 0; i < cart.length; i++) {
		list += "<li>" + cart[i][0] + " --- " + cart[i][1] +  " --- " + cart[i][2] + "</li>";
	}
	document.getElementById("cart-content").classList.add("show");
	document.querySelector("#cart-content ul").innerHTML = list;
}

document.getElementById('viewCart').addEventListener("click", viewCart);

var addButtons = document.getElementsByClassName("add");
//console.log(addButtons);
for (var i = 0; i < addButtons.length; i++) {
	addButtons[i].addEventListener("click", function () {
		var parentId = this.parentElement.getAttribute('id');
		var name = document.querySelector("#" + parentId + " p.p-name").innerHTML;
		var price = Number(document.querySelector("#" + parentId + " p.price").innerHTML.slice(2));
		var found = false;
		for (var i = 0; i < cart.length; i++) {
		//check if same product is in cart already
		//if so --> increment count
			if (cart[i][3] == parentId) {
				cart[i][0] ++;
				found = true;
			}
		}
		//otherwise push new element to array
		if (!found) {
			cart.push([1, name, price, parentId]);
		}
	});
}


