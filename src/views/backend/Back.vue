<template>
    <div>
        <p>this is backend page</p>
        <p>{{ msg }}</p>
        <p> {{ count }} 个 </p>
        <button @click="$store.dispatch('setCount', 2)"> +2 </button>
        <!-- <router-link to="/home">跳转到前台</router-link> -->
        <router-view></router-view>
        <!-- <button @click="$router.push('/home')">跳转到前台</button> -->
        <a href="/home">跳转到前台</a>
    </div>
</template>

<script>
export default {
    name: 'back',
    data () { 
        return {
            msg: 'home pages vue'
        }
    },
    computed: {
        count() {
            return this.$store.getters.getCount
        }
    },
    mounted() {
        console.log('router', this.$route.query)
    }
}
</script>