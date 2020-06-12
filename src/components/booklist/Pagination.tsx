import React from 'react';

const Pagination =(props:any) => {
    let pageLinks=[];
    for(let i=1; i<props.totalPages; i++) {
    let active = (i==props.currentPage ? 'active' : '');
    if(i<11){
        pageLinks.push(<li className={`pageLi ${active}`} onClick={()=>props.nextPage(i)}>{i}</li>);
    }
    
    }
    if(props.totalPages > 10){
        pageLinks.push('........');
        console.log("comoig");
    }
return (
        <div className="conatiner">
            <div className="row">
                <div className="col-12 paginationDiv">
                    <ul className="pagination">
                        {props.currentPage > 1 ? <li onClick={()=>props.nextPage(props.currentPage-1)}>PREV</li> : ''}
                       {pageLinks}
                       {props.currentPage < props.totalPages  ? <li onClick={()=>props.nextPage(props.currentPage+1)}>NEXT</li> : ''}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Pagination;