for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		document.getElementById("fizzbuzz").innerHTML +=
		"fizzbuzz<br>";
	} else if ( i % 5 === 0) {
		document.getElementById("fizzbuzz").innerHTML +=
		"buzz<br>";
	} else if (i % 3 === 0 ) {
		document.getElementById("fizzbuzz").innerHTML +=
		"fizz<br>";
	}
	else {
		document.getElementById("fizzbuzz").innerHTML +=
		i + "<br>";
	}
}

//The program should generate every time different 
//random number, that should be between -5 and 25. 
//If the temperature is between -5 and 10 print 
//"The weather is cold" otherwise print 
//"The weather is moderate".
var randomNum = Math.floor((Math.random() * 31) - 5);
console.log(randomNum);
if (randomNum >= -5 && randomNum <= 10) {
	document.getElementById("weather").innerHTML =
	"The weather is cold";
} else {
	document.getElementById("weather").innerHTML =
	"The weather is moderate";
}

//max function
var  numbers = [ 1, 25	, -3, 200];
function maxValue (numArray) {
	var max = 0;
	for (var i = 0; i < numArray.length; i++) {
		if (numArray[i] > max) {
			max = numArray[i];
		}
	}
	return max;
}
document.getElementById("max").innerHTML = maxValue(numbers);

//product
var num2 = [1, 3, 7, 10, 2];
function multiply (numArray) {
	var product = 1;
	for (var i = 0; i < numArray.length; i++) {
		product *= numArray[i];
		//console.log(product);
	}
	return product;
}

document.getElementById("prod").innerHTML = multiply(num2);

var sentence = "i am a sentence.";

function convertFirstLetter (string) {
	var words = string.split(" ");
	var output = "";
	//console.log(words);
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].replace(words[i].charAt(0), words[i].charAt(0).toUpperCase());
		//console.log(words[i]);
		output += words[i] + " ";
	}
	return output;
}

document.getElementById("letters").innerHTML = convertFirstLetter(sentence);

//grades
var points = [76, 85, 65, 93, 81];
function calcAverage (numArray) {
	var sum = 0;
	for (var i = 0; i < points.length; i++) {
		sum += points[i];
	}
	return (sum / points.length);
}
var avg = calcAverage(points);
//console.log(avg);

switch (true) {
	case (avg < 60):
		document.getElementById("grades").innerHTML = "F";
		break;
	case (avg < 70):
		document.getElementById("grades").innerHTML = "D";
		break;
	case (avg < 80):
		document.getElementById("grades").innerHTML = "C";
		break;
	case (avg < 90):
		document.getElementById("grades").innerHTML = "B";
		break;
	case (avg < 100):
		document.getElementById("grades").innerHTML = "A";
		break;
	default:
		console.log("default");
}

//array add
var items = [];
var input = "";
document.getElementsByName('add')[0].addEventListener("click", function () {
	input = document.getElementsByName('arr-input')[0].value;
	items.push(input);
	alert(input + " added at index " + (items.length - 1));
});

document.getElementsByName('display')[0].addEventListener("click", function () {
	var list = "";
	for (var i = 0; i < items.length; i++) {
		list +="Element " + i + " = " + items[i] + "<br>";
	}
	document.getElementById("list").innerHTML = list;
});











