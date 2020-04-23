<template>
    <div>
        <h3>Todos</h3>
        <div class="todos">
            <div class="todo" v-for="todo in allTodos" v-bind:key="todo.id">
                {{todo.title}}
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name:"Todos",
    computed: mapGetters(['allTodos'])
}
</script>

<style scoped>

</style>
