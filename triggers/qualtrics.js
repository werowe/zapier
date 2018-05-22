const listSurveys = (z, bundle) => {
  // `z.console.log()` is similar to `console.log()`.
  z.console.log('console says hello world!');

  const params = {};
  if (bundle.inputData.style) {
    params.style = bundle.inputData.style;
  }

  // You can build requests and our client will helpfully inject all the variables
  // you need to complete. You can also register middleware to control this.
  const requestOptions = {
    url: 'https://co1.qualtrics.com/API/v3/surveys',
    params: params
  };

  // You may return a promise or a normal data structure from any perform method.
  return z.request(requestOptions)
    .then((response) => z.JSON.parse(response.content));
};

// We recommend writing your triggers separate like this and rolling them
// into the App definition at the end.
module.exports = {
  key: 'listsurveys',

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
      {key: 'apikey`', type: 'string',  helpText: 'what is your API Key'}
    ],

    perform: listSurveys,

    // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
    // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
    // returned records, and have obviously dummy values that we can show to any user.
    sample: {
        "result": {
                "elements": [{
                        "id": "SV_77YYKB7fRGDti1n",
                        "name": "Web Services Debug",
                        "ownerId": "UR_9vPKC4TKcg1kqMJ",
                        "lastModified": "2018-04-02T10:54:36Z",
                        "isActive": true
                }, {
                        "id": "SV_dbxJYxMwz36FGPH",
                        "name": "Purchase Survey",
                        "ownerId": "UR_9vPKC4TKcg1kqMJ",
                        "lastModified": "2018-04-05T08:34:42Z",
                        "isActive": true
                }],
                "nextPage": null
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
