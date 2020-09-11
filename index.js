let AWS = require('aws-sdk');
let s3 = new AWS.S3();

exports.handler = (event, context) => {
    let previous,
        response;
   let { choice } = event;
    switch(choice)
        {
            case "rock":
                response = "paper";
                break;
            case "paper":
                response = "scissors";
                break;
            case "scissors":
                response = "rock";
                break;
            default:
                context.fail("Incorrect submission please choose 'rock', 'paper', or 'scissors")
        }
        console.log(`You chose ${choice}, but I chose ${response}. I win!`);
        let fileInfo = `You chose ${choice}, but I chose ${response}. I win!`
   s3.putObject({Body: fileInfo, Bucket: 'theffelfinger-rock-paper-scissorss', Key: 'travisheffelfinger/result.txt'}, (err, data) => {
       if(err) {
           console.log('error')
       } else {
           console.log('putObject is a success')
       }
   })
            
        
}