const app = document.querySelector('#app');

app.innerHTML = `
  <div style="max-width:400px;margin:40px auto;font-family:Arial;">
    <h2>Task Tracker</h2>

    <input id="taskInput" placeholder="Enter task..." />
    <button id="addBtn">Add</button>

    <ul id="taskList"></ul>
  </div>
`;

const input = document.getElementById('taskInput');
const button = document.getElementById('addBtn');
const list = document.getElementById('taskList');

button.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;

  // клік: викреслення / виконано
  li.addEventListener('click', () => {
    li.style.textDecoration =
      li.style.textDecoration === 'line-through'
        ? 'none'
        : 'line-through';
  });

  list.appendChild(li);
  input.value = '';
});