<template>
    <div id="layout-wrap" :class="[menuStates ? 'close' : 'open']">
        <LayoutHeader />
        <LayoutNav />
        <LayoutMain />
    </div>
</template>
<script>
import LayoutHeader from "./Components/Header";
import LayoutNav from "./Components/Nav";
import LayoutMain from "./Components/Main";
import { computed } from "@vue/composition-api";
export default {
    name: "layout",
    components: { LayoutHeader, LayoutNav, LayoutMain },
    setup(props, { root }) {
        const menuStates = computed(() => root.$store.state.app.isCollapse);
        return {
            menuStates
        };
    }
};
</script>
<style lang="scss" scoped>
#layout-wrap {
    background-color: #f7f7f7;
}
</style>
