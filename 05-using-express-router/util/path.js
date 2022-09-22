const path = require('path');

//상위 디렉토리로 가는 경로를 구축하는데 도움주는 함수
module.exports = path.dirname(process.mainModule.filename);