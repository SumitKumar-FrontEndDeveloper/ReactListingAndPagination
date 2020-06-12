import React from "react";
import "./Account.css";
import { Form, Button } from "react-bootstrap";


class Account extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false, errors: [] };
  }
  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }
  showRegisterBox() {
    this.setState({ isLoginOpen: false, isRegisterOpen: true });
  }
  render() {
    return (
      <div className="root-container">
        <div className="mainBox">
          <div className="row headerTab">
            <div
              className={
                "col-6 tabNew " + (this.state.isLoginOpen ? "active" : "")
              }
              onClick={this.showLoginBox.bind(this)}
            >
              Login
            </div>
            <div
              className={
                "col-6 tabNew " + (this.state.isRegisterOpen ? "active" : "")
              }
              onClick={this.showRegisterBox.bind(this)}
            >
              Register
            </div>
          </div>
          <div className="boxContainer">
            {this.state.isLoginOpen && <LoginBox />}
            {this.state.isRegisterOpen && <RegisterBox />}
          </div>
        </div>
      </div>
    );
  }
}
export default Account;

class LoginBox extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = { email: "", password: "",validEmail:false,validpassword:false, errors: [],invalidData:true };
  }
  showValidationError(elm: any, msg: any) {
    this.setState((prevState: any) => ({
      errors: [...prevState.errors, { elm, msg }],
    }));
  }
  clearErrorMessage(elm: any) {
    var newArr = [];
    for (let err of this.state.errors) {
      if (elm != err.elm) {
        newArr.push(err);
      }
    }
    this.setState({ errors: newArr });
  }
  validateEmail(em: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(em).toLowerCase());
  }
  submitLoginForm() {
    
   if (this.state.email == "") {
      this.showValidationError("email", "Please enter email");
    } 
    if (this.state.password == "") {
      this.showValidationError("password", "Please enter password");
    } 
  }

  onChangeEmail(e: any) {
    this.setState({ email: e.target.value });
    if(e.target.value=="") {
      this.setState({validEmail:false});
      this.showValidationError("email", "Please enter email");
    } else if (!this.validateEmail(e.target.value)) {
      this.setState({validEmail:false});
       this.showValidationError("email", "Please enter valid email");
    } else {
      this.setState({validEmail:true});
        this.clearErrorMessage("email");
     }

  }
  onChangePassword(e: any) {
    this.setState({ password: e.target.value });
    if(this.state.password==""){
      this.setState({validPassword:false});
      this.showValidationError("password", "Please enter password");
    }  else {
      this.setState({validPassword:true});
      this.clearErrorMessage("password");
    }
}
componentWillUpdate(nextProps:any, nextState:any) {
  nextState.invalidData = !(nextState.email && nextState.password && nextState.validEmail && nextState.validPassword);
  console.log(nextState.invalidData);
}

  render() {
    var emailErr = null,
      passwordErr = null;
    console.log(this.state.errors);
    for (let err of this.state.errors) {
      if (err.elm == "email") {
        emailErr = err.msg;
      }
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
    }
    return (
      <div>
        <div className="lblheader">Login</div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onBlur={this.onChangeEmail.bind(this)}
              onChange={this.onChangeEmail.bind(this)}
            />
            <small className="error-danger">
              {emailErr != null ? emailErr : ""}
            </small>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onBlur={this.onChangePassword.bind(this)}
              onChange={this.onChangePassword.bind(this)}
            />
            <small className="error-danger">
              {passwordErr != null ? passwordErr : ""}
            </small>
          </Form.Group>
          <div className="btn-container">
          <Button className={this.state.invalidData==true ? 'disableBtn':'loginBtn'} onClick={this.submitLoginForm.bind(this)}>
                  Sign In
                </Button>
          </div>
        </Form>
      </div>
    );
  }
}

