import '../css/app.scss';
import { FetchText } from './fetchText';
import { Counter } from './counter';
import { CreateList } from './createList';
import { ConsolePrint } from './consolePrint';

const fetchText = new FetchText;
const createList = new CreateList;
const consolePrint = new ConsolePrint;

window.onload = function() {
  fetchText.getText().then(function(res){
    const counter = new Counter(res);
    var list = counter.collectWords();
    createList.insertListToDom(list);
    consolePrint.createHistogram(list);
  }); 
}
