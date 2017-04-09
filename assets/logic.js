  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCEPnNOxzeh-S1MokTMUvTzk0vRcjRUdsY",
    authDomain: "train-schedule-1745c.firebaseapp.com",
    databaseURL: "https://train-schedule-1745c.firebaseio.com",
    projectId: "train-schedule-1745c",
    storageBucket: "train-schedule-1745c.appspot.com",
    messagingSenderId: "555371195320"
  };
  firebase.initializeApp(config);

//Global Variable
  var database = firebase.database();
  var td = ("<td>");
  var closeTd = ("</td>");
  var br = ("<br>");

  

// On click for submit button and grabs the values of inputs
$("#submitButton").on("click", function(){
  var train = $("#train").val();
  var destination = $("#destination").val();
  var trainTime = $("#trainTime").val();
  var frequency = $("#frequency").val();
  var allInputs = train + destination + trainTime + frequency;
  
  var firstTime = moment(trainTime, "hh:mm").subtract(1, "years");
  console.log(firstTime);

  var currentTime = moment();
  console.log("Current time: " + moment(currentTime).format("hh:mm"));

  var diffTime = moment().diff(moment(firstTime), "minutes");
  console.log("Difference in time: " + diffTime);

  var tRemainder = diffTime % frequency;
  console.log(tRemainder);

  var minTillTrain = frequency - tRemainder;
  console.log("Minutes until train " + minTillTrain);


  $("#tableData").append(td + train + closeTd + td + destination + closeTd + td + trainTime + closeTd + td + frequency + closeTd);



// Pushes user searches into the database
  database.ref().push({
    Train: train,
    Destination: destination,
    TrainTime: trainTime,
    Frequency: frequency 
  });


//sanity checks on variables
  console.log(train);
  console.log(destination);
  console.log(trainTime);
  console.log(frequency);
  console.log(allInputs);
});