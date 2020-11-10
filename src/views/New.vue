<template>
    <!--    3.0支持多个根标签-->

    <!--    虽然传统的方式可以定义数据，但优先级不如setup-->
    <!--    页面中出现了h2标签，但无值-->
    <h2>{{ oldWay }}</h2>

    <h2>{{ newWay.label }}</h2>
    <h2>{{ newWay.elseLabel }}</h2>
    <span>---------------------------------------------------</span>
    <h3>{{ name }}</h3>
</template>

<script>

    // 演示如何创建响应式的数据
    import {reactive, ref} from 'vue'

    export default {
        name: "New",
        data() {
            return {
                OldWay: '传统方式定义数据'
            }
        },
        setup() {
            // reactive定义数据
            const newWay = reactive({
                label: '新方式定义数据',
                elseLabel: '多定义'
            })
            setTimeout(() => {
                newWay.elseLabel = '重新定义'
            }, 5000)

            const name = ref('ZSX')

            // eslint-disable-next-line vue/no-ref-as-operand
            console.log('ref', name, typeof name)
            console.log('reactive', newWay, typeof newWay)

            setTimeout(() => {
                name.value = 'ZES'
            }, 5000)

            // 必须以{}标签的方式return
            return {
                newWay, name
            }
        }
    }
</script>

<style scoped>

</style>