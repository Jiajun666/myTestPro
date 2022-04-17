<template>
    <div>我是祖父组件</div>
    <Child
        :arr-list="arrNew"
    />
</template>
<script lang='ts'>
import { defineComponent, provide, reactive, ref } from 'vue'
import Child from './Child.vue'

export default defineComponent({
    name: 'GrandParent',
    components: {
        Child
    },
    setup() {
        const arr = ref([
            {name: 'w', age: '20', toggle: false},
            {name: 's', age: '23', toggle: false},
            {name: 'd', age: '26', toggle: false}
        ])
        const arrNew = ref([
            {name: 'rr', age: '22', sex: '0'},
            {name: 'rs', age: '24', sex: '1'},
            {name: 'rd', age: '26', sex: '0'}
        ])
        const changeArr = (item:any, index:number) => {
            arr.value[index].toggle = !arr.value[index].toggle
            arr.value[index].name = arr.value[index].toggle ? 'jiajun': 'wei'
        }
        provide('change', changeArr)
        provide('list', arr)
        return {
            arrNew,
            arr
        }
    }
})
</script>
