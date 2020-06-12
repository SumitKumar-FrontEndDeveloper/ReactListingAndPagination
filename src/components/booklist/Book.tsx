import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Book = (props:any) => {
        console.log(props.bookdata);
        return (
            <ListGroup.Item className="bookItem">
            <div className="row">
              <div className="col-3 col-xs-3">
                {props.bookdata.bookImages.length > 0 ? <img className="bImage"  src={(props.bookdata.bookImages[0].bookThumbImage!=undefined && props.bookdata.bookImages[0].bookThumbImage!=null) ? props.bookdata.bookImages[0].bookThumbImage : require('../../img/nobook.jpeg') }  width="100" /> : <img src={require('../../img/nobook.jpeg')}  width="100"/> }
              </div>
               {/* name and title div  */}
              <div className="col-9 col-xs-9 infoBox">
                <div className="row nameTitleRow">
                  <div className="col-12 col-xs-12 bname">
                    {props.bookdata.bookTitle}
                  </div>
                  <div className="col-12 col-xs-12 wname">{props.bookdata.bookWriterName}</div>
                </div>

                {/* sellprice and mrp div  */}
                {props.bookdata.bookSellerType==1 ? <div className="row nameTitleRow" >
                  <div className="col-4 col-xs-4">
                    <div className="sell-price">
                    <i className="fa fa-inr" aria-hidden="true"></i>{props.bookdata.bookSellingPrice}
                    </div>
                    <div className="mrp-price"><i className="fa fa-inr" aria-hidden="true"></i>{props.bookdata.bookMrpPrice}</div>
                  </div>
                  <div className="col-8 col-xs-8">
                    <div className="save">You can save</div>
                    <div className="save-amount">
        <span><i className="fa fa-inr" aria-hidden="true"></i>{props.bookdata.bookMrpPrice-props.bookdata.bookSellingPrice}</span>
                      <span>({props.bookdata.discount}% Discount)</span>
                    </div>
                  </div>
                </div> : ''}

                {/* In case of reant cycle */}

                <div className="row" >
                        <div className="col-4 col-xs-4">
                            Rent Price : 
                    </div>
                    <div className="col-8 col-xs-8">
                            <div className="sell-price">
                                <i className="fa fa-inr" aria-hidden="true"></i>200
                            </div>
                    </div>
                </div>
                <div className="row" >
                        <div className="col-4 col-xs-4">
                            Rent Cycle : 
                    </div>
                    <div className="col-8 col-xs-8">
                            <div className="sell-price">
                                <i className="fa fa-inr" aria-hidden="true"></i>200
                            </div>
                    </div>
                </div>


                {/* Donation div */}
                {props.bookdata.bookSellerType==4 ? <div className="row">
                    <div className="col-12 col-xs-12 donateText">User want to donate this book</div>
                </div> : ''}
                
                

                {/* location and sell type div  */}

                <div className="row nameTitleRow">
                  <div className="col-8 col-xs-8 ">
                    <div className="locDistance">{props.bookdata.distance} KM from you</div>
                  </div>
                  <div className="col-4 col-xs-4 ">
        <div className="sell">
            {props.bookdata.bookSellerType==1 ? 'SELL' : ''}
            {props.bookdata.bookSellerType==2 ? 'RENT' : ''}
            {props.bookdata.bookSellerType==3 ? 'EXCHANGE' : ''}
            {props.bookdata.bookSellerType==4 ? 'DONATE' : ''}
        </div>
                  </div>
                </div>

              </div>
            </div>
          </ListGroup.Item>
        );
}
export default Book;