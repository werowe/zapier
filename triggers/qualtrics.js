function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}

const listSurveys = (z, bundle) => {
const customHttpOptions = {
    headers: {
      'X-API-TOKEN': 'RnwyKn8wLlF3dNoR8rjesuBIJQRRW7pgM7U6ubZy'
    }
  };

  return z
    .request('https://co1.qualtrics.com/API/v3/surveys', customHttpOptions)
    .then(response => {
      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      }
      s=JSON.parse(response.content);
      
      s.result.elements["id"]="1"
    
      t=s.result.elements 
      z.console.log(t);
 
      return t;

    });
};



module.exports = {
  key: 'qualtrics',

  // You'll want to provide some helpful display labels and descriptions
  // for users. Zapier will put them into the UX.
  noun: 'Surveys',
  display: {
    label: 'List Surveys',
    description: 'List Surveys for this account'
  },

  // `operation` is where the business logic goes.
  operation: {

    // `inputFields` can define the fields a user could provide,
    // we'll pass them in as `bundle.inputData` later.
    inputFields: [
      {key: 'apikey', type: 'string',  helpText: 'what is your API Key'}
    ],

    perform: listSurveys,

    // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
    // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
    // returned records, and have obviously dummy values that we can show to any user.

    sample: {

   id: 'SV_77YYKB7fRGDti1n',
    name: 'Web Services Debug',
    ownerId: 'UR_9vPKC4TKcg1kqMJ',
    lastModified: '2018-04-02T10:54:36Z',
    isActive: true },

},
},

    // If the resource can have fields that are custom on a per-user basis, define a function to fetch the custom
    // field definitions. The result will be used to augment the sample.
    // outputFields: () => { return []; }
    // Alternatively, a static field definition should be provided, to specify labels for the fields
    outputFields: [
      {key: 'elements', label: 'elements'},
      {key: 'id', label: 'id'},
      {key: 'name', label: 'name'},
      {key: 'ownerId', label: 'ownerId'},
      {key: 'lastModified', label: 'lastModified'},
      {key: 'isActive', label: 'isActive'},
      {key: 'nextPage', label: 'nextPage'}
    ]
  },

};
