module.exports = { // 노드의 모듈(객체)을 만듦 
//웹팩 설정은 크게 4개로 생각하면 된다.
entry: {
    app: './main.js', // 스크립트가 하나로 합쳐질 파일의 이름. main.js의 스크립트 들이 app.js로 합쳐지는것
},
module: { // 웹팩의 핵심 
    rules: [{ // js파일들을 합칠 때 어떻게 합칠건지, 처리할 건지 rules에 적는다. 

    }]
},
plugins: [],
output: {
    filename: '[name].js', // 또는 app.js
    path: './dist' // 폴더 안에 dist라는 폴더가 생기고, 거기에 app.js라는 최종 결과물이 나온다. 
},
};