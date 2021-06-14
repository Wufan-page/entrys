<template>
    <div>
        <p>this is home page</p>
        <p>{{ msg }}</p>
        <p> {{ count }} 个 </p>
        <button @click="$store.dispatch('setCount', 1)"> +1 </button>
        <!-- <router-link to="/backend" replace>跳转到后台</router-link> -->
        <!-- <button @click="$router.push('/backend')">跳转到后台</button> -->
        <a href="/backend?name=page">跳转到后台</a>
        <br>
        <a href="/backend/another?name=page">跳转到后台another</a>
    </div>
</template>

<script>
export default {
    name: 'index',
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