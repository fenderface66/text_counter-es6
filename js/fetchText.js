import axios from 'axios';

export class FetchText {
  
  getText() {
    
    const request = axios({
      method: 'get',
      url: './model/book.txt',
    })
    
    return request;
  }
    
}