<template>
    <ui-textbox ref="todoTextbox" v-model="todoName" @keydown-enter="addTodo" class="addTodo">
        Add a Todo
    </ui-textbox>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
      return {
          todoName: ''
      }
  },
  methods: {
      addTodo () {
          this.$emit("addTodo", this.todoName)
          this.$refs.todoTextbox.reset()
      }
  }
}
</script>

<style>
.addTodo{
    margin-bottom: 40px !important;
}
</style>

