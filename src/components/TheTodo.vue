<template>
  <li class="todo-item">
    <div class="todo-content">
      <div v-if="!isEditing" class="todo-text">{{ todo.text }}</div>
      <div v-else class="edit-container">
        <input
          class="todo-input"
          v-model="updatedText"
          @keydown.enter="updateTodoText"
        />
        <div class="edit-buttons">
          <button class="save-button" @click="updateTodoText">Save</button>
          <button class="cancel-button" @click="cancelEditing">Cancel</button>
        </div>
      </div>
      <div v-if="!isEditing">
        <button class="edit-button" @click="editTodoItem">Edit</button>
        <button class="remove-button" @click="removeTodoItem">Remove</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "TheTodo",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEditing: false,
      updatedText: "",
    };
  },
  methods: {
    editTodoItem() {
      this.isEditing = true;
      this.updatedText = this.todo.text;
    },
    updateTodoText() {
      if (this.updatedText.trim() !== "") {
        this.$emit("update-todo-text", {
          id: this.todo.id,
          updatedText: this.updatedText,
        });
        this.cancelEditing();
      }
    },
    cancelEditing() {
      this.isEditing = false;
      this.updatedText = "";
    },
    removeTodoItem() {
      this.$emit("remove-todo", this.todo);
    },
  },
};
</script>

<style scoped>
.todo-item {
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}

.todo-content {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.todo-text {
  flex-grow: 1;
}

.edit-container {
  display: flex;
  flex-grow: 1;
}

.todo-input {
  flex-grow: 1;
}

.edit-buttons {
  display: flex;
  margin-left: auto;
}

.edit-buttons > div:first-child {
  flex-grow: 1;
}

.save-button {
  background-color: #2196f3;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  padding: 4px 8px;
}

.save-button:hover {
  background-color: #1976d2;
}

.cancel-button {
  background-color: #ff9800;
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  padding: 4px 8px;
}

.cancel-button:hover {
  background-color: #e69138;
}

.edit-button,
.remove-button {
  padding: 4px 8px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

.edit-button:hover {
  background-color: #d32f2f;
}

.remove-button:hover {
  background-color: #b71c1c;
}
</style>
