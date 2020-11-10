/**
 * 节流函数
 * @param method
 * @param wait
 * @returns {run}
 */
export default function (method, wait) {
    let start, timer
    return function run () {
        let self = this
        let args = arguments
        if (!start) {
            start = Date.now()
        }
        if (Date.now() - start >= wait) {
            method.apply(self, args)
            start = timer = void 0
        } else {
            timer && clearTimeout(timer)
            timer = setTimeout( ()=> {
                run.apply(self, args)
            }, wait)
        }
    }
}