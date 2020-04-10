<template>
    <div id="nav-wrap">
        <img src="../../../images/logo.png" alt="logo" />
        <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            background-color="transparent"
            text-color="#FFF"
            active-text-color="#FFF"
            router
        >
            <template v-for="(item, index) in routers">
                <el-submenu
                    v-if="!item.hidden"
                    :key="item.id"
                    :index="index + ''"
                >
                    <template slot="title">
                        <svg-icon
                            :className="item.meta.icon"
                            :iconClass="item.meta.icon"
                        />
                        <span slot="title">{{ item.meta.name }}</span>
                    </template>
                    <el-menu-item
                        v-for="subItem in item.children"
                        :key="subItem.id"
                        :index="subItem.path"
                        >{{ subItem.meta.name }}</el-menu-item
                    >
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>
<script>
import { ref, reactive } from "@vue/composition-api";
export default {
    name: "navMenu",
    setup(props, { root }) {
        const routers = reactive(root.$router.options.routes);
        /****************************************************
        elementUI自带方法
         */
        const isCollapse = ref(false);
        const handleOpen = (key, keyPath) => {
            console.log(key, keyPath);
        };
        const handleClose = (key, keyPath) => {
            console.log(key, keyPath);
        };
        return {
            routers,
            isCollapse,
            handleOpen,
            handleClose
        };
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#nav-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: $navMenu;
    height: 100vh;
    background-color: #344a5f;
    svg {
        font-size: 20px;
        margin-right: 10px;
        color: #fff;
    }
}
#nav-wrap > img {
    display: block;
    margin: 30px auto;
}
</style>
