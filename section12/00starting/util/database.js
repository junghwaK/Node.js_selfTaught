//1.mongodb 패키지에 접근하게 해준다.
const mongodb = require('mongodb');
//1.우리가 임포트할 MongoDB에 접근하여 MongoClient생성자를 추출할수있다.
//MongoClient 이거아니더라도 상수이름은 내맘대로
const MongoClient = mongodb.MongoClient;

//2. _언더스코어는 이 변수부분이 파일내부에서만 사용됨을 알리는 용도이다. 반드시 필요하진않고 그냥 db라고 해도된다. 
let _db;

//1.app.js와 연결하는method, 화살표함수 내부에서 mongoClient를 실행시킨다.
const mongoConnect = (callback) => {
//1.위의 클라이언트를 사용해서 MongoDB데이터베이스에 연결
//인자안에url은 mongodb atla cluster 연결페이지에 있다. 
//이 연결 method는 promise를 반환하는데 이는 결함이 발생하거나 연결에 실패한경우 오류를 출력한다. 
MongoClient.connect('mongodb+srv://Junghwa:AhdrhElql@!106@cluster0.jjqnjjw.mongodb.net/shop?retryWrites=true&w=majority')
.then(client => {
  console.log('Connected!');
  //2.위의 링크 net/뒤에 shop이라고 적어서 우리가 shop과 연결함을 알려준다. 그리고 만일shop db가없으면 몽고가 알아서 만들어준다.
  _db = client.db();
  //1.호출한 callback과 여기서 연결이 이루어지면 client가 되기때문에 인자는 client이다. then은 db에 접근할 수 있게하는 클라이언트 객체이다.
  //2. callback(client); client 를 반환하는 대신 위에서 db변수를 추가해준다. 
  callback();
})
.catch(err => {
  console.log(err);
  throw err;
});
};

const getDb = () => {
  if(_db) {
    //db를 반환하여 db로의 접근을 반환한다._db가 정의되었나 확인하는것이다. 
    return _db;
  }
  throw 'No database found!';
}

//1. 이제 함수인 monogConnect를 내보내준다. 그리고 app.js로 가서 임포트해준다. (하지만 다른 방법으로 익스포트, 아래에 있다. )
// module.exports = mongoConnect;

//2. 두 method를 내보내는데 연결을 위한것과 db로의 연결을 저장하는 용도이다. app.js가서 조금 수정해주자.
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
