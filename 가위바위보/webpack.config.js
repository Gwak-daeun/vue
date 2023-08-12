const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');

module.exports = { // 노드의 모듈(객체)을 만듦 
//웹팩 설정은 크게 4개로 생각하면 된다.
mode: 'development', // 개발모드. 배포할 땐 production으로 하면 된다.
devtool: 'eval', // eval : 웹팩이 빌드하는 속도가 빨라짐 /  hidden-source-map : 배포할 때 
resolve: {
    extensions: ['.js', '.vue'] //확장자 처리
}, 
entry: {
    app: path.join(__dirname, 'main.js'), // 스크립트가 하나로 합쳐질 파일의 이름. main.js의 스크립트 들이 app.js로 합쳐지는것
},
module: { // 웹팩의 핵심 
    rules: [{ // js파일들을 합칠 때 어떻게 합칠건지, 처리할 건지 rules에 적는다. 
        test: /\.vue$/,
        use: 'vue-loader'
    }, {
        test: /\.css$/,
        use: [
            'vue-style-loader',
            'css-loader'
        ]
    }]
},
plugins: [
    new VueLoaderPlugin(),
],
output: {
    filename: '[name].js', 
    path: path.join(__dirname, 'dist'), 
    publicPath: '/dist',
},
};