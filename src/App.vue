<template>
    <nav>
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
        |
        <router-link to="/new">New</router-link>
        |
        <router-link to="/computed">Computed</router-link>
        |
        <router-link to="/watch">Watch</router-link>
        |
        <router-link to="/router">Router</router-link>
        |
        <router-link to="/life-cycle">LifeCycle</router-link>
        |
        <router-link to="/directive">Directive</router-link>
        |
        <router-link to="/mixin">Mixin</router-link>
        |
        <router-link to="/teleport">Teleport</router-link>
        |
        <router-link to="/dom">Dom</router-link>
        |
        <router-link to="/env">Env</router-link>
    </nav>
    <router-view/>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    nav {
        padding: 30px;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
