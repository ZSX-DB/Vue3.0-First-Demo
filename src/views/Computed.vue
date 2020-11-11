<template>
    <h1>计算属性</h1>
    <div>
        当前时间---One: {{ now1 }}
    </div>
    <div>
        当前时间---Two: {{ now2 }}
    </div>
    <div>
        当前时间---Three: {{ now3 }}
    </div>
    <div>
        当前时间---Four: {{ now4 }}
    </div>
    <div>
        书多吗?
        {{ booksIntroduce }}
    </div>
    <div>
        <button @click="addBooks">增加书的数量</button>
        <br>
        {{ books }}
    </div>
    <div>
        firstName:
        <label>
            <input v-model="firstName">
        </label><br>
        lastName:
        <label>
            <input v-model="lastName">
        </label><br>
        <!--        可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的-->
        <!--        然而，不同的是计算属性是基于它们的反应依赖关系缓存的-->
        <!--        计算属性只在相关响应式依赖发生改变时它们才会重新求值-->
        fullName:
        <label>
            <input v-model="fullName">
        </label><br>
        fullName: {{ getFullName() }}
    </div>
    <BackTop />
</template>

<script>
    import {computed, reactive, ref} from 'vue'

    export default {
        name: "Computed",
        setup() {
            // 计算属性并不是响应式更新的，这类似于getter
            const now1 = computed(() => new Date())
            const obj = reactive({
                commonNow: new Date(),
                get getterNow() {
                    return new Date()
                }
            })
            const now2 = obj.getterNow
            const now3 = obj.commonNow
            const now4 = new Date()

            const books = reactive(['bookName1', 'bookName2', 'bookName3'])

            const booksIntroduce = computed(() => {
                return books.length > 7 ? '多' : '少'
            })

            // let index = 3
            // let s =  setInterval(()=>{
            //     index++
            //     books.push(`bookName${index}`)
            //     console.log('执行中')
            //     if(index === 10) clearInterval(s)
            // },1000)

            // const fullName = ref('')
            let firstName = ref('SX')
            let lastName = ref('Z')

            // const fullName=computed(()=>`${firstName.value} ${lastName.value}`)

            // computed可以设置set属性
            let fullName = computed({
                get: () => `${firstName.value}-${lastName.value}`,
                set: val => {
                    const names = val.split('-')
                    firstName.value = names[0]
                    lastName.value = names[1]
                }
            })

            return {
                now1, now2, now3, now4, books, booksIntroduce, firstName, lastName, fullName
            }
        },
        methods: {
            // 只有在setup中return的才能在methods中访问
            // 只有reactive或ref定义的才能被改变
            addBooks() {
                this.books.push('bookName')
                console.log(this.books.length)
            },
            getFullName() {
                return `${this.firstName}-${this.lastName}`
            }
        }
    }
</script>

<style scoped>
    div {
        margin: 20px;
    }

    input {
        margin: 5px;
    }
</style>