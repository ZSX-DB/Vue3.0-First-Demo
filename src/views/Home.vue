<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <BackTop/>
</template>

<script>

    import service from "../util/req";
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        },
        setup() {

            service.get('/user').then(resp => {
                console.log('user为', resp.data)
            })
            service.get('/hot').then(resp => {
                console.log('hot为', resp.data)
            })
            service.get('/hotter').then(resp => {
                console.log('hotter为', resp.data)
            })

        }
    }
</script>