class RegisterBox extends React.Component<{},any> {
  constructor(props: any) {
    super(props);
    this.state = { fullname:"", email: "", password: "",validFullName:false,validEmail:false,validpassword:false, errors: [],invalidData:true };
  }
  showValidationError(elm: any, msg: any) {
    this.setState((prevState: any) => ({
      errors: [...prevState.errors, { elm, msg }],
    }));
  }
  clearErrorMessage(elm: any) {
    var newArr = [];
    for (let err of this.state.errors) {
      if (elm != err.elm) {
        newArr.push(err);
      }
    }
    this.setState({ errors: newArr });
  }
  validateEmail(em: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(em).toLowerCase());
  }

  validateName(em: string) {
    const re = /\w\s\w/g;
    return String(em).toLowerCase().match(re)!=null ? true : false;
  }
  submitRegisterForm() {
    if (this.state.fullname == "") { 
      this.showValidationError("fullname", "Please enter fullname");
    } 
   if (this.state.email == "") {
      this.showValidationError("email", "Please enter email");
    } 
    if (this.state.password == "") {
      this.showValidationError("password", "Please enter password");
    } 
  }

  onChangeName(e: any) {
    this.setState({ fullname: e.target.value });
    let isValid=false;
    if(e.target.value=="") {
      this.setState({validFullName : false});
      this.showValidationError("fullname", "Please enter name");
    } else if(!this.validateName(e.target.value))  {
      this.setState({validFullName : false});
      this.showValidationError("fullname", "Please enter last name");
    } else {
      this.setState({validFullName : true});
      this.clearErrorMessage("fullname");
    }
  }

  onChangeEmail(e: any) {
    this.setState({ email: e.target.value });
    if(e.target.value=="") {
      this.setState({validEmail:false});
      this.showValidationError("email", "Please enter email");
    } else if (!this.validateEmail(e.target.value)) {
      this.setState({validEmail:false});
       this.showValidationError("email", "Please enter valid email");
    } else {
      this.setState({validEmail:true});
        this.clearErrorMessage("email");
     }

  }
  onChangePassword(e: any) {
    this.setState({ password: e.target.value });
    if(this.state.password==""){
      this.setState({validPassword:false});
      this.showValidationError("password", "Please enter password");
    } else if(this.state.password.length < 7) {
      this.setState({validPassword:false});
      this.showValidationError("password", "Password shuld be greater the 6 character.");
    } else {
      this.setState({validPassword:true});
      this.clearErrorMessage("password");
    }
}
componentWillUpdate(nextProps:any, nextState:any) {
  nextState.invalidData = !(nextState.fullname && nextState.email && nextState.password && nextState.validFullName && nextState.validEmail && nextState.validPassword);
  console.log(nextState.invalidData);
}

  render() {
    var emailErr = null,passwordErr = null,fullNameErr:any = null , disableBtn:Boolean=true;
    for (let err of this.state.errors) {
      if (err.elm == "email") {
        emailErr = err.msg;
      }
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
      if (err.elm == "fullname") {
        fullNameErr = err.msg;
      }
      
    }
    console.log(this.state.errors.length);
    if(this.state.errors.length==0){
      disableBtn=false;
    } else {
      disableBtn=true;
    }
console.log(disableBtn);
   
    return (
      <div>
        <div className="lblheader">Register</div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="fullname" placeholder="Full name" onBlur={this.onChangeName.bind(this)}  onChange={this.onChangeName.bind(this)}/>
            <small className="error-danger">
              {fullNameErr != null ? fullNameErr : ""}
            </small>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onBlur={this.onChangeEmail.bind(this)} onChange={this.onChangeEmail.bind(this)} />
            <small className="error-danger">
              {emailErr != null ? emailErr : ""}
            </small>
            
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onBlur={this.onChangePassword.bind(this)} onChange={this.onChangePassword.bind(this)} />
            <small className="error-danger">
              {passwordErr != null ? passwordErr : ""}
            </small>
            
          </Form.Group>
          <div className="btn-container">
                <Button className={this.state.invalidData==true ? 'disableBtn':'loginBtn'} onClick={this.submitRegisterForm.bind(this)}>
                  Sign Up
                </Button>
          </div>
          
        </Form>
      </div>
    );
  }
}
