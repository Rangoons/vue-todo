import Vue from 'vue';
import App from './App.vue';
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

const apolloProvider = new VueApollo({
    defaultClient: new ApolloClient({
        uri: 'https://api-useast.graphcms.com/v1/cjl2ruqt101yy01bn88ns66yt/master',
    }),
});

Vue.use(VueApollo);
Vue.use(KeenUI);

Vue.config.productionTip = false;

new Vue({
    provide: apolloProvider.provide(),
    render: h => h(App),
}).$mount('#app');
