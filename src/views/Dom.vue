<template>
    <h2>通过ref操作dom</h2>
    <div class="block" ref="block">
        BLOCK
    </div>
</template>

<script>
    import {ref, onMounted} from 'vue'

    export default {
        name: "Dom",
        setup() {
            // 这里我们在渲染上下文中暴露 block，并通过 ref="block"，将其绑定到 div 作为其 ref
            const block = ref(null)
            onMounted(() => {
                console.log('DOM', block.value)
                console.log(block.value.clientWidth, block.value.clientHeight)
            })
            return {
                block
            }
        }
    }
</script>

<style scoped>
    .block {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px auto;
        width: 250px;
        height: 108px;
        font-weight: 900;
        font-size: 32px;
        background-color: #42b983;
    }
</style>