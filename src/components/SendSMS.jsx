import React from 'react';
/*  all copy pasted untested.



*/





const SendSMS = () => {
    
            
	const TheSmsWorksApi = require('the_sms_works_api');
	const defaultClient = TheSmsWorksApi.ApiClient.instance;

	// Configure API key authorization: JWT
	const JWT = defaultClient.authentications['JWT'];
	JWT.apiKey = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiI0NDg1NDg4YS01MTNmLTRkM2ItYWJiMi1lNzcxOTYyYjYxYmQiLCJzZWNyZXQiOiJmYmM0M2RjYWRhODkzZGJmNTZmMzZjMzQ3NzI5Yzg4YjY2MjY1ZTc3OGQ4ODhiZmE0Mjc0YjA5NjA2YTIxYzE4IiwiaWF0IjoxNjIzNTA4Mzc2LCJleHAiOjI0MTE5MDgzNzZ9.AdAgEvfOxL2YCU-oUFvpCRhmvQylyLQp5vdG49E7vPs";

	const apiInstance = new TheSmsWorksApi.MessagesApi();
	const smsMessage = new TheSmsWorksApi.Message(); // Message | Message properties

	smsMessage.sender = "AcmeCorp";
	smsMessage.destination = 07777777777;
	smsMessage.content = 'My super awesome message';
	smsMessage.schedule = '';
	smsMessage.tag = "campaign1";

	const callback = function(error, data, response) {
	  if (error) {
	    console.error(error);
	  } else {
	    console.log('API called successfully. Returned data: ' + data);
	  }
	};
	apiInstance.sendMessage(smsMessage, callback);


    return (
        <div>
        </div>
    );
};

export default SendSMS;