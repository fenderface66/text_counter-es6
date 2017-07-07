//Import Classes
import '../css/app.scss';
import { FetchText } from './fetchText';
import { Counter } from './counter';
import { CreateList } from './createList';
import { ConsolePrint } from './consolePrint';

//Instantiate Classes
const fetchText = new FetchText;
const createList = new CreateList;
const consolePrint = new ConsolePrint;

//On window load
window.onload = function() {
  //Get book text
  fetchText.getText().then(function(res){
    const counter = new Counter(res);
    var list = counter.collectWords();
    createList.insertListToDom(list);
    consolePrint.createHistogram(list);
  }); 
}
