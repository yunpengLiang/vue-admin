<template>
    <div id="nav-wrap">
        <img src="../../../images/logo.png" alt="logo" class="logo" />
        <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
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
import { /**ref,*/ reactive, computed } from "@vue/composition-api";
export default {
    name: "navMenu",
    setup(props, { root }) {
        const routers = reactive(root.$router.options.routes);
        /****************************************************
        computed监听
         */
        const isCollapse = computed(() => root.$store.state.app.isCollapse);
        return {
            routers,
            isCollapse
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
    @include webkit(transition, all 0.3s ease 0s);
    svg {
        font-size: 20px;
        margin-right: 10px;
        color: #fff;
    }
}
#nav-wrap > img {
    display: block;
    margin: 30px auto;
    @include webkit(transition, all 0.3s ease 0s);
}
.open {
    #nav-wrap {
        width: $navMenu;
    }
}
.close {
    #nav-wrap {
        width: 64px;
        .logo {
            margin: auto;
            margin-top: 30px;
            width: 70%;
        }
    }
}
</style>
