<template>
    <ApolloMutation
        :mutation="query"
        :variables="{
            id
        }"
        :update="update"
    >
        <template slot-scope="{ mutate, loading, error }">
            <div  @click="mutate">
                <ui-icon icon="cancel" class="ui-icon"></ui-icon>
            </div>
        </template>
    </ApolloMutation>
</template>

<script>
import REMOVE_TODO from '../queries/REMOVE_TODO';
import TODOS from '../queries/TODOS';
export default {
    name: 'RemoveTodo',
    props: {
        id: String,
    },
    data() {
        return {
            query: REMOVE_TODO,
            refetch: TODOS,
        };
    },
    methods: {
        update(store, { data: { deleteTodo } }) {
            const prev = store.readQuery({ query: TODOS });
            const data = {};
            data.todoes = prev.todoes.filter(o => o.id !== deleteTodo.id);
            // Write our data back to the cache.
            store.writeQuery({ query: TODOS, data });
        },
    },
};
</script>

<style>
.ui-icon {
    margin-left: 7px !important;
    margin-top: 0 !important;
    font-size: 20px !important;
    cursor: pointer !important;
}
.ui-icon:hover {
    color: #7f0000;
}
</style>

