<template>
    <div>
        输入名字:
        <label>
            <input v-model="name">
        </label>
    </div>
    <div>
        我的电子设备<br>
        ------------------------<br>
        <label>
            <input v-model="electronics.phone">
        </label>
        -
        <label>
            <input v-model="electronics.mouse">
        </label>
    </div>
    <div>
        <label>
            <input v-model="fun">
        </label>
        -
        <label>
            <input v-model="pony.num">
        </label>
        -
        <label>
            <input v-model="pony.like">
        </label>
    </div>
    <div>
        <label>
            <select v-model="selectData">
                <option value="animal">animal</option>
                <option value="plant">plant</option>
            </select>
            <select v-model="selectChildData">
                <option v-for="(item,index) in selectList" :value="item" :key="index">{{ item }}</option>
            </select>
        </label>
    </div>
</template>

<script>
    import {reactive, ref, watch, watchEffect} from 'vue'

    export default {
        name: "Watch",
        setup() {
            const name = ref('')
            const electronics = reactive({
                phone: 'LG v50',
                mouse: 'Razer'
            })

            watch(name, (newVal, oldVal) => {
                console.log(newVal, oldVal)
            })

            // 能监听到改变，不能监听到变化
            watch(electronics, (newVal, oldVal) => {
                console.log('监听electronics ', newVal, oldVal)
            })

            // watch可以监听函数
            watch(() => `My phone is ${electronics.phone}, and my mouse is ${electronics.mouse}`,
                (newVal) => {
                    console.log(newVal)
                })

            const fun = ref('fun')
            const pony = reactive({
                num: 6,
                like: 'Rarity'
            })

            watch([fun, pony], ([newFun, newPony], [oldFun, oldPony]) => {
                // ref创建的能正确监听，reactive不能
                console.log(newFun, oldFun)
                console.log(newPony, oldPony)
            })

            const selectData = ref('')
            const selectChildData = ref('')


            let selectList = ref([])

            // 在响应式地跟踪其依赖项时立即运行一个函数，并在更改依赖项时重新运行它
            watchEffect(() => {
                if (selectData.value === 'animal') {
                    // 这里尝试过使用reactive定义selectList,无法做到响应式更新
                    selectList.value = ['dog', 'cat', 'pig']
                } else if (selectData.value === 'plant') {
                    selectList.value = ['tomato', 'apple', 'onion']
                }
            })

            return {
                name, electronics, fun, pony, selectData, selectChildData, selectList
            }
        }
    }
</script>

<style scoped>
    div {
        margin: 10px;
    }
</style>