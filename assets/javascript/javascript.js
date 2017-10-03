

var config = {
	apiKey: "AIzaSyD0ry1pk-Mv3hvehuuy92WQhZZaDCrI7X4",
	authDomain: "traintimes-1eb10.firebaseapp.com",		
	databaseURL: "https://traintimes-1eb10.firebaseio.com/",
	projectId: "traintimes-1eb10",
	storageBucket: "traintimes-1eb10.appspot.com/",
	messagingSenderId: "945600403854"
};

firebase.initializeApp(config);

var database = firebase.database();

var TrainName = $("#TrainName-input").val().trim();
var Destination = $("#Destination-input").val().trim();
var TrainTime = $("#TrainTime-input").val().trim();
var Frequency = $("#Frequency-input").val().trim();


$("#submit-button").on("click", function(event){

	event.preventDefault();

	var TrainName = $("#TrainName-input").val().trim();
	var Destination = $("#Destination-input").val().trim();
	var TrainTime = $("#TrainTime-input").val().trim();
	var Frequency = $("#Frequency-input").val().trim();

	console.log(TrainName);
	console.log(Destination);
	console.log(TrainTime);
	console.log(Frequency);

	database.ref().push({
		TrainName: TrainName,
		Destination: Destination,
		TrainTime: TrainTime,
		Frequency: Frequency
    });


});


//---------//



