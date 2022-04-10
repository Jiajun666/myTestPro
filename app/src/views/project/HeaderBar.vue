<template>
    <div class="header">
        <div class="header-left" :class="{'thrink':mini, 'stretch':!mini}">
            <div class="menu">三</div>
            <hr>
        </div>
        <div class="header-right">
            <div class="title">
                <span>{{ fullName }}</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        mini: {
            type: Boolean,
            default: () => false
        },
        fullName: {
            type: String,
            default: () => ''
        }
    }
})
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 52px;
    background-color: #333d47;
    position: fixed;
    top: 0;
    right: 0;
    border-bottom-left-radius: 15px;
    display: flex;
    z-index: 2000;
}
.header > .header-left {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    transition: width .5s;
}
.header > .header-left > .menu {
    position: absolute;
    left: 10px;
    color: #fff;
    cursor: pointer;
}
.header > .header-left > hr {
    width: 1px;
    height: 36px;
    background-color: #fff;
    opacity: .6;
    position: absolute;
    right: 0;
    transform: scaleX(.5);
}
.header > .header-right {
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
}
.header > .header-right > .title {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
}
.header > .header-right > .title > span {
    margin-left: 10px;
}
.thrink {
  width: 88px;
}
.stretch {
  width: 188px;
}
</style>
