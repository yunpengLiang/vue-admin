<template>
    <div id="main-wrap">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: "index"
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#main-wrap {
    position: fixed;
    left: $navMenu;
    top: 75px;
    right: 0;
    bottom: 0;
    border: 30px solid #f7f7f7;
    border-bottom: 0;
    -webkit-box-sizing: border;
}
</style>
