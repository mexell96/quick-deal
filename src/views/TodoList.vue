<template>
  <div class="container">
    <h1 class="title">Todo List</h1>
    <div class="add-todo">
      <input
        class="todo-input"
        v-model="newTodo"
        placeholder="Add a new task"
        @keydown.enter="addTodoItem"
      />
      <button class="add-button" @click="addTodoItem">Add</button>
    </div>
    <ul class="todo-list">
      <TheTodo
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @update-todo-text="updateTodoText"
        @remove-todo="removeTodoItem"
      />
    </ul>
  </div>
</template>

<script>
import TheTodo from "../components/TheTodo";

export default {
  name: "TodoList",
  components: {
    TheTodo,
  },
  data() {
    return {
      newTodo: "",
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    addTodoItem() {
      if (this.newTodo.trim()) {
        const todo = {
          id: Date.now(),
          text: this.newTodo,
        };
        this.$store.commit("addTodo", todo);
        this.newTodo = "";
      }
    },
    removeTodoItem(todo) {
      this.$store.commit("removeTodo", todo.id);
    },
    updateTodoText(payload) {
      this.$store.commit("updateTodoText", payload);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 500px;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.add-todo {
  display: flex;
  margin-bottom: 20px;
}

.todo-input {
  border-radius: 4px;
  border: 1px solid #ccc;
  flex-grow: 1;
  font-size: 16px;
  padding: 8px;
}

.add-button {
  background-color: #4caf50;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  padding: 8px 16px;
}

.add-button:hover {
  background-color: #45a049;
}

.todo-list {
  list-style: none;
  padding: 0;
}
</style>
