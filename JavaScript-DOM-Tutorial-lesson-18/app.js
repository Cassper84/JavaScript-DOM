// document.addEventListener('DOMContentLoaded', function(){

//   const list = document.querySelector('#book-list ul');
//   const forms = document.forms;

//   // delete books
//   list.addEventListener('click', (e) => {
//     if(e.target.className == 'delete'){
//       const li = e.target.parentElement;
//       li.parentNode.removeChild(li);
//     }
//   });

//   // add books
//   const addForm = forms['add-book'];
//   addForm.addEventListener('submit', function(e){
//     e.preventDefault();

//     // create elements
//     const value = addForm.querySelector('input[type="text"]').value;
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');

//     // add text content
//     bookName.textContent = value;
//     deleteBtn.textContent = 'delete';

//     // add classes
//     bookName.classList.add('name');
//     deleteBtn.classList.add('delete');

//     // append to DOM
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
//   });

//   // hide books
//   const hideBox = document.querySelector('#hide');
//   hideBox.addEventListener('change', function(e){
//     if(hideBox.checked){
//       list.style.display = "none";
//     } else {
//       list.style.display = "initial";
//     }
//   });

//   // filter books
//   const searchBar = forms['search-books'].querySelector('input');
//   searchBar.addEventListener('keyup', (e) => {
//     const term = e.target.value.toLowerCase();
//     const books = list.getElementsByTagName('li');
//     Array.from(books).forEach((book) => {
//       const title = book.firstElementChild.textContent;
//       if(title.toLowerCase().indexOf(e.target.value) != -1){
//         book.style.display = 'block';
//       } else {
//         book.style.display = 'none';
//       }
//     });
//   });

//   // tabbed content
//   const tabs = document.querySelector('.tabs');
//   const panels = document.querySelectorAll('.panel');
//   tabs.addEventListener('click', (e) => {
//     if(e.target.tagName == 'LI'){
//       const targetPanel = document.querySelector(e.target.dataset.target);
//       Array.from(panels).forEach((panel) => {
//         if(panel == targetPanel){
//           panel.classList.add('active');
//         }else{
//           panel.classList.remove('active');
//         }
//       });
//     }
//   });

// })

















// DELETE BOOKS

const list = document.querySelector("#book-list ul");
list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
})

// ADD BOOKS
const addForm = document.forms['add-book']
addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userValue = addForm.querySelector('input[type="text"]').value;

// CREATE ELEMENT
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

// ADD CONTENT
bookName.textContent = userValue;
deleteBtn.textContent = 'delete';

// ADD CLASSES
bookName.classList.add('name');
deleteBtn.classList.add('delete')


// APPEND ELEMENT TO DOM
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
})

// HIDE BOOKS
const hideBox = document.querySelector("#hide");
hideBox.addEventListener('change', (e) => {
    if(hideBox.checked){
        list.style.display = 'none';
    }
    else{
        list.style.display = 'block'
    }
})
// FILTER BOOKS
const searchBar = document.forms["search-books"].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            book.style.display = 'block';
        }
        else{
            book.style.display = 'none'
        }
    })
})
