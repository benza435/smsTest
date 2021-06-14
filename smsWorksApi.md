# thesmsworks API

By Ben, Jun 14 2021, 09:30.

Tested this, can't fault it yet.  
You can send a message to one or many devices, from the internet. You can also schedule a message for later, and cancel a scheduled message, haven't tested these yet.

---

## Some useful bits:

base URL: https://api.thesmsworks.co.uk/v1/

- Messages cost 1 credit per 160 characters.
- Sign up for a new account and get 50 free credits
- Credits cost £10 per 350 credits after that
- login [here](https://thesmsworks.co.uk/) with username gitstash and the usual password.
- Generate a new API token [here](https://thesmsworks.co.uk/user/20429)
- Existing API token is lurking on Slack somewhere. If you generate a new one, the old one will die. Please let everybody know if you generate a new one!!

---

## Making requests:

All requests require Authorization. Do this by adding an "Authorization" key to the header, with a value of the API token.  
I did it in Insomnia, doing it with Axios is todays job.

---

## POST /message/send

When you send:  
`{`  
 `"sender": "name of sender", `  
 `"destination": "phone number, as string", `  
 `"content": "message text goes in here"`  
`}`

You should receive:  
`{`  
` "messageid": "612661318482029176",`  
` "status": "SENT",`  
` "credits": 32,`  
` "creditsUsed": 1,`  
` "messageparts": 1`  
`}`

---

## post /message/schedule

Requires an extra parameter. When you **send**:  
`{`  
`"sender": "YourCompany",`  
`"destination": "447777777777",`  
`"content": "Your super awesome message",`  
`"schedule": "Sun Sep 03 2020 15:34:23 GMT+0100 (BST)",`  
`}`

You _should_ **receive**:  
`{`  
`"messageid": 123456789,`  
`"status": "SCHEDULED"`  
`}`

---

## DEL /message/schedule/:messageId

Looks like you just send an empty request!?  
The message ID comes from responses above.  
If you get [this far](https://api.thesmsworks.co.uk/docs/api-reference.html#operation/cancelScheduledJob) then you are the leader of SMSWorks.

---

## integration options

### MVP:

- Have the app send an http request to the SMS API when the timer runs out.

### MVP v2:

- Or have AWS send an http request to the same endpoint?

### Nice to have:

- App sends journey parameters to AWS
- AWS triggers various messages based on those parameters
- SMS sent to contact upon arrival at journey checkpoints
- SMS sent to user to remind them of time constraits
- SMS sent to contact on successful journey completion
