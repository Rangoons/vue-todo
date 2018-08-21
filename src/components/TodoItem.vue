<template>
    <ApolloMutation
        :mutation="query"
        :variables="{
            id: todo.id,
            completed: !todo.completed
        }"
    >
    <template slot-scope="{mutate, loading, error}">
        <div class="todo-item">
            <ui-checkbox :value="todo.completed" :class="done" @change="mutate">{{todo.title}}</ui-checkbox>
            <RemoveTodo :id="todo.id"/>
        </div>
    </template>
    </ApolloMutation>
</template>

<script>
import RemoveTodo from './RemoveTodo';
import UPDATE_TODO from '../queries/UPDATE_TODO';
export default {
  name: 'TodoItem',
  components: {
      RemoveTodo
  },
  props: {
    todo: Object,
  },
  data(){
      return {
          query: UPDATE_TODO
      }
  },
  computed: {
      done () {
          return this.todo.completed ? "done-item" : "todo-item"
      }
  }
}
</script>

<style>
    .done-item {
        font-style: italic;
    }
    .todo-item {
        font-style: bold;
        width: max-content;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .ui-icon {
        margin-left: 7px !important;
        margin-top: 0 !important;
        font-size: 20px !important;
        cursor: pointer !important;
    }
    .ui-icon:hover{
        color: #7F0000;
    }
</style>

