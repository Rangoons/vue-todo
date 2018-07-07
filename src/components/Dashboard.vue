<template>
  <TodoItem v-for="(todo, index) in todos" :key="index" :todoName="todo.todoName" :checked="todo.checked" />
</template>

<script>
import todos from '../../mock-data/mock.js';
import TodoItem from './TodoItem.vue'

export default {
  name: 'Dashboard',
  components: {
    TodoItem
  },
  data(){
      return {
          todos
      }
  }
}
</script>

