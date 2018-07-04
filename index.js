const surveys = require('./triggers/surveys');
const dropdown = require('./triggers/dropdown');


const authentication = {
  type: 'custom',
  connectionLabel: '{{bundle.authData.apikey}}',
  test: {
    url: 'https://example.com/api/accounts/me.json'
  },
  fields: [
    {
      key: 'apikey',
      type: 'string',
      required: true,
      helpText: 'This is your Qualtrics API Key'
    }
  ]
};

const App = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  afterResponse: [
  ],

  resources: {
  },

  triggers: {
     [dropdown.key]: dropdown,
     [surveys.key]: surveys
  },

  searches: {
  },

authentication: authentication,

beforeRequest: [],

  creates: {
  }
};

// Finally, export the app.
module.exports = App;
