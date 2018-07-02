"use strict";
const Alexa = require("alexa-sdk");

const APP_ID = "amzn1.ask.skill.32ca19f7-424a-432a-88ee-b20924748589";
const GREETING_MESSAGE = "Hi, what would you like to know about your Mercedes-Benz? You can say, help me with my mercedes, to hear all possible options";
const ODOMETER_MESSAGE = "Your Mercedes-Benz odometer is at 3456 miles.";
const LOCK_DOOR_MESSAGE = 'Locking the doors to your Mercedes-Benz.';
const LICENSE_PLATE_MESSAGE = 'Your Mercedes-Benz license plate number is 5LK8F9S.';
const UNLOCK_DOOR_MESSAGE = 'Unlocking the doors to your Mercedes-Benz.';
const GET_TIRE_PRESSURE_MESSAGE = 'The front left tire is at 250 psi, the front right tire is at 240 psi, the back left tire is at 245 psi, and the back right tire is at 235 psi.';
const GET_FUEL_LEVEL_MESSAGE = 'The fuel tank of your Mercedes-Benz is 48% full at 8.9 gallon.';
const CHECK_DOOR_MESSAGE = 'All doors of your Mercedes-Benz are currently closed.';
const HELP_MESSAGE = "Some things you can do with your mercedes are, ask your mercedes if the doors are open, ask your mercedes the fuel level, your my mercedes for the odometer, ask your mercedes for the license plate, tell you mercedes to lock or unlock the doors, ask your mercedes for the tire pressure, or you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";

const handlers = {
  LaunchRequest: function() {
    this.emit("GreetingsIntent");
  },
  GreetingsIntent: function() {
    this.response.speak(GREETING_MESSAGE);
    this.emit(":responseReady");
  },
  "GetOdometerIntent": function() {
    this.response.speak(ODOMETER_MESSAGE);
    this.emit(":responseReady");
  },
  "GetLicensePlateIntent": function() {
    this.response.speak(LICENSE_PLATE_MESSAGE);
    this.emit(":responseReady");
  },
  "LockDoorsIntent": function() {
    this.response.speak(LOCK_DOOR_MESSAGE);
    this.emit(":responseReady");
  }, 
  "UnlockDoorsIntent": function() {
    this.response.speak(UNLOCK_DOOR_MESSAGE);
    this.emit(":responseReady");
  }, 
  "GetTirePressureIntent": function() {
    this.response.speak(GET_TIRE_PRESSURE_MESSAGE);
    this.emit(":responseReady");
  }, 
  "GetFuelLevelIntent": function() {
    this.response.speak(GET_FUEL_LEVEL_MESSAGE);
    this.emit(":responseReady");
  }, 
  "CheckDoorsIntent": function() {
    this.response.speak(CHECK_DOOR_MESSAGE);
    this.emit(":responseReady");
  },  
  "AMAZON.HelpIntent": function() {
    this.response.speak(HELP_MESSAGE).listen(HELP_REPROMPT);
    this.emit(":responseReady");
  },
  "AMAZON.CancelIntent": function() {
    this.response.speak(STOP_MESSAGE);
    this.emit(":responseReady");
  },
  "AMAZON.StopIntent": function() {
    this.response.speak(STOP_MESSAGE);
    this.emit(":responseReady");
  }
};

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.appId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};