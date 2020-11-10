<template>
    <div>
        <h2 v-log>自定义指令</h2>
        <label>
            不使用指令
            <input/>
        </label>
        <br>
        <label>
            <span>使用指令</span>
            <input v-focus/>
        </label>
    </div>
    <button @click="changeSize">ChangeSize</button>
    <div class="rectangle" v-size="size"/>
    <hr>
    <select-box/>
</template>

<script>
    import {ref} from 'vue'
    import SelectBox from '../components/SelectBox'

    export default {
        name: "Directive",
        components: {
            SelectBox
        },
        setup() {
            let size = ref('400/300')

            const changeSize = () => {
                size.value = `${Math.random() * 1000}/${Math.random() * 1000}`
            }

            return {
                size, changeSize
            }
        }
    }
</script>

<style scoped>

    input {
        margin: 5px;
    }

    .rectangle {
        margin: 5px auto;
        background-color: #42b983;
        transition: all .3s;
    }

</style>