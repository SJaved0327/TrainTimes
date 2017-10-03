// ------------- GLOBAL VARIABLES ------------- //

var TrainName = $("#TrainName-input");
var Destination = $("#Destination-input");
var TrainTime = $("#TrainTime-input");
var Frequency = $("#Frequency-input");

// ------------- FUNCTIONS ------------- //

function submitClick(){

	var TrainName = $("#TrainName-input");
	var Destination = $("#Destination-input");
	var TrainTime = $("#TrainTime-input");
	var Frequency = $("#Frequency-input");

	console.log(TrainName);
	console.log(Destination);
	console.log(TrainTime);
	console.log(Frequency);

};






// ------------- FIREBASE ------------- //

	var config = {
		apiKey: "AIzaSyD0ry1pk-Mv3hvehuuy92WQhZZaDCrI7X4",
		authDomain: "traintimes-1eb10.firebaseapp.com",
		databaseURL: "https://traintimes-1eb10.firebaseio.com/",
		storageBucket: "gs://traintimes-1eb10.appspot.com/",
		messagingSenderId: "945600403854",
	};
	firebase.initializeApp(config);




// ------------- hasdlfalsdjf ------------- //










// ------------- CLICK EVENT ------------- //

//when submit button is clicked:
//inputs are stored into variables
$("#submit-button")on("click", submitClick);





