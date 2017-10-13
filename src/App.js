import React, { Component } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
/*import SurveyEditor from './SurveyEditor';*/
import logo from './proximus.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function sendDataToServer(survey) {
  var resultAsString = JSON.stringify(survey.data);
  console.log(resultAsString); //send Ajax request to your web server.
}

class App extends Component {

  json = require('./questions.json');

  render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Enterprise Mobility + Security DCF Survey</h2>
          </div>
        <div className="surveyjs">
          {/*If you want to show survey, uncomment the line below*/}
          <Survey.Survey model={model} onComplete={sendDataToServer} locale='nl'/>
          {/*If you want to show survey editor, uncomment the line below*/}
          {/*<SurveyEditor />*/}
        </div>
          {/*
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
           */}
      </div>
    );
  }
}

export default App;
