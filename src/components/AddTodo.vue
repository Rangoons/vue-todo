<template>
    <ApolloMutation
        :mutation="query"
        :variables="{
            title,
            completed: false
        }"
        :update="update"
        @done="onDone"
    >
    <template slot-scope="{ mutate, loading, error }">
    <ui-textbox ref="todoTextbox" v-model="title" @keydown-enter="mutate" class="addTodo">
        Add a Todo
    </ui-textbox>
    <span v-if="error">Error... Try again</span>
    <span v-if="loading">Loading...</span>
    </template>
    </ApolloMutation>
</template>

<script>
import ADD_TODO from '../queries/ADD_TODO';
import TODOS from '../queries/TODOS';
export default {
  name: 'AddTodo',
  data() {
    return {
      query: ADD_TODO,
      title: '',
    };
  },
  methods: {
    immutablePush(arr, newEntry) {
      return [...arr, newEntry];
    },
    update(store, { data: { createTodo } }) {
      // Read the data from our cache for this query.
      const prev = store.readQuery({ query: TODOS });
      // Add our todo from the mutation to the end
      const data = immutablePush(prev.todoes, createTodo);
      // Write our data back to the cache.
      store.writeQuery({ query: TODOS, data });
    },
    onDone() {
      this.$refs.todoTextbox.reset();
    },
  },
};
</script>

<style>
.addTodo {
  margin-bottom: 40px !important;
}
</style>

