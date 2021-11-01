import React, {Component, useState} from "react";

function App(){
  const [firstName,setFirstname] = useState('')
  const [lastName,setLastname] = useState('')
  const [name,setName] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    setName(`${firstName} ${lastName}` )
    setFirstname('')
    setLastname('')
  }
  return (
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Learn React Function</div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstName" className="form-label">FirstName</label>
                      <input type="text" value={firstName} onChange={(e)=> setFirstname(e.target.value)}  name="firstName" id="firstName" className="form-control"></input>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastName" className="form-label">LastName</label>
                      <input type="text" value={lastName} onChange={(e)=> setLastname(e.target.value)}  name="lastName" id="lastName" className="form-control"></input>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Show</button>
                  </form>
                </div>
                <div className="card-footer">My name is {name ? name : '...'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App;
