<template>
    <div class="first-box">
        <div class="box-wrap">
            <div class="wrap-header">
                <input type="text" @keyup.enter="add" v-model="msg" class="header-ipt">
            </div>
            <p v-if="arr.length === 0" class="wrap-p">暂无项目</p>
            <ul class="wrap-item" v-else>
                <li class="item" v-for="(e, index) in arr" :key="index">
                    <label>
                        <span>{{ e }}</span>
                    </label>
                    <button class="btn btn-danger" @click="del(index)">删除</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
    import { ref, Ref, defineComponent } from 'vue'
    export default defineComponent ({
        setup() {
            const msg = ref('');
            const arr: Ref = ref([]);
            const add = () => {
                if (msg.value !== '') {
                    arr.value.unshift(msg.value.trim());
                    msg.value = '';
                }
            };
            const del = (index: number) => {
                arr.value.splice(index, 1)
            }
            return {
                msg,
                arr,
                add,
                del
            }
        }
    })
</script>
<style lang="scss" scoped>
    body {
        background-color: #fff;
    }
    .first-box {
        width: 600px;
        max-height: 400px;
        margin: 0 auto;
        overflow-x: hidden;
        overflow-y: auto;
        .box-wrap {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #fbf9f9;
            .header-ipt {
                width: 560px;
                height: 28px;
                font-size: 14px;
                border: 1px solid #ddd;
                border-radius: 5px;
                padding: 4px 7px;
                &:focus {
                    outline: none;
                    border-color: rgba(82, 168, 236, 0.8);
                }
            }
            .wrap-p {
                color: #999;
            }
            .wrap-item {
                margin-left: 0px;
                border-radius: 2px;
                padding: 0px;
                border: 1px solid #ddd;
                .item {
                    list-style: none;
                    height: 36px;
                    line-height: 36px;
                    padding: 0 5px;
                    border-bottom: 1px solid #ddd;
                    label {
                        float: left;
                    }
                    &:last-child {
                        border-bottom: none;
                    }
                }
                .btn {
                    display: inline-block;
                    padding: 4px 12px;
                    margin-bottom: 0;
                    margin-right: 0;
                    font-size: 14px;
                    line-height: 20px;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
                        0 1px 2px rgba(0, 0, 0, 0.05);
                    border-radius: 4px;
                    &:hover {
                        color: #fff;
                        background-color: #bd362f; 
                    }
                    &:focus {
                        outline: none;
                    }
                }
                .btn-danger {
                    color: #fff;
                    background-color: #da4f49;
                    border: 1px solid #bd362f;
                    float: right;
                    margin-top: 3px;
                }
            }
        }
    }
</style>
