const listsurveys = (z, bundle) => {
const customHttpOptions = {
    headers: {
      'X-API-TOKEN': bundle.inputData.apikey
    }
  };

  return z
    .request('https://survey.qualtrics.com/WRAPI/ControlPanel/api.php?Request=getLegacyResponseData&User=' + bundle.inputData.userid + '&Token=' + bundle.inputData.apikey + '&Format=JSON&Version=2.0&SurveyID=' + bundle.inputData.surveyid , customHttpOptions)
    .then(response => {
      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      }
      var a= []
      str = response.content.toString();
      txtarr = str.split("R_")
     var i = 0;
     txtarr.forEach(s => {
      if (i > 0) {
         id = "R_" + s.replace(/(.+\")(:){(.+)/,"$1")
         t = s.replace(/(.+\":){(.+)/,"$2")
         u = "{ \"id\": \"" + id + ", " + t.replace(/(.+)(}}$|},\"$)/,"$1}")
         a.push(z.JSON.parse(u))
      }
      i = i + 1;
      z.console.log(a);
    }); 
      return a;
    });
};

module.exports = {
  key: 'surveys',
  noun: 'surveys',
  display: {
    label: 'List Surveys',
    description: 'List Surveys for this account'
  },

 operation: {
 inputFields: [
    { key: "surveyid", type: "string", helpText: "surveyID", dynamic: "dropdown.id.name" },
 ],
    
  perform: listsurveys, 
} ,
};
