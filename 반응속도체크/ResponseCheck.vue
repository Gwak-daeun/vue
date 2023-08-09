<template>
    <div>
       <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
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
            };
        },
        methods: {
            onReset() {

            },
            onClickScreen() {
                if(this.state === 'waiting') {
                    this.state = 'ready';
                } else if(this.state === 'ready') {
                    this.state = 'now';
                } else if(this.state === 'now') {
                    this.state = 'waiting';
                }
            }
        }
    }; // Vue.component 부분 
</script>

<style scoped>
/* scoped : css를 공유하지 않고 해당 컴포넌트에서만 쓰고 싶을 때  */
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