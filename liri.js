require("dotenv").config();
var request = require("request");
var fs = require("fs");
var key = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var command = process.argv[2]

doSomething()

function doSomething(){
if (command === "my-tweets") {
    myTweets()
}
if (command === "spotify-this-song") {
    spotifyThisSong()
}
if (command === "movie-this") {
    movieThis()
}
if (command === "do-what-it-says"){
    doWhatItSays()
}

}

function myTweets(){
    var twitter = new twitter;
    twitter.search
}

function spotifyThisSong(){
    var spotify = new spotify;
    var songSearch = "";
    for (var i = 3; i < process.argv.length; i++) {
        if (i > 2 && i < process.argv.length) {
        songSearch = songSearch + process.argv[i];
  }
  spotify.search({type: 'track', query: IDK}, function(err, data){
      if (err){
          console.log('An error occurred' + err)
      }
      else {
          console.log(data)
      }
  })
}

// function thirdArgument() {
// 	// Stores all possible arguments in array.
// 	argumentArray = process.argv;
// 	// Loops through words in node argument to find additional arguments after node, js file, and inital command are found
// 	for (var i = 3; i < argumentArray.length; i++) {
// 		argument += argumentArray[i];
// 	}
// 	return argument;
// }

//twitter consumer key: jXJqtpaIZepMPZpTmaqdOj0Rm 
//twitter consumer secret: p0vW4tAYkxCVS43HF5YqElQmTYCCtsLNfUQaWh0X8RFVImIhaW\
//access token: 784851023504343040-eWUSAFeeS6HhNyynrA9P24MZblxJ0pU
//access token secret: pbkbvlHRF3HLQhl9eNCIdaZCSXAQKKiWZ8BG0QiglbIqy
