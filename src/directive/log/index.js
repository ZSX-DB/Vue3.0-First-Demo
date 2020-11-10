// 仅用于观察参数
let log = {
    mounted(el, binding, vNode, prevNode){
        console.log('v-log',el, binding.value, vNode, prevNode)
    }
}

export default log