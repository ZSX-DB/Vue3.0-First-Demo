<template>
    <h2>Teleport允许我们更改dom元素的父节点指向</h2>
    <button @click="openMsg">打开Message组件</button>
    <Message :show-msg="showMsg" :message="msg"></Message>
</template>

<script>
    import Message from '../components/Message'
    import {ref} from 'vue'

    export default {
        name: "Telelport",
        components: {
            Message
        },
        setup() {
            let showMsg = ref(false)
            const openMsg = () => {
                showMsg.value = true
                setTimeout(() => {
                    showMsg.value = false
                }, 3200)
            }
            let msg = ref('自定义Message组件')
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