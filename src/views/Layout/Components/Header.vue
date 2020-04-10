<template>
    <div id="header-wrap">
        <div class="pull-left header-icon">
            <svg-icon className="menu" iconClass="menu" />
        </div>
        <div class="pull-right">
            <div class="user-info pull-left">
                <img src="../../../images/cloud.jpg" />管理员
            </div>
            <div class="header-icon pull-right">
                <svg-icon className="exit" iconClass="exit" />
            </div>
        </div>
    </div>
</template>
<script>
export default {};
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
    -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
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
</style>
