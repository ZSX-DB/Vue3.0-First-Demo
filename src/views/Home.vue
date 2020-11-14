<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <BackTop/>
</template>

<script>

    // import axios from 'axios'

    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        setup() {
            // axios.get('/api/user').then(resp => {
            //     console.log('user为', resp.data)
            // })
            // axios.get('/api/hot').then(resp => {
            //     console.log('hot为', resp.data)
            // })
            // axios.get('/api/hotter').then(resp => {
            //     console.log('hotter为', resp.data)
            // })

            console.log(process.env)
        }
    }
</script>
