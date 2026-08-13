import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PrimeNumber from './components/primeNumber';
import RenderGist from 'react-render-gist';



//create a class to set up click event and return the card
class MyForm extends React.Component {


  render() {
    return (
      <div className="container h-100" >
        <div className="row h-100 justify-content-center align-items-center">
          <div className="card col-lg-7 text-center mt-5">
            <div className="card-body">
              <h5 className="card-title">Find the Prime Factors</h5>
              <div className="form-group">
                <PrimeNumber />
              </div>
            </div>

          </div>
          <div className="card col-lg-7 text-center m-4">
            <div className="card-body">
              <h5 className="card-text">The algorithm of finding prime factors in reactjs</h5>
              <div className="form-group">
                <RenderGist gist="24114643bb61eb07eddaadc0bd453fb4" /></div>
            </div>
          </div>
        </div>
      </div >
    );
  }

}

ReactDOM.render(
  <MyForm />,
  document.getElementById('root')
);