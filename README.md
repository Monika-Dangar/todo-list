# To-Do List Application
This is a simple To-Do List Application built using React. It allows users to add, delete, mark tasks as completed, and edit tasks. The application is designed to be responsive and user-friendly.

### GitHub
[ToDo List](https://github.com/Monika-Dangar/todo-list)

### Features:
- Add new tasks
- Mark tasks as completed
- Edit tasks
- Delete tasks
- Task list is dynamically rendered
- Simple and intuitive UI with hover effects

### Technologies Used:
- React (Functional Components, Hooks)
- CSS for styling
- Vite as the development environment

### How it works:
- App Component:
It serves as the main container, rendering the Header and ToDoList components.

- Header Component:
Displays the title of the application.

- ToDoList Component:
Manages the list of tasks.
Allows adding, editing, deleting, and marking tasks as completed.
Dynamically renders the tasks using the map() function.

- ToDoItem Component:
Represents a single to-do item.
Includes a checkbox to mark a task as completed, buttons to edit and delete the task.

- Styling:
The app is styled with CSS to be visually appealing, with hover effects on buttons and a clean design for the task list.
Responsive design is implemented using media queries to ensure the app looks great on mobile devices.

### Folder Structure:
```bash
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── ToDoList.js
│   │   └── ToDoItem.js
│   ├── App.css
│   └── App.js
├── index.html
├── package.json
└── README.md
```
