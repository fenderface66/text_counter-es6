export class ConsolePrint {
  
  createHistogram(arr) {
    
    var histogram = [];
    
    arr.map(function(wordItem) {
      var barLength = Math.floor(wordItem[1] / 25);
      var bars = '|'.repeat(barLength);
      
      histogram.push([wordItem[0], bars])
    })
    
    console.table(histogram);
  }
    
}