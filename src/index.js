"use strict";
const Alexa = require("alexa-sdk");
const axios = require ("axios");

const APP_ID = "amzn1.ask.skill.a37ff3a9-4dfd-47c4-95ca-7a0f2546e49b";
const SKILL_NAME = "getOdometer";
const GET_ODOMETER_MESSAGE = "Your Mercedes odometer is at ";
const HELP_MESSAGE = "You can ask me what your mercedes odometer is, or, you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";

const handlers = {
  LaunchRequest: function() {
    this.emit("GreetingsIntent");
  },
  GreetingsIntent: function() {
    const speechOutput = "Hello there, what would you like to know about your mercedes?";
    this.response.speak(speechOutput);
    this.emit(":responseReady");
  },
  "getOdometerIntent": function() {
    axios.get("https://api.mercedes-benz.com/experimental/connectedvehicle/v1/vehicles/2D32AD7F266D8E0F79/odometer", {
      params: {
        accept: application/json,
        authorization: 'insert auth token here',
      },
    }).then((response) => {
        const odometer = response.odometer.value;
        const distanceSinceReset = response.distancesincereset.value;
        this.response.speak(GET_ODOMETER_MESSAGE + odometer +  "miles");
        this.emit(":responseReady");
    });

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
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

// -H "accept: application/json" 
// -H "authorization: Bearer <insert_the_access_token_here>"


