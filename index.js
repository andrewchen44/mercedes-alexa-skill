"use strict";
const Alexa = require("alexa-sdk");

const HELP_MESSAGE = "You can ask me things like, are my mercedes doors closed, how much fuel does my mercedes have, what is my mercedes odometer, what is my mercedes license plate number, can you lock or unlock the doors of my mercedes, what are the tire pressure of my Mercedes, are the doors of my mercedes closed, or you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";

const handlers = {
  LaunchRequest: function() {
    this.emit("GreetingsIntent");
  },
  GreetingsIntent: function() {
    const speechOutput = "Hi, what would you like to know about your Mercedes-Benz? You can say, help me with my mercedes, to hear all possible options";
    this.response.speak(speechOutput);
    this.emit(":responseReady");
  },
  "GetOdometerIntent": function() {
    this.response.speak("Your Mercedes-Benz odometer is at 3456 miles.");
    this.emit(":responseReady");
  },
  "GetLicensePlateIntent": function() {
    this.response.speak('Your Mercedes-Benz license plate number is 5LK8F9S.');
    this.emit(":responseReady");
  },
  "LockDoorsIntent": function() {
    this.response.speak('Locking the doors to your Mercedes-Benz.');
    this.emit(":responseReady");
  }, 
  "UnlockDoorsIntent": function() {
    this.response.speak('Unlocking the doors to your Mercedes-Benz.');
    this.emit(":responseReady");
  }, 
  "GetTirePressureIntent": function() {
    this.response.speak('The front left tire is at 250 psi, the front right tire is at 240 psi, the back left tire is at 245 psi, and the back right tire is at 235 psi.');
    this.emit(":responseReady");
  }, 
  "GetFuelLevelIntent": function() {
    this.response.speak('The fuel tank of your Mercedes-Benz is 48% full at 8.9 gallon.');
    this.emit(":responseReady");
  }, 
  "CheckDoorsIntent": function() {
    this.response.speak('All doors of your Mercedes-Benz are currently closed.');
    this.emit(":responseReady");
  },  
  "AMAZON.HelpIntent": function() {
    this.response.speak(HELP_MESSAGE).listen(HELP_REPROMPT);
    this.emit(":responseReady");
  },
  "AMAZON.CancelIntent": function() {
    this.response.speak('Reqest has been canceled.');
    this.emit(":responseReady");
  },
  "AMAZON.StopIntent": function() {
    this.response.speak('Request has been stopped');
    this.emit(":responseReady");
  }
};

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = "amzn1.ask.skill.32ca19f7-424a-432a-88ee-b20924748589";
  alexa.registerHandlers(handlers);
  alexa.execute();
};