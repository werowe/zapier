const surveysdropdown = (z, bundle) => {
const customHttpOptions = {
    headers: {
      'content-type': 'application/json',
      'X-API-TOKEN': bundle.inputData.apikey
    }
  };
return z
    .request('https://qualtrics.com/API/v3/surveys', customHttpOptions)
    .then(response => {
      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      } 
     a = []
     str = z.JSON.parse(response.content);
     
     str.result.elements.forEach(s => {
         id = s.id;
         name = s.name;
         json = "{ id: " + id + ", name:" + name + " }"
         z.console.log(json);
         a.push(json) 
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
