const surveys = require('./triggers/surveys');
const dropdown = require('./triggers/dropdown');

const testapikey = (z, bundle) => {
const customHttpOptions = {
    headers: {
      'content-type': 'application/json',
      'X-API-TOKEN': bundle.authData.apikey
    }
  };
return z
    .request('https://co1.qualtrics.com/API/v3/surveys', customHttpOptions)
    .then(response => {
      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      } 
     a = []
     str = z.JSON.parse(response.content);
     
     str.result.elements.forEach(s => {
         id = s.id;
         name = s.name;
         json = '{ "id": "' + id + '", "name": "' + name + '" }'
         console.log(json);
         a.push(z.JSON.parse(json))   
    });
    return a;
    });
};


const authentication = {
  type: 'custom',
  connectionLabel: '{{bundle.authData.apikey}}',
  test: testapikey,
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
