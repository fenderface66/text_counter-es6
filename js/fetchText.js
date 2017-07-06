import { Http } from './http';
const http = new Http;

export class FetchText {
  
  getText() {
    
    const request = http.makeRequest('GET', './model/book.txt');

    return request;
  }
    
}