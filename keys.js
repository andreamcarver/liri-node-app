console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

//twitter consumer key: jXJqtpaIZepMPZpTmaqdOj0Rm 
//twitter consumer secret: p0vW4tAYkxCVS43HF5YqElQmTYCCtsLNfUQaWh0X8RFVImIhaW\
//access token: 784851023504343040-eWUSAFeeS6HhNyynrA9P24MZblxJ0pU
//access token secret: pbkbvlHRF3HLQhl9eNCIdaZCSXAQKKiWZ8BG0QiglbIqy
