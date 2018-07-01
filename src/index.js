/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

"use strict";
const Alexa = require("alexa-sdk");
const axios = require ("axios");

const APP_ID = 'amzn1.ask.skill.a37ff3a9-4dfd-47c4-95ca-7a0f2546e49b';

const SKILL_NAME = "getOdometer";
const GET_ODOMETER_MESSAGE = "Your Mercedes odometer is: ";
const HELP_MESSAGE =
  "You can ask me what your mercedes odometer is, or, you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
  "A year on Mercury is just 88 days long.",
  "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
  "Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.",
  "On Mars, the Sun appears about half the size as it does on Earth.",
  "Earth is the only planet not named after a god.",
  "Jupiter has the shortest day of all the planets.",
  "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
  "The Sun contains 99.86% of the mass in the Solar System.",
  "The Sun is an almost perfect sphere.",
  "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
  "Saturn radiates two and a half times more energy into space than it receives from the sun.",
  "The temperature inside the Sun can reach 15 million degrees Celsius.",
  "The Moon is moving approximately 3.8 cm away from our planet every year."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
  LaunchRequest: function() {
    this.emit("GetNewFactIntent");
  },
  GetNewFactIntent: function() {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    const speechOutput = 'Hello there, what would you like to know about your mercedes?';
 
    this.response.cardRenderer(SKILL_NAME, randomFact);
    this.response.speak(speechOutput);
    this.emit(":responseReady");
  },
  "getOdometer": function() {
    let speechOutput = GET_ODOMETER_MESSAGE + '5000';
    // make call to mercedes api, speak the results
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
