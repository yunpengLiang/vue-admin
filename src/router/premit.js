import router from "./index";
import { getToken, removeToken, removeUsername } from "@/utils/app";
import store from "@/store/index";
const whiteRouter = ["/login"];
router.beforeEach((to, from, next) => {
    if (getToken()) {
        // 路由动态添加，分配菜单，每个角色分配不同的菜单
        next();
    } else {
        if (whiteRouter.indexOf(to.path) != -1) {
            if (to.path == "/login") {
                removeToken();
                removeUsername();
                store.commit("app/SET_TOKEN", "");
                store.commit("app/SET_USERNAME", "");
                next();
            } else {
                next();
            }
        } else {
            next("/login");
        }
        /**
         * 1、直接进入index的时候，参数to被改变成“/index”，触发路由指向，会执行beforeEach
         * 2、再一次next指向login，再一次发生路有指向，再跑beforeEach，参数to被改变成“/login”
         * 3、白名单判断存在，则直接执行next，因为没有参数所以不会执行beforeEach
         */
    }
    next();
});
