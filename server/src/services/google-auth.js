require('dotenv').config()
const url = require('@koa/router').url;
const {google} = require('googleapis');

function createConnection() {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
}

const defaultScope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
];

const getAuthUrl = () => {
  const conn = createConnection();
  return conn.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: defaultScope
  });
};

async function getGoogleAccountFromCode(code) {
  const auth = createConnection();
  const data = await auth.getToken(code);
  const tokens = data.tokens;

  auth.setCredentials(tokens);

  const service = google.people({ version: 'v1', auth });
  const me = await service.people.get({ resourceName: 'people/me', personFields: 'emailAddresses,names' });

  const id = me.data.resourceName;
  const firstName = me.data.names[0].givenName;
  const lastName = me.data.names[0].familyName;
  const email = me.data.emailAddresses[0].value;

  return {
    id: id,
    email: email,
    firstName: firstName,
    lastName: lastName,
    tokens: tokens
  };
}

module.exports = { getGoogleAccountFromCode, getAuthUrl };