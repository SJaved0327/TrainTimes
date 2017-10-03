
//---------//

// REFERENCE FIREBASE //

var config = {
	apiKey: "AIzaSyD0ry1pk-Mv3hvehuuy92WQhZZaDCrI7X4",
	authDomain: "traintimes-1eb10.firebaseapp.com",		
	databaseURL: "https://traintimes-1eb10.firebaseio.com/",
	projectId: "traintimes-1eb10",
	storageBucket: "traintimes-1eb10.appspot.com/",
	messagingSenderId: "945600403854"
};

firebase.initializeApp(config);

// VARIABLES //

var database = firebase.database();

// SUBMIT BUTTON EVENT //

$("#submit-button").on("click", function(event){

	//prevents form submission upon screen loading
	event.preventDefault();

	//stored user input into variables
	var TrainName = $("#TrainName-input").val().trim();
	var Destination = $("#Destination-input").val().trim();
	var TrainTime = moment($("#TrainTime-input").val().trim(), "HH:mm a").format("X");
	var Frequency = $("#Frequency-input").val().trim();

	//pushes input from user to the database
	database.ref().push({
		TrainName: TrainName,
		Destination: Destination,
		TrainTime: TrainTime,
		Frequency: Frequency
    });

    //input fields are cleared
    $("#TrainName-input").val("");
    $("#Destination-input").val("");
	$("#TrainTime-input").val("");
	$("#Frequency-input").val("");

});


//when new values added to database, enters data into fields
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var TrainName = childSnapshot.val().TrainName;
  var Destination = childSnapshot.val().Destination;
  var TrainTime = childSnapshot.val().TrainTime;
  var Frequency = childSnapshot.val().Frequency;

  // Prettify the employee start
  var TrainTimeMilitary = moment.unix(TrainTime).format("HH:mm");

  var Next = TrainTimeMilitary ;

  var Away = ;

  // Add each train's data into the table
  $(".table > tbody").append("<tr><td>" + TrainName + "</td><td>" + Destination + "</td><td>" +
  Frequency + "</td><td>" + Next + "</td><td>" + Away + "</td></tr>");

});


//---------//


