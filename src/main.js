import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 指令
import { clickOuter, focus, log, size } from './directive'

const app = createApp(App)

app.directive('focus', focus).directive('size', size)
    .directive('click-outer', clickOuter).directive('log', log)

// app支持链式调用，但mount必须在最后
app.use(router).mount('#app')