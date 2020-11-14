<template>
    <h2>
        process.env始终可用的还有两个特殊的变量
    </h2>
    <h3>
        NODE_ENV - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式
    </h3>
    <h3>
        BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径
    </h3>
    VUE_APP_SECRET : {{ secret }}
</template>

<script>
    import {ref} from 'vue'

    export default {
        name: "Env",
        setup() {
            let secret = ref(process.env.VUE_APP_SECRET)
            console.log(process.env)
            return {
                secret
            }
        }
    }
</script>

<style scoped>

</style>