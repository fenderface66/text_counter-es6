export class ConsolePrint {
  createHistogram(arr) {
    var histogram = [];
    arr.map(function (wordItem, index) {
      if (index < 5) {
        var barLength = Math.floor(wordItem[1] / 75);
        var bars = '|'.repeat(barLength);
        histogram.push([wordItem[0], bars])
      }
    })
    console.table(histogram);
  }
}