import React from "react";
import "./booklist.css";
import { render } from "@testing-library/react";
import * as constant from "../../Common/constants";
import * as sharedService from "../../Common/SharedService";
import { ListGroup } from "react-bootstrap";
import Book from "./Book";
import Pagination from "./Pagination";
import MyLoader from "./../MyLoader";


class BookList extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state= {
      booklist:[],
      currentPage:1,
      totalResults:0,
      loader:true
    };
  }
  componentDidMount() {
    console.log(this.state.loaderArr);
    this.bookList();
  }
  bookList(){
    this.setState({loader:true});
    sharedService.invokeAsyncService('getBookList?lat=13.8075985&lng=100.55866800000001&page='+this.state.currentPage,'GET',{})
    .subscribe((res)=>{
      console.log(res)
      this.setState({booklist:[...res.data.data],totalResults:res.data.total,loader:false});
    });
  }
  nextPage = (pageNumber:number) => {
    this.setState({booklist:[],loader:true});
    sharedService.invokeAsyncService('getBookList?lat=13.8075985&lng=100.55866800000001&page='+pageNumber,'GET',{})
    .subscribe((res)=>{
      console.log(res)
      this.setState({booklist:[...res.data.data],totalResults:res.data.total,currentPage:pageNumber,loader:false});
    });
  }
  render() {
    let totalPages=Math.floor(this.state.totalResults/6);
    return (
      <div className="listGroup">
      {this.state.loader ? <div className="loaderDiv"> 
        <MyLoader  className="loaders"/>
        <MyLoader  className="loaders"/>
        <MyLoader  className="loaders"/>
        <MyLoader  className="loaders"/>
        <MyLoader  className="loaders"/>
        <MyLoader  className="loaders"/>
    </div> : ''}
        <ListGroup >
        {this.state.booklist.map((book:any,key:number)=> <Book  bookdata={book} key={key} />)}
        </ListGroup>
        {this.state.totalResults > 6 ? <Pagination totalPages={totalPages} currentPage={this.state.currentPage} nextPage={this.nextPage} /> : ''}
      </div>
    );
  }
}
export default BookList;
