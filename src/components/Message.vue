<template>
    <!--    将该dom挂载到#msg下，与#app同级-->
    <teleport to="#top">
        <div class="msg-box up-down-center" v-if="showMsg">
            {{ message }}
        </div>
    </teleport>
</template>

<script>

    export default {
        name: "Message",
        props: {
            showMsg: {
                type: Boolean,
                default: false
            },
            message: {
                type: String,
                default: 'This is message'
            }
        },
        setup(props) {
            console.log(props.showMsg, props.message)
        }
    }
    // 如果需要定时清理节点，固定的父节点更好管理，当然，在vue中，使用v-if是更简单的做法
    // setTimeout(()=>{
    //     document.querySelector('#top').removeChild(document.querySelector('.msg-box'))
    // }, 3200)
</script>

<style scoped>

    .up-down-center {
        display: flex;
        align-items: center;
    }

    .msg-box {
        /*对于相对定位和绝对定位，使用固定的父节点更为可控*/
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 15px;
        width: 300px;
        min-width: 300px;
        height: 48px;
        color: #fff;
        background-color: #42b983;
        animation: enter-leave 3.2s;
    }

    @keyframes enter-leave {
        0% {
            transform: translateY(0);
            opacity: 0;
        }
        14% {
            transform: translateY(30px);
            opacity: 1;
        }
        86% {
            transform: translateY(30px);
            opacity: 1;
        }
        100% {
            transform: translateY(0);
            opacity: 0;
        }
    }


</style>