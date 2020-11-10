<template>
    <div>
        <h2>展示setup的生命周期</h2>
        {{ n }}
    </div>
</template>

<script>

    import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref} from 'vue'

    export default {
        name: "LifeCycle",
        setup() {
            // onBeforeMount代替2.0中的beforeMount
            onBeforeMount(() => {
                console.log('onBeforeMount')
            })
            // onMounted代替2.0中的mounted
            onMounted(() => {
                console.log('onMounted')
            })

            const n = ref(3)

            // 最优做法，不要在onBeforeUpdate和beforeUpdate里修改数据
            onBeforeUpdate(() => {
                // n.value = 7
                console.log('onBeforeUpdate', n)
            })

            onUpdated(() => {
                // 报错Maximum recursive updates exceeded
                // 当在onBeforeUpdate和onUpdated同时更改数据，使得过程无限重复，递归爆栈
                n.value = 9
                console.log('onUpdated', n)
            })

            setTimeout(() => {
                n.value = 5
            }, 3000)

            return {
                n
            }

        }
    }
</script>

<style scoped>

</style>