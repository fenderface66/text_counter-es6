import '../css/app.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { FetchText } from './fetchText';
import { Counter } from './counter';

const fetchText = new FetchText;

window.onload = function() {
  fetchText.getText().then(function(res){
    const counter = new Counter(res.data);
    console.log(res);
    counter.collectWords();
  }); 
}
