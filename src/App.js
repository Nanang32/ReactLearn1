import React, { Component } from "react";

class App extends Component {
  render(){
    return(
      <div className="p-5">
        <div className="container">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Learn React</div>
              <div className="card-body">
                <form>
                  <div className="mb-4">
                    <label htmlFor="firstName">FirstName</label>
                    <input type="text" name="firstName" id="firstName" className="form-control"></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
