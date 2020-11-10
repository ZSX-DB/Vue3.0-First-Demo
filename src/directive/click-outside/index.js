// tmp存放监听事件
let tmp
let clickOuter = {
    mounted(el, binding) {
        const listen = e => {
            if(!el.contains(e.target)) binding.value()
        }
        tmp = listen
        document.addEventListener('click', listen)
    },
    unmounted() {
        document.removeEventListener('click', tmp)
    }
}

export default clickOuter