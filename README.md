# TodoList

Page Load ← GET from http://localhost:3000/tasks ← list all todo items with In-Progress category
Create New Item ← POST ← creates a new todo item
Edit Item ← Ellipsis Filter ← In-Progress ← GET /1 ← view detail of a specific todo item, where id = 1
Edit Task Model ← Save button ← PATCH /1 ← edits the todo item with id = 1
Ellipsis Menu Dropdown ← Ability to filter items in the todo list
Mark todo Item ← Moves Item to Completed
Ellipsis Filter ← Completed Items ← DELETE /1 ← deletes the todo item, with id = 1

## Front-end Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend server

1. cd to "/app/src/backend".
2. Run `json-server --watch db.json`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Specifically Written for TodoService

## Designed and Developer by - Mohammed Rokerya
