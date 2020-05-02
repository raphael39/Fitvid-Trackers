const url = require('@koa/router').url;

const {google} = require('googleapis');
require('dotenv').config()

const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirect: process.env.GOOGLE_REDIRECT_URI
};

/**
 * Create the google auth object which gives us access to talk to google's apis.
 */
function createConnection() {
  return new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  );
}

/**
 * This scope tells google what information we want to request.
 */
const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
];

/**
 * Get a url which will open the google sign-in page and request access to the scope provided (such as calendar events).
 */
function getConnectionUrl(auth) {
  return auth.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent', // access type and approval prompt will force a new refresh token to be made each time signs in
    scope: defaultScope
  });
}

/**
 * Create the google url to be sent to the client.
 */
const urlGoogle = () => {
  const auth = createConnection(); // this is from previous step
  const url = getConnectionUrl(auth);
  return url;
};


/**
 * Helper function to get the library with access to the google plus api.
 */
function getGooglePeopleApi(auth) {
  return google.people({ version: 'v1', auth });
}

/**
 * Extract the email and id of the google account from the "code" parameter.
 */
async function getGoogleAccountFromCode(code) {

  // get the auth "tokens" from the request
  const auth = createConnection();
  const data = await auth.getToken(code);
  console.log("getGoogleAccountFromCode -> data", data)
  const tokens = data.tokens;
  console.log("getGoogleAccountFromCode -> tokens", tokens)

  // add the tokens to the google api so we have access to the account
  auth.setCredentials(tokens);

  // connect to google plus - need this to get the user's email
  const service = getGooglePeopleApi(auth);
  const me = await service.people.get({ resourceName: 'people/me', personFields: 'emailAddresses,names' });
  console.log("getGoogleAccountFromCode -> me", me)
  console.log("getGoogleAccountFromCode -> me.data.names", me.data.names)
  console.log("getGoogleAccountFromCode -> me.data.emailAddresses", me.data.emailAddresses)


  // get the google id and email
  const userGoogleId = me.data.id;
  const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;

  // return so we can login or sign up the user
  return {
    id: userGoogleId,
    email: userGoogleEmail,
    tokens: tokens, // you can save these to the user if you ever want to get their details without making them log in again
  };
}

module.exports = {getGoogleAccountFromCode, urlGoogle};