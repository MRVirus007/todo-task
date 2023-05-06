# TodoList

1. Page Load ← GET from http://localhost:3000/tasks ← list all todo items with In-Progress category
2. Create New Item ← POST ← creates a new todo item
3. Edit Item ← Ellipsis Filter ← In-Progress ← GET /1 ← view detail of a specific todo item, where id = 1
4. Edit Task Model ← Save button ← PATCH /1 ← edits the todo item with id = 1
5. Ellipsis Menu Dropdown ← Ability to filter items in the todo list
6. Mark todo Item ← Moves Item to Completed
7. Ellipsis Filter ← Completed Items ← DELETE /1 ← deletes the todo item, with id = 1

# Additional Feature

1. Drag and Drop List
2. Search Functionality

## Front-end Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend server

1. cd to "/app/src/backend".
2. Run `json-server --watch db.json`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Specifically Written for TodoService

## Designed and Developed by

Mohammed Rokerya

[LinkedIn](https://www.linkedin.com/in/mohammedrokerya/)
[Blog](https://mrokerya.com/)
[Notes App](https://play.google.com/store/apps/details?id=com.mrapp.notes)
