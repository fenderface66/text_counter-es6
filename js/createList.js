export class CreateList {
  
  insertListToDom(list) {
    var listContainer = document.querySelector('.list-container');
    
    list.map(function(listItem, index){
      var li = document.createElement("li");
      li.innerHTML = (index + 1) + ') ' + listItem[0] + ': ' + listItem[1];
      li.classList.add('list-group-item');
      
      listContainer.appendChild(li);
      listContainer.insertBefore(li, listContainer.lastChild);
      
    })
    
  }
    
}