import { Login } from "@/api/login.js";
import {
    setToken,
    setUsername,
    getUsername,
    removeToken,
    removeUsername
} from "@/utils/app.js";
const state = {
    isCollapse: JSON.parse(sessionStorage.getItem("isCollapse")) || false,
    token: "",
    username: getUsername() || ""
};
const getters = {
    states: state => state.isCollapse
};
const mutations = {
    //同步不需要同步处理事情
    SET_COLLAPSE(state) {
        state.isCollapse = !state.isCollapse;
        sessionStorage.setItem("isCollapse", JSON.stringify(state.isCollapse));
    },
    SET_TOKEN(state, value) {
        state.token = value;
    },
    SET_USERNAME(state, value) {
        state.username = value;
    }
};
const actions = {
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
    },
    exit({ commit }) {
        return new Promise((resolve, reject) => {
            removeToken();
            removeUsername();
            commit("SET_TOKEN", "");
            commit("SET_USERNAME", "");
            resolve();
            console.log(reject);
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
