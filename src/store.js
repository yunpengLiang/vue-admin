import Vue from "vue";
import Vuex from "vuex";
import { Login } from "@/api/login.js";
import { setToken, setUsername } from "@/utils/app.js";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isCollapse: JSON.parse(sessionStorage.getItem("isCollapse")) || false,
        token: "",
        username: ""
    },
    getters: {
        states: state => state.isCollapse
    },
    mutations: {
        //同步不需要同步处理事情
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse;
            sessionStorage.setItem(
                "isCollapse",
                JSON.stringify(state.isCollapse)
            );
        },
        SET_TOKEN(state, value) {
            state.token = value;
        },
        SET_USERNAME(state, value) {
            state.username = value;
        }
    },
    actions: {
        // content.state
        // content.getters
        // content.commit
        // content.rootGetters
        // content.rootState
        login(content, requestData) {
            return new Promise((resolve, reject) => {
                Login(requestData)
                    .then(response => {
                        let data = response.data.data;
                        content.commit("SET_TOKEN", data.token);
                        content.commit("SET_USERNAME", data.username);
                        setToken(data.token);
                        setUsername(data.username);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    },
    modules: {}
});
