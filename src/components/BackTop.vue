<template>
    <teleport to="#top">
        <div id="top-block"></div>
        <div class="center icon-box" @click="backTop">
            <svg class="icon" viewBox="0 0 1025 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
                <path d="M533.204945 247.840277c-11.435995-13.314876-30.184888-13.314876-41.620883 0l-342.378861 399.573165c-11.435995 13.319992-6.434858 24.25659 11.19346 24.25659l128.001279 0c17.621155 0 31.995203 14.379165 31.995203 32.007483l0 256.048609c0 17.626271 14.378142 32.00339 32.001343 32.00339l320.002175 0c17.628318 0 31.996226-14.378142 31.996226-32.00339L704.394887 703.678539c0-17.629342 14.376095-32.007483 32.005437-32.007483l127.999232 0c17.621155 0 22.624339-10.937621 11.185273-24.25659L533.204945 247.840277z"
                      p-id="3331" fill="#1296db"></path>
                <path d="M192.395911 159.573836l640.002303 0c35.375346 0 64.00064-28.633481 64.00064-64.011897 0-35.382509-28.625294-64.011897-64.00064-64.011897l-640.002303 0c-35.371252 0-63.99757 28.629387-63.99757 64.011897C128.398341 130.940356 157.023635 159.573836 192.395911 159.573836z"
                      fill="#1296db"/>
            </svg>
        </div>
    </teleport>
</template>

<script>
    export default {
        name: "BackTop",
        setup() {
            const backTop = () => {
                document.querySelector('#top-block').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
            return{
                backTop
            }
        }
    }
</script>

<style scoped>
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-box {
        position: fixed;
        top: 80vh;
        right: 80px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
        background-color: #fff;
        cursor: pointer;
    }

    .icon {
        width: 44px;
        height: 44px;
    }
</style>