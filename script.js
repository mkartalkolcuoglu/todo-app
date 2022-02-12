const form = document.querySelector('form');
const input = document.querySelector('#new-item-title');
const deleteAll = document.querySelector('#deleteAll');
const itemList = document.querySelector('#item-list');
eventListeners();


function eventListeners(){
form.addEventListener('submit',addNewItem);
itemList.addEventListener('click',deleteItem);
deleteAll.addEventListener('click',deleteAllItems)
}

function deleteItem(e){
  if(e.target.className === 'btn btn--alert') {
    e.target.parentElement.parentElement.remove();
  }
      e.preventDefault();

}

function addNewItem(e){

  if(input.value===''){
    alert('Lütfen bir görev ekleyiniz...');
  }
  if(input.value.length > 0) {
  const div = document.createElement('div');
  div.className = 'to-do-item';

  const divTitle = document.createElement('div');
  divTitle.className = 'to-do-item__title';
  divTitle.appendChild(document.createTextNode(input.value));

  div.appendChild(divTitle);
  itemList.appendChild(div);

  const divAction = document.createElement('div');
  divAction.className = 'to-do-item__action';

  const divActionButton = document.createElement('button');
  divActionButton.setAttribute('type','button')

  divActionButton.className = 'btn btn--alert';
  divActionButton.appendChild(document.createTextNode('görevi tamamla'));

  divAction.appendChild(divActionButton);
  div.appendChild(divAction);

  input.value = '';

  
  e.preventDefault();
}}

function deleteAllItems(e){

  if(confirm('Emin misiniz ?')){
    itemList.innerHTML='';
  }

  e.preventDefault();
}