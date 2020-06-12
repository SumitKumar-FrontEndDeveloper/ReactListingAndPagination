import React from 'react';
import styles from './Login.module.css';

class Login extends React.Component<any> {
  constructor(props:any){
    super(props);
    
  }
  render() {
    return (<div className="row">
              <input type="text" value={this.props.uname} onChange={this.props.changeTextOfText} />
              {this.props.uname}
    </div>)
  }
}

export default Login;
