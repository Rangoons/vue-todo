<template>
  <div> 
    <AddTodo/>
    <ApolloQuery
        :query="require('../queries/TODOS.js').default"
    >
    <template slot-scope="{ result: {loading, error, data } }">
        <span v-if="loading"> Loading... </span>
        <div v-if="data && !loading">
            <TodoItem v-for="todo in data.todoes" :key="todo.id" :todo="todo"/>
        </div>
    </template>
    </ApolloQuery>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import AddTodo from './AddTodo.vue';

export default {
    name: 'Dashboard',
    components: {
        TodoItem,
        AddTodo,
    },
};
</script>

