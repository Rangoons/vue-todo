<template>
    <div class="todo-item">
        <ui-checkbox v-model="completed" :class="done">{{todoName}}</ui-checkbox>
    </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    id: Number, 
    todoName: String,
    checked: Boolean
  },
  data () {
    return {
        completed: this.checked
    }
  },
  computed: {
      done () {
          return this.completed ? "done-item" : "todo-item"
      }
  },
  methods: {
      asdf: ()=>{
          alert("cliecked")
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
    }
</style>

