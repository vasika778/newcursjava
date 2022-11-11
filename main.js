(function() {

   // создаем и возвращаем заголовок приложения
   function createAppTitle(title) {

      let appTitle = document.createElement('h2');
      appTitle.innerHTML = title;
      return appTitle;
   }
   
   // создаем и возвращаем форму для создания дела
   function createTodoItemForm() {
       let form = document.createElement('form');
       let input = document.createElement('input');
       let buttonWrapper = document.createElement('div');
       let button = document.createElement('button');
           
       form.classList.add('input-group', 'mb-3');
       input.classList.add('form-control');
       input.placeholder = 'Веедите название нового дела';
       buttonWrapper.classList.add('input-group-append');
       button.classList.add('btn', 'btn-primary');
       button.textContent = 'Добавить дело';

       buttonWrapper.append(button);
       form.append(input);
       form.append(buttonWrapper);

      return {
         form,
         input,
         button,
      };

}

   // создаем и возращаем список элементов
   function createTodoList() {
   let list = document.createElement('ul');
   list.classList.add('list-group');
   return list;


   }
   function createTodoItem (name) {
      let item =  document.createElement('li');
      
      // кнопки помещаем в элемент
      let buttonGroup = document.createElement('div')
      let doneButton = document.createElement('button');
      let deletButton = document.createElement('button');

      // Пищем стиль для резмещеня кнокок 
      item.classList.add('list-gruop-item', 'd-flex', 'justify-content-between', 'align-items-center');
      item.textContent = name;
      
      buttonGroup.classList.add('btn-group', 'btn-group-sm');
      doneButton.classList.add('btn', 'btn-success');
      doneButton.textContent = 'Готово';
      deletButton.classList.add('btn', 'btn-danger');
      deletButton.textContent = 'Удалить';
      
      //кнопки в отдельном элементе
          buttonGroup.append(doneButton);
          buttonGroup.append(deletButton);
          item.append(buttonGroup);
      
      
      // событие нажатие      
      return {
         item,
         doneButton,
         deletButton,
      };
      
   
}

function createTodoApp(container, title='Список дел семьи Крохиных') {
let todoAppTitle =createAppTitle(title);
   let todoItemForm = createTodoItemForm();
   let todoList = createTodoList ();
  

   container.append(todoAppTitle);
   container.append(todoItemForm.form);
   container.append(todoList);

 todoItemForm.form.addEventListener('submit', function(e) {

 e.preventDefault();

 if (!todoItemForm.input.value) {
   return;
}

//Добавляем в список
 //  todoList.append(createTodoItem(todoItemForm.input.value).item);


 let todoItem = createTodoItem(todoItemForm.input.value);

 //оброботчик кнопки
 todoItem.doneButton.addEventListener('click', function() {
   todoItem.item.classList.toggle('list-group-item-success');
      } );

      todoItem.deletButton.addEventListener('click', function() { 

      if (confirm('Вы уверены')) {
         todoItem.item.remove();

      }

});

todoList.append(todoItem.item);


   todoItemForm.input.value = '';
 });

}

   document.addEventListener('DOMContentLoaded', function(){  

      createTodoApp(document.getElementById('my-todos'), 'Дела Васи');
      createTodoApp(document.getElementById('mom-todos'), 'Дела Ларисы');
      createTodoApp(document.getElementById('dote-todos'), 'Дела Маши');

   });

})();