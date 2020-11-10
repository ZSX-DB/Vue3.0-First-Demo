<template>
    {{ mixinVal }}
    <hr>
    很多时候，mixin不是一个好的选择，可能造成命名冲突，隐式依赖等问题<br>
    Composition api正是为了解决这一问题
    <hr>
    {{ count }}-------
    <button @click="increment">increment</button>
    -------{{ double }}
</template>

<script>

    import {ref, reactive} from 'vue'
    import userCount from '../util/count'

    // mixin无法使用setup
    const mouseMixin = {
        data() {
            return {
                mixinVal: 'MIXIN'
            }
        },
        created() {
            let mouse = ref('mouse')
            console.log('mouse', mouse)
        }
    }

    const keyboardMixin = {
        mounted() {
            let keyboard = reactive({
                brand: 'vpro',
                keyNum: 87
            })
            console.log('keyboard', keyboard)
        }
    }

    export default {
        name: "Mixin",
        mixins: [mouseMixin, keyboardMixin],
        setup() {
            // 更优雅地复用
            const {count, double, increment} = userCount()
            return {
                count,
                double,
                increment
            }
        }
    }
</script>

<style scoped>

</style>