export class ConsolePrint {
  createHistogram(arr) {
    var histogram = [];
    //Map over array
    arr.map(function (wordItem, index) {
      //Only consider the first five items
      if (index < 5) {
        //Calcualte the number of bars as a division
        //of the word count
        var barLength = Math.floor(wordItem[1] / 75);
        var bars = '|'.repeat(barLength);
        //Push bar data into array
        histogram.push([wordItem[0], bars])
      }
    })
    //Log as table
    console.table(histogram);   
  }
}