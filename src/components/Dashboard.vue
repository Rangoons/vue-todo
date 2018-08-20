<template>
  <div> 
    <AddTodo @addTodo="addTodo"/>
    <ApolloQuery
        :query="require('../queries/TODOS.js').default"
    >
    <template slot-scope="{ result: {loading, error, data } }">
        <span v-if="loading"> Loading... </span>
        <div v-if="data && !loading">
            <TodoItem v-for="(todo, index) in data.allTodos" :key="todo.id" :index="index" :todo="todo" @removeTodo="removeTodo" @checkTodo="checkTodo"/>
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
    data() {
        return {
            todos: [],
        };
    },
    methods: {
        addTodo(payload) {
            this.todos.push({
                id: this.todos.length + 1,
                title: payload,
                completed: false,
            });
        },
        removeTodo(payload) {
            this.todos.splice(payload, 1);
        },
        checkTodo(payload) {
            this.todos[payload].completed = !this.todos[payload].completed;
        },
    },
};
</script>

