<template>
    <div id="select-box" v-click-outer="setHide">
        <div class="toggle up-down-center" @click="setWhetherShow">请选择</div>
        <div class="combobox" v-if="showCombobox">
            下拉框
        </div>
    </div>
</template>

<script>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    export default {
        name: "SelectBox",
        setup(){
            let showCombobox = ref(false)

            const setWhetherShow = () => {
                showCombobox.value = !showCombobox.value
            }

            const setHide = () => {
                showCombobox.value = false
            }

            // const listen = e => {
            //     const selectBox = document.querySelector('#select-box')
            //     if(!selectBox.contains(e.target)) showCombobox.value = false
            // }

            onMounted(()=>{
                // document.addEventListener('click', listen)
            })

            // 卸载前移除监听
            onBeforeUnmount(()=>{
                // document.removeEventListener('click', listen)
            })

            return{
                showCombobox,
                setWhetherShow,
                setHide
            }
        }
    }
</script>

<style scoped>

    #select-box{
        /*不指定宽度，会独占一行，导致点击区域减少*/
        width: 100px;
    }

    .up-down-center{
        display: flex;
        align-items: center;
    }

    .toggle{
        padding: 0 10px;
        width: 100px;
        height: 30px;
        border: 2px solid #cbcbcb;
        box-sizing: border-box;
        cursor: pointer;
    }

    .combobox{
        padding: 10px;
        width: 100px;
        height: 100px;
        box-sizing: border-box;
        background-color: #cbcbcb;
    }


</style>