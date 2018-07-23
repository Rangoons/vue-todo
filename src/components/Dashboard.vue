<template>
  <div> 
    <AddTodo @addTodo="addTodo"/>
    <TodoItem v-for="(todo, index) in todos" :key="todo.id" :index="index" :todo="todo" @removeTodo="removeTodo" @checkTodo="checkTodo"/>
  </div>
</template>

<script>
import axios from 'axios'
import TodoItem from './TodoItem.vue';
import AddTodo from './AddTodo.vue';

export default {
    name: 'Dashboard',
    components: {
        TodoItem,
        AddTodo
    },
    data() {
        return {
            todos: []
        }
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
        .then(
            (res)=>{
                this.todos = res.data
            }
        )
        .catch((err) => console.log(err))
    },
    methods: {
        addTodo (payload) {
            this.todos.push({
                id: this.todos.length + 1,
                title: payload,
                completed: false
            })
        },
        removeTodo (payload) {
            this.todos.splice(payload, 1)
        },
        checkTodo (payload) {
            this.todos[payload].completed = !this.todos[payload].completed
        }
    }
};
</script>

