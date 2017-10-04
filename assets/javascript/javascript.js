
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
	var Frequency = moment($("#Frequency-input").val().trim(), "m").format("X");

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


//ADD NEW VALUES TO FIREBASE AND PRINT TO DOM//

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var TrainName = childSnapshot.val().TrainName;
  var Destination = childSnapshot.val().Destination;
  var TrainTime = childSnapshot.val().TrainTime;
  var Frequency = childSnapshot.val().Frequency;

  // convert unix to military time display
  var TrainTimeMilitary = moment.unix(TrainTime).format("HH:mm a");
  // convert unix to minutes display
  var FrequencyMin = moment.unix(Frequency).format("m");

  //would need to create a variable called NextTrain
  //determine the time the next train will arrive at

  //would need to create a variable called AwayMin
  //determine how many minutes away the next train is

  //take the train time input by the user
  // // var TrainTime is unix
  // // unix number of seconds since January 1, 1970

  //current date and time
  // var CurrentTime = moment().format("X");

  //add frequency amount in minutes to the train time X number of times until greater than CurrentTime
  // // var Frequency is unix
  // // unix number of seconds since January 1, 1970
  	/*
  var NextTrain; 

  for (NextTrain < CurrentTime){

  	NextTrain = TrainTime + Frequency;
  	NextTrain = NextTrain;

  }

  //Take the value of NextTrain and convert it to military time
  // // print this to DOM

  //Take the time difference of NextTrain and CurrentTime
  // // convert unix to minutes
  // // store as AwayMin
  // // print this to DOM

	*/


  // var NextTrain = TrainTimeMilitary ;

  // var AwayMin = ;

  // Add each train's data into the table
  $(".table > tbody").append("<tr><td>" + TrainName + "</td><td>" + Destination + "</td><td>" +
  Frequency + "</td><td>" + TrainTimeMilitary + "</td><td>" + "Away" + "</td></tr>");

});


//---------//


