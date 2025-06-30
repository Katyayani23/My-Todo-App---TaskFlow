const user = JSON.parse(localStorage.getItem('user'));
if(!user){
    window.location.href = 'imdex.html';
}

document.getElementById('user-name').textContent = user.name;
document.getElementById('avatar').src = 'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${user.name}';
document.getElementById('signOut').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'index.html';
});

let tasks = JSON.parse(localStorage.getItem('tasks')) || {todo: [], archived: []};

async function fetchDummyTodos() {
    if(!localStorage.getItem('fetched')){
        const res = await fetch('https://dummyjson.com/todos');
        const data = await res.json();

        tasks.todo = data.todos.slice(0 , 5).map(t => ({
            title: t.todo,
            timestamp: new Date().toLocaleString()
        }));

        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('fetched', 'true');
    }
    renderTasks();
}


function renderTasks(){
    ['todo', 'completed', 'archived'].forEach(stage => {
        const list = document.getElementById('${stage}-list');
        const count = document.getElementById('${stage}-count');
        list.innerHTML = '';
        tasks[stage].forEach((tasks, i) => {
            const div = document.createElement('div');
            div.className = 'task';
            div.innerHTML = `
            <strong>${task.title}</strong><br>
            <small${task.timestamp}</small><br>
            ${getButtons(stage, i)}
            `;
            list.appendChild(div);
        });

        count.textContent = tasks[stage].length;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function getButtons(stage, index) {
  const btns = [];
  const timestamp = new Date().toLocaleString();
  if (stage === 'todo') {
    btns.push(`<button onclick="moveTask('${stage}', 'completed', ${index})">Mark as Completed</button>`);
    btns.push(`<button onclick="moveTask('${stage}', 'archived', ${index})">Archive</button>`);
  } else if (stage === 'completed') {
    btns.push(`<button onclick="moveTask('${stage}', 'todo', ${index})">Move to Todo</button>`);
    btns.push(`<button onclick="moveTask('${stage}', 'archived', ${index})">Archive</button>`);
  } else {
    btns.push(`<button onclick="moveTask('${stage}', 'todo', ${index})">Move to Todo</button>`);
    btns.push(`<button onclick="moveTask('${stage}', 'completed', ${index})">Move to Completed</button>`);
  }
  return btns.join(' ');
}

function moveTask(from, to, index) {
  const task = tasks[from].splice(index, 1)[0];
  task.timestamp = new Date().toLocaleString();
  tasks[to].push(task);
  renderTasks();
}

document.getElementById('add-task').addEventListener('click', () => {
  const input = document.getElementById('new-task');
  const value = input.value.trim();
  if (!value) return;
  tasks.todo.push({ title: value, timestamp: new Date().toLocaleString() });
  input.value = '';
  renderTasks();
});

fetchDummyTodos();
