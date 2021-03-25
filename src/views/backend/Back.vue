<template>
    <div>
        <p>this is backend page</p>
        <p>{{ msg }}</p>
        <p> {{ count }} 个 </p>
        <button @click="$store.dispatch('setCount', 2)"> +2 </button>
        <!-- <router-link to="/home">跳转到前台</router-link> -->
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
    }
}
</script>