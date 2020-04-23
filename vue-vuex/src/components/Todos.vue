<template>
    <div>
        <h3>Todos</h3>
        <div class="todos">
            <div  class="todo" v-for="todo in allTodos" v-bind:key="todo.id">
                {{todo.title}}
                <button class="delete-todo" v-on:click="deleteTodo(todo.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name:"Todos",   
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo'])
    },
    computed: mapGetters(['allTodos']),
    created(){
        this.fetchTodos()
    }
}
</script>

<style scoped>
    .todos{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .todo{
        border: 1px solid lightblue;
        cursor: pointer;
        background: lightgreen;
        text-align: center;
        position: relative;
        border-radius: 5px  ;
        padding: 1rem;
        height: 100px;
    }

    .delete-todo{
        position: absolute;
        top: 10px;
        right: 10px;
        background: red;
        border: none;
        color: wheat;
        border-radius: 10px;
    }

    .complete-card{ 
        background: greenyellow;
    }
    
    .incomplete-card{
        backgroud: orange;
    }
    
    @media(max-width: 500px){
        .todos{
            grid-template-columns: 1fr;
        }

        .todo{
            height: 100px;
        }
    }

    @media(max-width: 720px){
        .todos{
            grid-template-columns: 2fr;
        }

        .todo{
            height: 100px;
        }
    }


</style>
