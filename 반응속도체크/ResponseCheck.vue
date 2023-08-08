<template>
    <div>
       <div id="screen" :class="state">{{ message }}</div>
       <div>
            <div>평균시간: {{  }}</div>
            <button @click="onReset">리셋</button> 
            <!-- @ == v:on  /  : == v-vind: -->
       </div>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
              result: [],
              state: 'waiting',
              message: '클릭해서 시작해요'
            }
        },
        methods: {
            onReset() {

            }
        }
    }; // Vue.component 부분 
</script>

<style>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>