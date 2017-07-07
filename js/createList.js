export class CreateList {
  
  insertListToDom(list) {
    var listContainer = document.querySelector('.list-container');
    
    //Map over list
    list.map(function(listItem, index){
      var li = document.createElement("li");
      //Create string from list data
      li.innerHTML = (index + 1) + ') ' + listItem[0] + ': ' + listItem[1];
      li.classList.add('list-group-item');
      
      //Append new populated li to containing ul
      listContainer.appendChild(li);
      listContainer.insertBefore(li, listContainer.lastChild);
      
    })
    
  }
    
}