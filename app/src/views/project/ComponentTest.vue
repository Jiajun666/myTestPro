<template>
    <div>
        <AboutView/>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, onMounted, provide, computed, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { eventBus, eventBusEnmu } from '@/bus'
import AboutView from './AboutView.vue'

export default defineComponent({
    name: 'ComponentTest',
    components: {
        AboutView
    },
    setup() {
        const menuList = reactive([
            {iconPre: 'icon-a.png', iconAcPre: 'icon-sa.png', isActived: false, text: 'firstOne', iconAfter: 'icon-b.png', iconAcAf: 'icon-sb.png', path: '/childOne'},
            {iconPre: 'icon-c.png', iconAcPre: 'icon-sc.png', isActived: false, text: 'secondOne', iconAfter: 'icon-d.png', iconAcAf: 'icon-sd.png', path: '/childTwo'},
            {iconPre: 'icon-e.png', iconAcPre: 'icon-se.png', isActived: false, text: 'thirdOne', iconAfter: 'icon-f.png', iconAcAf: 'icon-sf.png', path: '/childOne'},
            {iconPre: 'icon-a.png', iconAcPre: 'icon-sa.png', isActived: false, text: 'fourthOne', iconAfter: 'icon-b.png', iconAcAf: 'icon-sb.png', path: '/childOne'},
            {iconPre: 'icon-c.png', iconAcPre: 'icon-sc.png', isActived: false, text: 'friOne', iconAfter: 'icon-d.png', iconAcAf: 'icon-sd.png', path: '/childOne'},
            {iconPre: 'icon-e.png', iconAcPre: 'icon-se.png', isActived: false, text: 'sixOne', iconAfter: 'icon-f.png', iconAcAf: 'icon-sf.png', path: '/childOne'},
            {iconPre: 'icon-a.png', iconAcPre: 'icon-sa.png', isActived: false, text: 'sevenOne', iconAfter: 'icon-b.png', iconAcAf: 'icon-sb.png', path: '/childOne'},
            {iconPre: 'icon-c.png', iconAcPre: 'icon-sc.png', isActived: false, text: 'eightOne', iconAfter: 'icon-d.png', iconAcAf: 'icon-sd.png', path: '/childOne'},
            {iconPre: 'icon-e.png', iconAcPre: 'icon-se.png', isActived: false, text: 'tenOne', iconAfter: 'icon-f.png', iconAcAf: 'icon-sf.png', path: '/childOne'},
            {iconPre: 'icon-a.png', iconAcPre: 'icon-sa.png', isActived: false, text: 'sevenOneb', iconAfter: 'icon-b.png', iconAcAf: 'icon-sb.png', path: '/childOne'},
            {iconPre: 'icon-c.png', iconAcPre: 'icon-sc.png', isActived: false, text: 'eightOneb', iconAfter: 'icon-d.png', iconAcAf: 'icon-sd.png', path: '/childOne'},
            {iconPre: 'icon-e.png', iconAcPre: 'icon-se.png', isActived: false, text: 'tenOneb', iconAfter: 'icon-f.png', iconAcAf: 'icon-sf.png', path: '/childOne'},
            {iconPre: 'icon-a.png', iconAcPre: 'icon-sa.png', isActived: false, text: 'sevenOnea of confirm', iconAfter: 'icon-b.png', iconAcAf: 'icon-sb.png', path: '/childOne'},
            {iconPre: 'icon-c.png', iconAcPre: 'icon-sc.png', isActived: false, text: 'eightOnea', iconAfter: 'icon-d.png', iconAcAf: 'icon-sd.png', path: '/childOne'},
            {iconPre: 'icon-e.png', iconAcPre: 'icon-se.png', isActived: false, text: 'tenOnea', iconAfter: 'icon-f.png', iconAcAf: 'icon-sf.png', path: '/childOne'}
        ])
        const router = useRouter()
        eventBus.emit(eventBusEnmu.list, menuList)
        const str = ref('456')
        provide('car',str)
        onMounted(() => {
            menuList.length > 0 && router.push(menuList[0].path)
            menuList[0].isActived = true // 保证进入页面第一个选项被选中
        })
        return {
            ...toRefs(menuList)
        }
    }
})
</script>
<style scoped>

</style>
