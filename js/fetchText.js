import { Http } from './http';
const http = new Http;

export class FetchText {
  
  getText() {
    
    //Store request and return as a promise
    const request = http.makeRequest('GET', './model/book.txt');

    return request;
  }
    
}