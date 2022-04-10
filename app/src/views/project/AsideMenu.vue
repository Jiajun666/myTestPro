<template>
    <div class="aside" :class="{'thrink':mini, 'stretch':!mini}">
        <div class="info">
            <div class="circle">
                <span>{{ shortName }}</span>
            </div>
            <div class="full-name">{{ fullName }}</div>
            <div class="trans">
                <span v-if="!mini">tansform late</span>
                <span class="arrow">></span>
            </div>
            <hr>
        </div>
        <div class="menu">
            <div
                class="item"
                v-for="(item, index) in menuList"
                :key="item.text"
                :class="{'actived': current === index}"
                @click="clickItem(item, index)"
            >
                <div class="pre">
                    <img v-if="!item.isActived" :src="require(`/src/assets/${item.iconPre}` )">
                    <img v-else :src="require(`/src/assets/${item.iconAcPre}` )">
                </div>
                <div class="text" v-if="!mini" :class="{'actived': current === index}">{{ item.text }}</div>
                <div class="after">
                    <img  v-if="!item.isActived" :src="require(`/src/assets/${ item.iconAfter }`)">
                    <img v-else :src="require(`/src/assets/${ item.iconAcAf }`)">
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import router from '@/router'
import { computed, defineComponent, ref } from 'vue'
export default defineComponent({
    props: {
        mini: {
            type: Boolean,
            default: () => false
        },
        fullName: {
            type: String,
            default: () => ''
        },
        menuList: {
            type: Array,
            default: () => []
        }
    },
    emits: ['select-item'],
    setup(prop, { emit }) {
        const current = ref(0)
        const shortName = computed(() => {
            if (!prop.fullName) return ''
            let nameArr = prop.fullName.split(' ')
            return nameArr.length === 1 ? nameArr[0].slice(0, 1) : nameArr[0].slice(0, 1) + nameArr[1].slice(0, 1)
        })
        interface menuListObj {
            iconPre: string,
            iconAcPre: string,
            isActived: boolean,
            text: string,
            iconAfter: string,
            iconAcAf: string,
            path: string
        }
        const clickItem = (item: menuListObj, index: number): void => {
            current.value = index
            const params = [item, index]
            emit('select-item', params)
            // emit('select-item', item, index)
            /* prop.menuList.forEach((list: any, idx: number) => {
                list.isActived = idx === index ? true : false
            }) */
        }
        return {
            current,
            shortName,
            clickItem
        }
    }
})
</script>
<style lang="scss" scoped>
.aside {
    width: 188px;
    height: calc(100% - 52px);
    padding-top: 52px;
    background-color: #eee;
    transition: width .5s;
    overflow-y: hidden;
}
.aside:hover {
    overflow-y: auto;
}
.info {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.info > .circle {
    width: 50px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: #b53232;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 10px;
}
.info > .full-name {
    font-weight: bold;
}
.info > .trans {
    margin-top: 20px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.info > .trans > .arrow {
    color: #f00;
    padding: 0 10px;
    font-size: 14px;
    cursor: pointer;
}
.info > hr {
    width: 80%;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    margin: 0;
}
.menu {
    padding-bottom: 36px;
}
.item {
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    user-select: none;
}
.item > .pre, .item > .after {
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.item img {
    width: 16px;
    height: 16px;
}
.item .text {
    font-size: 14px;
    color: #999;
    width: 68px;
    text-align: start;
}
.thrink {
  width: 88px;
}
.stretch {
  width: 188px;
}
.menu > .item .actived {
    color: #f00;
}
.menu > .item.actived {
    margin-top: 8px;
}
.aside::-webkit-scrollbar {
    width: 0px;
    display: flex;
    right: 0;    
}
.aside::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.aside::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);

}
</style>