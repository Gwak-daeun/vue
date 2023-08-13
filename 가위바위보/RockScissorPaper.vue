<template>
    <div>
        <div id="computer" :style="computedStyleObject"></div>
        <div>
            <button @click="onClickBotton('바위')">바위</button> 
            <button @click="onClickBotton('가위')">가위</button>
            <button @click="onClickBotton('보')">보</button>
            <!-- 괄호 안으로 인자 전달 -->
        </div>
        <div>{{ result }}</div>
        <div>현재 {{ score }}점</div>
    </div>
</template>

<script>

    const rspCoords = {
        바위: '0',
        가위: '-142px',
        보: '-284px'
    };

    let interVal = null;

    const scores = {
        가위: 1,
        바위: 0,
        보: -1
    };

    const computerChoice = (imgCoord) => {
        return Object.entries(rspCoords).find(function (v) {
            return v[1] === imgCoord;
        });
    };

    export default {
        data() {
            return {
                imgCoord: rspCoords.바위,
                result: '',
                score: 0,
            };
        },
        computed: {
           computedStyleObject() {
            return{
                background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0` 
            };
           }
        },
        methods: {
           onClickBotton(choice) { //위의 '가위', '바위', '보'를 인자로 받음
                clearInterval(interVal); // 컴퓨터의 가위바위보를 잠깐 멈춘다.
                const myScore = scores
           },
           
        },
        beforeCreate() {
            console.log("beforeCreate");
           },
           created() {
            console.log("created");
           },
           beforeMount() {
            console.log("beforeMount");
           },
           mounted() {
            console.log("mounted");
            interVal = setInterval(() => {
                if(this.imgCoord === rspCoords.바위){
                    this.imgCoord = rspCoords.가위;
                } else if(this.imgCoord === rspCoords.가위) {
                    this.imgCoord = rspCoords.보;
                } else if(this.imgCoord === rspCoords.보){
                    this.imgCoord = rspCoords.바위;
                }
            }, 100); // 0.1초 마다 //변수에 저장해서 setInterval을 중간에 중지할 수 있다. 
            //가위바위보 컴포넌트가 사라져도 setInterval은 계속 실행되는 상태이다. => 메모리 누수 발생
           },
           beforeUpdate() {
            console.log("beforeUpdate");
           },
           updated() {
            console.log("updated");
           },
           beforeDestroy() {
                console.log("beforeDestroy");
                clearInterval(interVal); // setInterval이 컴포넌트가 사라지면 같이 종료되도록 한다. 
           },
           destroyed() {
            console.log("destroyed");
           }
    }; // Vue.component 부분 
</script>

<style scoped>
/* scoped : css를 공유하지 않고 해당 컴포넌트에서만 쓰고 싶을 때  */
    #computer {
        width: 142px;
        height: 200px;
        background-position: 0 0;
    }
</style>