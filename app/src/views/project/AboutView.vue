<template>
  <div class="box">
    <div class="main">
      <HeaderBar
        :mini="mini"
        :title="title"
      />
      <AsideMenu
        :mini="mini"
        :fullName="fullName"
        :menuList="menuList"
        @select-item="changePage"
      />
      <div class="container">
        <router-view/>
      </div>
      <div class="footer" :class="{'thrink':mini, 'stretch':!mini}" @click="toggleMini">
        <span v-if="!mini">Hide Navigation</span>
        <span v-else>❤❤❤❤❤</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, reactive, inject } from 'vue'
import { useRouter } from 'vue-router'
import HeaderBar from '@/views/project/HeaderBar.vue'
import AsideMenu from '@/views/project/AsideMenu.vue'
export default defineComponent({
  name: 'AboutView',
  components: {
    HeaderBar,
    AsideMenu
  },
  setup() {
    const router = useRouter()
    const mini = ref(false)
    const title = ref('This is a test page')
    const fullName = ref('Jerry Wei')
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
    // const list = inject('car')
    // console.log(list)
    const toggleMini = () => mini.value = !mini.value;
    const changePage = (val: any): void => {
      router.push(val[0].path) // 进入子路由
      // 点击变色
      menuList.forEach((list: any, idx: number) => {
          list.isActived = idx === val[1] ? true : false
      })
    }
    return {
      mini,
      title,
      fullName,
      toggleMini,
      menuList,
      changePage,
      router
    }
  },
  mounted() {
      this.menuList.length >0 && this.router.push(this.menuList[0].path)
      this.menuList[0].isActived = true // 保证进入页面第一个选项被选中
  }
});
</script>

<style scoped>
.box {
  width: 800px;
  height: 600px;
  border: 1px solid #eee;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px 6px #000;
}
.main {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
}
.container {
  flex: 1;
  padding-top: 52px;
}
.footer {
  height: 36px;
  background-color: #ddd7d7;
  box-shadow: inset 0px 0px 0px 1px #ddd7d7;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #938d8d;
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
  transition: width .5s;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.thrink {
  width: 88px;
}
.stretch {
  width: 188px;
}
</style>
