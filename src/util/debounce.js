/**
 * 防抖函数
 * @param method
 * @param delay
 * @returns {function(...[*]=)}
 */
export default function (method, delay) {
    let timer = void 0
    return () => {
        let self = this
        let args = arguments
        timer && clearTimeout(timer)
        timer = setTimeout(()=> {
            method.apply(self, args)
            timer = void 0
        }, delay)
    }
}