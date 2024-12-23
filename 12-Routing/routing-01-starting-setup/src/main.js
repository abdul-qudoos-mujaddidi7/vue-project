import { createApp } from 'vue';
import {createRouter,createWebHashHistory} from 'vue-router'
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import App from './App.vue';

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/teams' , component:TeamsList}, // our.domain.com.teams => TeamList
        {path:'/users', component:  UsersList}

    ],
});
const app = createApp(App);
app.use(router);
app.mount('#app');