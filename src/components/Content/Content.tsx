import React from "react";
import styles from "./Content.module.css";
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Button,ListGroup
} from "react-bootstrap";
import BookCard from "../BookCard/BookCard";
import Login from "../Login/Login";
import Account from "../Account/Account";
import BookList from "../booklist/booklist";

interface ContentData {
  data:any,
  title:string
}

class Content extends React.Component<ContentData,any> {
  constructor(props:ContentData) {
      super(props);
      this.state = { };
  }
  render() {
  return (
  <div className={styles.Content} data-testid="Content">
    <Container fluid>
      <div className="row">
        <div className="col-sm-3">
             <ListGroup>
            <ListGroup.Item>{this.state.title}</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup> 
        </div> 
        <div className="col-sm-6">
        {<BookList />}
        </div>
         <div className="col-sm-3">
          <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </div> 
      </div>
    </Container>
  </div> );
  }

}

export default Content;
