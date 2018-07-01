const context = require("aws-lambda-mock-context");
const expect = require("chai").expect;
const index = require ("../src/index.js");

const ctx = context();

describe("Testing getOdometer Intext", function () {
  
  var speechResponse = null;
  var speechError = null;

  before(function(done) {
    index.handler({
      "version": "1.0",
      "session": {
        "new": true,
        "sessionId": "amzn1.echo-api.session.c11b418d-2940-47b6-a7af-689906298272",
        "application": {
          "applicationId": "amzn1.ask.skill.a37ff3a9-4dfd-47c4-95ca-7a0f2546e49b"
        },
        "user": {
          "userId": "amzn1.ask.account.AGOGXBQ3TE5WKCK56XKYCSXGPWZRZUSJUI7CPCIBHF4G6SKVTIYQQVXANRNTFJNNMTO6XRVIR32AYHQ6ECVRJ4OI3LPWG4PG2RFS7E3JOEN46SW4P4RX5AYDZPZRDM5W5THAHSAICS5PPJMMXT5CZ7HJRF4FADOAOGWT5F5N6F76EQ5S7REHEXSZXXCOKCDOSZK6EMCQLYRJDVA"
        }
      },
      "context": {
        "System": {
          "application": {
            "applicationId": "amzn1.ask.skill.a37ff3a9-4dfd-47c4-95ca-7a0f2546e49b"
          },
          "user": {
            "userId": "amzn1.ask.account.AGOGXBQ3TE5WKCK56XKYCSXGPWZRZUSJUI7CPCIBHF4G6SKVTIYQQVXANRNTFJNNMTO6XRVIR32AYHQ6ECVRJ4OI3LPWG4PG2RFS7E3JOEN46SW4P4RX5AYDZPZRDM5W5THAHSAICS5PPJMMXT5CZ7HJRF4FADOAOGWT5F5N6F76EQ5S7REHEXSZXXCOKCDOSZK6EMCQLYRJDVA"
          },
          "device": {
            "deviceId": "amzn1.ask.device.AE5ZJ3HCMNFVMQXIB2GQP4AGUXKIQNXEHKAZJCPTSXQJZAMHYL6WRJ5PIZVUOIGCN76XSLUSPRQNWJIETXWZRPSBY5EDZUXMPBB55R36FT3Z65PVXXQMSR2WFPSPID4EPIEXY5O3M6AWPSJ6H4MBTGJUTU3JCV7JBFLKFNFYUIKA27II7NXBW",
            "supportedInterfaces": {}
          },
          "apiEndpoint": "https://api.amazonalexa.com",
          "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLmEzN2ZmM2E5LTRkZmQtNDdjNC05NWNhLTdhMGYyNTQ2ZTQ5YiIsImV4cCI6MTUzMDQxOTMyNCwiaWF0IjoxNTMwNDE1NzI0LCJuYmYiOjE1MzA0MTU3MjQsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUU1WkozSENNTkZWTVFYSUIyR1FQNEFHVVhLSVFOWEVIS0FaSkNQVFNYUUpaQU1IWUw2V1JKNVBJWlZVT0lHQ043NlhTTFVTUFJRTldKSUVUWFdaUlBTQlk1RURaVVhNUEJCNTVSMzZGVDNaNjVQVlhYUU1TUjJXRlBTUElENEVQSUVYWTVPM002QVdQU0o2SDRNQlRHSlVUVTNKQ1Y3SkJGTEtGTkZZVUlLQTI3SUk3TlhCVyIsInVzZXJJZCI6ImFtem4xLmFzay5hY2NvdW50LkFHT0dYQlEzVEU1V0tDSzU2WEtZQ1NYR1BXWlJaVVNKVUk3Q1BDSUJIRjRHNlNLVlRJWVFRVlhBTlJOVEZKTk5NVE82WFJWSVIzMkFZSFE2RUNWUko0T0kzTFBXRzRQRzJSRlM3RTNKT0VONDZTVzRQNFJYNUFZRFpQWlJETTVXNVRIQUhTQUlDUzVQUEpNTVhUNUNaN0hKUkY0RkFET0FPR1dUNUY1TjZGNzZFUTVTN1JFSEVYU1pYWENPS0NET1NaSzZFTUNRTFlSSkRWQSJ9fQ.HJ71Hye_H0Y7QDuG9I425JxfxvPqiVtszOndRT6EogTjC64H8TiDC08COaG_OqmYX0BbQpRBhoJmSKS7iiXxl6Rabt1LpzGA8XaM5a-ca8E_4b2tdcqiEEuGoHVQAK6omu8x4We9rRRmmM3S-JUjTLI0p3xqaV07i97_Rr71sp32GQJ7vF3S3ylnjiQNQHUwnQ7wD4x69VUu2_8yVBgk015ODYpTH9Wn9kE5YAXnyZb0699uh8rSZCZU9xM_L3nTJRfmOBP85r79nTcFgmgVR72aa7elx3v71l7lVrEI7IClp1FFYc6kgBAwCuvVvG_vVCyse7UrvBo74sSp8bJf9g"
        }
      },
      "request": {
        "type": "LaunchRequest",
        "requestId": "amzn1.echo-api.request.aad6a918-4749-4ced-ae32-68483b397973",
        "timestamp": "2018-07-01T03:28:44Z",
        "locale": "en-US",
        "shouldLinkResultBeReturned": false
      }
    }, ctx);
    ctx.Promise.then(response => {
        console.log(response);
        speechResponse = response;
        done();
      })
      .catch(error => {
        speechError = error;
        done();
      })
  })

  describe("Is the response structure correct", function() {
    it("should not have error, function", function() {
      expect(speechError).to.be.null;
    })
  })

})