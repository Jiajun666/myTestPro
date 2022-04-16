<template>
    <div>{{ b }}</div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, onUpdated, ref } from 'vue'
import { newMap } from './ChildOne'

export default defineComponent({
    setup() {
        const b = ref('dklhglkghsklghklshgkshlk')
        onMounted(() => {
            const h = newMap.get('clickItem')
            console.log(h)
            if(h) {
                console.log(h())
            }
        })
        onBeforeMount(() => {
            console.log(97979)
        })
        onBeforeUnmount(() => {
            console.log(864)
        })
        onUnmounted(() => {
            console.log(666)
        })
        onUpdated(() => {
            console.log(4654546)
        })
        return {
            b
        } 
    },
})
</script>
<style scoped>

</style>
