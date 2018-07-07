<template >
  <div> 
    <TodoItem v-for="(todo) in todos" :key="todo.id" :todoName="todo.todoName" :checked="todo.checked" />
  </div>
</template>

<script>
import todos from '../../mock-data/mock.js';
import TodoItem from './TodoItem.vue';

export default {
    name: 'Dashboard',
    components: {
        TodoItem,
    },
    data() {
        return {
            todos,
        };
    },
};
</script>

