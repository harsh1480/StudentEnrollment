import React, { Component } from "react";
class Studentcomponent extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            emailId:'',
            website:'',
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this)
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this)
        this.changeWebsiteHandler=this.changeWebsiteHandler.bind(this)
        this.saveStudent=this.saveStudent.bind(this);
    }
    changeFirstNameHandler= (event)=>{
   this.setState({firstName: event.target.value});
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }
    changeEmailIdHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }
    changeWebsiteHandler=(event)=>{
       this.setState({website: event.target.value});
    }
    saveStudent=(e)=>{
        e.preventDefault();
        let student={firstName: this.state.firstName,lastName: this.state.lastName,emailId: this.state.emailId,website: this.state.website};
        console.log(Student=>+JSON.stringify(Student))
    }
    cancel=(e)=>{
        e.target.reset();
    }
    render(){
        return (
       <div>
          <div className="container">
              <div className="row">
                  <br></br>
                  <h1 className="text-center">Student Enrollment Form</h1>
                  <br></br>
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                      <div className="card-body">
                          <form>
                              <div className="form-group">
                                  <label>First Name:</label>
                                  <input placeholder="First Name"name="firstName" className="form-control"
                                  value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                  
                              </div>
                              <div className="form-group">
                                  <label>Last Name:</label>
                                  <input placeholder="Last Name"name="firstName" className="form-control"
                                  value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                  
                              </div>
                              <div className="form-group">
                                  <label>Emaild Id:</label>
                                  <input placeholder="Email Id"name="emailid" className="form-control"
                                  value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                  
                              </div>
                              <div className="form-group">
                                  <label>Website:</label>
                                  <input placeholder="Website"name="website" className="form-control"
                                  value={this.state.website} onChange={this.changeWebsiteHandler}/>
                                  
                              </div>
                              <br></br>
                              <br></br>
                              <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                              <button className="btn btn-danger" onClick={this.cancel.bind}style={{marginLeft:"10px"}}>Cancel</button>
                          </form>
                      </div>
                      </div> </div>
          </div>
       </div>
        )
    }
}
export default Studentcomponent