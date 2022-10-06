//시퀄라이즈 다 지우고 몽고디비씁니다
// const mongoConnect = require('../util/database');
//2.단순히 위의 한줄처럼 product.js에서 연결을 진행할 뿐만아니라 getDb를 임포트 할 수 있는데 몹시 유용하다.
//2.여기에서 getDb에 접근하여 이를 임포트하며 이제 이함수를 호출, 데이터베이스에 접근함으로써 db와 상호작용하는데 쓸 수 있다. 
const getDb = require('../util/database').getDb;

const Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }
  //db저장하기 위해서 저장 method를 추가
  save(){

  }
}

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;
