// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: 'your-secret-clientID-here', // your App ID
		'clientSecret' 	: 'your-client-secret-here', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '716650670927-br3d4fv9uphunbubnn06ctod79dna3b7.apps.googleusercontent.com',
		'clientSecret' 	: 'MINSmoZlOQAIee1T1jGDiqQS',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};