<template>
    <button @click="toHome">ToHome</button>
</template>

<script>
    import {useRoute, useRouter} from 'vue-router'

    export default {
        name: "Router",
        setup() {
            // 获取当前路由
            const currentRoute = useRoute()
            console.log(currentRoute.path)
            // 获取路由实例
            const router = useRouter()

            const toHome = () => {
                router.push('/')
            }

            return {
                toHome
            }

        }
    }
</script>

<style scoped>

    button {
        margin: 10px;
    }

</style>