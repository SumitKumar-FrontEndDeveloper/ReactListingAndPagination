import { range,pipe, Observable ,from,throwError,of} from "rxjs";
import { map, filter,catchError,timeoutWith} from "rxjs/operators";
const apiurl="http://used-book.in/usedbookbackend/public/api/v1/";

export const invokeAsyncService = (apiEndUrl : string,methodType:string,data:any):Observable<any> => {
  var headers=new Headers();
  let token="thisistoken";
  if(token!="") {    
      headers.append('Content-Type', 'application/json');
       } else {  
      headers.append('Authorization', '0');
      headers.append('Content-Type', 'application/json');
    }
    let apiUrl = apiurl + apiEndUrl;
    let httpResponse;
    if(methodType=="GET") {
      httpResponse=fetch(apiUrl, { method: 'get', headers: headers});
    } else {
      httpResponse=fetch(apiUrl, { method: 'post', headers: headers ,body:data});
    } 
    let bdata=httpResponse.then((result)=>{
      return result.json();
    })
    return from(bdata).pipe(map((res)=>{
      return res;
    }),catchError(err => handleError),timeoutWith(20000, requestTimeoutLogger()));
    
}
export const requestTimeoutLogger=()=> {
  return of("timeout");
}
export const handleError=(error:any)=>{ console.log("coming in error");
  let errorMessage = 'Unknown error!';
  if (error.error instanceof ErrorEvent) {
    // Client-side errors
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Server-side errors
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
 }

  



