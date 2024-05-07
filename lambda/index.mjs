console.log('*Loading function');

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "eu-west-3" });

export const handler = async (event, context) => {
    console.log('*Received event: ', JSON.stringify(event));
    const msgJson = JSON.parse(event.Records[0].Sns.Message);
    console.log("event.Records[0].Sns.Message.build-status ->", msgJson.detail["build-status"]);
    let subject = "BDD finished - " + msgJson.detail["build-status"];

    console.log("sending email.....");
      const command = new SendEmailCommand({
        Destination: {
          ToAddresses: ["antonio.diazarroyo@ottogroup.com"]
        },
        Message: {
          Body: {
            Html: { Data: "<h1>hola pepinillo</h1>" },
          },

          Subject: { Data: subject },
        },
        Source: "antonio.diaz.arroyo@gmail.com",
      });

    try {
        console.log("before...");
        let response = await ses.send(command);
        console.log("after...");
        // process data.
        return response;
    }
    catch (error) {
        console.log("Error ----->", error)
    } finally {
        console.log("finally ----->")
    }
    return event;

};
