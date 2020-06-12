import React from "react";
import styles from "./Header.module.css";
import Button from "react-bootstrap/Button";
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

interface HeaderProps {
  title:string,
  data:[]
}

class Header extends React.Component<HeaderProps,any>  {
  constructor(props:HeaderProps) {
    super(props);
    this.state = {
      title:props.title
    };
  }
  render(){
    return <Navbar expand="lg">
       <Navbar.Brand href="/">UsedBook.in</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/">Login</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/about">SignUp</Nav.Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
  }

}

export default Header;

