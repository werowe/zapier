const listSurveys = (z, bundle) => {
const customHttpOptions = {
    headers: {
      'X-API-TOKEN': bundle.inputData.apikey
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
  noun: 'Surveys',

  display: {
    label: 'List Surveys',
    description: 'List Surveys for this account'
  },

  operation: {
    inputFields: [
      {key: 'apikey', type: 'string',  helpText: 'what is your API Key'}
    ],

    perform: listSurveys,

    sample: {
      id: 'SV_77YYKB7fRGDti1n',
      name: 'Web Services Debug',
      ownerId: 'UR_9vPKC4TKcg1kqMJ',
      lastModified: '2018-04-02T10:54:36Z',
      isActive: true
     },

    outputFields: [
      {key: 'elements', label: 'elements'},
      {key: 'id', label: 'id'},
      {key: 'name', label: 'name'},
      {key: 'ownerId', label: 'ownerId'},
      {key: 'lastModified', label: 'lastModified'},
      {key: 'isActive', label: 'isActive'},
      {key: 'nextPage', label: 'nextPage'}
    ]
}
};
