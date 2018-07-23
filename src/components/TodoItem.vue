<template>
    <div class="todo-item">
        <ui-checkbox :value="todo.completed" :class="done" @change="checkTodo()">{{todo.title}}</ui-checkbox>
        <div  @click="removeTodo">
            <ui-icon icon="cancel" class="ui-icon"></ui-icon>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object,
    index: Number
  },
  computed: {
      done () {
          return this.todo.completed ? "done-item" : "todo-item"
      }
  },
  methods: {
      removeTodo(){
          this.$emit("removeTodo", this.index)
      },
      checkTodo(){
          this.$emit("checkTodo", this.index)
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

