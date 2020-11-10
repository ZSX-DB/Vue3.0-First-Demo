import {ref, computed} from 'vue'

export default function () {
    let count = ref(0)
    let double = computed(() => count.value * 2)
    const increment = () => {
        count.value++
    }
    return {
        count, double, increment
    }
}