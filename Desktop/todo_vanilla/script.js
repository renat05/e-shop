let message = document.querySelector('.message'),
    btn = document.querySelector('.add'),
    todo = document.querySelector('.todo');

    let todoList = []
    
    if(localStorage.getItem('todoList')){
        todoList = JSON.parse(localStorage.getItem('todoList'))
        displayMessages();
    }
    btn.addEventListener('click', function() {
        let todo = {
            todo: message.value,
            checked: false,
            important: false
        }
        todoList.push(todo)
        localStorage.setItem('todoList', JSON.stringify(todoList))
    })

    function displayMessages ()  {
        let displayMessage = ''
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