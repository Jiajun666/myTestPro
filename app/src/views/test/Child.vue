<template>
    <div class="child">我是子组件</div>
    <GrandSon
        :grand-list="arrList"
    />
</template>
<script>
import { defineComponent, inject } from 'vue'
import { setup } from 'vue-class-component'
import GrandSon from './GrandSon.vue'

export default defineComponent({
    name: 'Child',
    components: {
        GrandSon
    },
    props: {
        arrList: {
            type: Array,
            default: () => []
        }
    }
})
</script>
<style scoped>
.child {
    color: #00f
}
</style>
