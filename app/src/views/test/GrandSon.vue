<template>
    <div class="grand-son">我是孙组件</div>
    <div class="item" v-for="(item, index) in arr1" :key="item.name" @click="clikeItem(item, index)">
        <span>{{ item.name }}___</span>
        <span>{{ item.age }}</span>
    </div>
    <!-- <div v-for="item in grandList" :key="item.name">
        <span>{{ item.name }}___</span>
        <span>{{ item.age }}___</span>
        <span>{{ item.sex }}</span>
    </div> -->
</template>
<script lang='ts'>
import { defineComponent, inject, ref, watch } from 'vue'

export default defineComponent({
    name: 'GrandSon',
    props: {
        grandList: {
            type: Array,
            default: () => []
        }
    },
    setup(props) {
        watch(props.grandList,(newVal, oldVal) => {
            console.log(newVal, oldVal)
        })
        // const newList:any = ref(JSON.parse(JSON.stringify(props.grandList)))
        // newList.value[0].name = 'weo'
        const arr1 = inject('list')
        console.log(arr1)
        const handleArr:any = inject('change')
        const clikeItem = (item:any, index:number) => {
            handleArr(item, index)
        }
        return {
            arr1,
            // newList,
            clikeItem
        }
    }
})
</script>
<style scoped>
    .grand-son {
        color: #f00
    }
    .item {
        cursor: pointer;
        user-select: none;
    }
</style>
