export class Counter {
  
  //Initialise class with boook text
  constructor(text) {
    this.text = text;
    this.words = [];
  }
  
  
  collectWords() {
    this.text = this.text.replace(/(\r\n|\n|\r)/gm," ");
    this.words = this.text.split(/[ ,.!?]+/);
    console.log(this.words);
  }
  
    
}