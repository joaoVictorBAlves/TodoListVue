import { defineStore } from 'pinia';

export const useTodoList = defineStore('todoList', {
    // define the shape of our store
    state: () => ({
        todoList: [],
        id: 0,
    }),
    // actions that modify the state
    actions: {
        addTodo(todo) {
            this.todoList.push({ todo: todo, id: this.id++ });
        },
        removeTodo(id) {
            this.todoList = this.todoList.filter((todo) => todo.id !== id);
        }
    }
});