import { createStore } from "vuex";

const store = createStore({
  state: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodoText(state, payload) {
      const todo = state.todos.find((todo) => todo.id === payload.id);
      if (todo) {
        todo.text = payload.updatedText;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});

export default store;
