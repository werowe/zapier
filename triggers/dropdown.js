const surveysdropdown = (z, bundle) => {
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


module.exports = {
  key: 'dropdown',
  noun: 'dropdown',
  display: {
    label: 'List Surveys',
    description: 'List Surveys for this account',
    hidden: true
  },
      operation: {
     
        perform: surveysdropdown,

},

};
