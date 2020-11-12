<template>
    <h2>Teleport允许我们更改dom元素的父节点指向</h2>
    <button @click="openMsg">打开Message组件</button>
    <Message :show-msg="showMsg" :message="msg"></Message>
</template>

<script>
    import Message from '@Component/Message'
    import {ref} from 'vue'

    export default {
        name: "Telelport",
        components: {
            Message
        },
        setup() {
            let showMsg = ref(false)
            let msg = ref('自定义Message组件')

            // 连续点击仍有bug
            let timer
            const openMsg = () => {
                clearTimeout(timer)
                showMsg.value = true
                // 设置setTimeout的时间稍微快于组件透明度为0的时间，避免闪烁
                timer = setTimeout(() => {
                    showMsg.value = false
                }, 3000)
            }

            return {
                showMsg,
                msg,
                openMsg
            }
        }
    }
</script>

<style scoped>
</style>