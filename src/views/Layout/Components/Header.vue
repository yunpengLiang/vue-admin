<template>
    <div id="header-wrap">
        <div class="pull-left header-icon" @click="navMenuState">
            <svg-icon className="menu" iconClass="menu" />
        </div>
        <div class="pull-right">
            <div class="user-info pull-left">
                <img src="../../../images/cloud.jpg" />{{ username }}
            </div>
            <div class="header-icon pull-right" @click="exit">
                <svg-icon className="exit" iconClass="exit" />
            </div>
        </div>
    </div>
</template>
<script>
// import Message from "element-ui";
import { computed } from "@vue/composition-api";
export default {
    name: "layoutHeader",
    setup(props, { root }) {
        const username = computed(() => root.$store.state.app.username);
        const navMenuState = () => {
            root.$store.commit("app/SET_COLLAPSE");
        };
        // 退出系统
        const exit = () => {
            root.$confirm("您确定要退出此系统吗?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                root.$store.dispatch("app/exit").then(() => {
                    root.$router.push({
                        name: "login"
                    });
                });
            });
            // return root.$store.dispatch("app/exit").then(() => {
            //     root.$router.push({
            //         name: "login"
            //     });
            // });
        };
        return {
            navMenuState,
            username,
            exit
        };
    }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header-wrap {
    position: fixed;
    top: 0;
    right: 0;
    left: $navMenu;
    height: 75px;
    line-height: 75px;
    background-color: #fff;
    @include webkit(transition, all 0.3s ease 0s);
    -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
}
.open {
    #header-wrap {
        left: $navMenu;
    }
}
.close {
    #header-wrap {
        left: $navMenuMin;
    }
}
.header-icon {
    padding: 0 32px;
    svg {
        font-size: 25px;
        margin-bottom: -8px;
        cursor: pointer;
    }
}
.user-info {
    height: 100%;
    padding: 0 32px;
    border-right: 1px solid #ededed;
    + .header-icon {
        padding: 0 28px;
    }
    > img {
        width: 36px;
        height: 36px;
        margin: 20px auto;
        margin-right: 18px;
        vertical-align: middle;
        border-radius: 100px;
    }
}
.header-icon {
    svg {
        color: #8a8a8a !important;
    }
}
.el-menu--popup-right-start {
    .el-menu-item {
        line-height: 56px !important;
    }
}
</style>
