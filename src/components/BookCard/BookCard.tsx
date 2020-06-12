import React from "react";
import styles from "./BookCard.module.css";
import { Card,Button } from "react-bootstrap";

interface CompPrperty {
  data: any;
}
class BookCard extends React.Component<CompPrperty>  {
  constructor(props:CompPrperty) {
    super(props);
    this.state = {
      something: 23
    };
}
  render() {
    return (
      <table >
        <tbody>
        <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
       </tr>
       </tbody>
  </table>
);
 }
  
}

export default BookCard;
