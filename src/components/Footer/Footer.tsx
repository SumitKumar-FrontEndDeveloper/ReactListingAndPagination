import React from "react";
import styles from "./Footer.module.css";

class Footer extends React.Component {
  constructor(props:any) {
    super(props);
    this.state= {
      title:"new title"
    };
  }
  render() {
    return (<div className={styles.footer} data-testid="Footer">
    <div className="footer">
      <div className="header-right">
        <a className="active" href="#home">
          
        </a>
        <a href="#contact">Home</a>
        <a href="#about">Contact Us</a>
      </div>
    </div>
  </div>);
    }
  
}
  

export default Footer;
