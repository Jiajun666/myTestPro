<template>
    <div>{{ a }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const a = ref('dklhglkghsklghklshgkshlk')
        return {
            a
        } 
    },
})
</script>
<style scoped>

</style>
