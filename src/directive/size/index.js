// let size = {
//     mounted: (el, binding)=>{
//         console.log('size',binding)
//         let [width, height] = binding.value.split('/')
//         el.style.width = `${width}px`
//         el.style.height = `${height}px`
//     },
//     updated: (el, binding) => {
//         let [width, height] = binding.value.split('/')
//         el.style.width = `${width}px`
//         el.style.height = `${height}px`
//     }
// }

// 在上面中，mounted和updated里触发的行为是相同的，可以简写

let size = (el, binding) => {
    let [width, height] = binding.value.split('/')
    el.style.width = `${width}px`
    el.style.height = `${height}px`
}


export default size