let message = document.querySelector('.message'),
    btn = document.querySelector('.add'),
    todo = document.querySelector('.todo');

    let todoList = []
    
    if(localStorage.getItem('todoList')){
        todoList = JSON.parse(localStorage.getItem('todoList'))
        displayMessages();
    }
    btn.addEventListener('click', function() {
        if(!message.value) return
         let todo = {
            todo: message.value,
            checked: false,
            important: false
        }
        todoList.push(todo)
        localStorage.setItem('todoList', JSON.stringify(todoList))
        message.value = ''
    })

    function displayMessages ()  {
        let displayMessage = '';
        todoList.forEach(function (item, i)  {
            displayMessage += `
            <li>
                <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
                <label for='item_${i}'> ${item.todo} </label>
            </li>
        `;
            todo.innerHTML = displayMessage;
        })
    }
    todo.addEventListener('change', (e) => {
        let idInput = e.target.getAttribute('id').replace('item_', ''); // Получаем индекс элемента из ID
        let label = document.querySelector(`label[for='item_${idInput}']`); // Находим соответствующую метку
        let valueLabel = label.textContent; // Получаем текстовое содержимое метки
    
        // Обновляем свойство checked в массиве todoList
        todoList[idInput].checked = e.target.checked;
    
        // Сохраняем обновленный список задач в localStorage
        localStorage.setItem('todoList', JSON.stringify(todoList));
    });
    