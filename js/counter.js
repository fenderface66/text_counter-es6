export class Counter {
  
  //Initialise class with book text
  constructor(text) {
    this.text = text;
    this.words = [];
    
  }
  
  collectWords() {
    this.text = this.text.replace(/[.,\/#“”"!?$%\^&\*;:{}=\-_`~()]/g, " ")
    this.text = this.text.replace(/(\r\n|\n|\r)/gm, " ");
    this.words = this.text.split(' ');
    
    return this.orderWordsByFrequency(this.words);
  }
  
  orderWordsByFrequency(arr) {
    var frequency = {}, value;
    var uniques = [];
    var topTwenty = [];
    
    // Compute frequencies of each value
    for(var i = 0; i < arr.length; i++) {
        //Check if word is longer than 3 letters
        if (arr[i].length > 3) {
          value = arr[i];
          //Add to value if it currently exists in obj
          if(value in frequency) {
              frequency[value]++;
          }
          //Create new property on obj if it does not already exist
          else {
              frequency[value] = 1;
          }   
        }
    }

    // Create an array purely from property names so that
    // all duplicates are removed
    for(value in frequency) {
        uniques.push(value);
    }

    // Sort the uniques array in descending order by frequency
    function compareFrequency(a, b) {
        //Compare the frequency of each array item
        //from the previous item
        return frequency[b] - frequency[a];
    }

    //Return the sorted array with highest frequency at the the lowest index
    uniques.sort(compareFrequency).slice(0, 20).map(function(word, index){
      topTwenty.push([word, frequency[word]]);
    });
    
    return topTwenty;

  }
  
}