const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  //스키마이름, 유저이름, 비밀번호
  'nodecomplete', 'userId', '1234', {
  
    //4th 인수로는 optins객체를 전달한다. ctrl +space로 메뉴들 확인가능
    //dialcect는 mysql 데이터베이스로 연결하는것을 확실시
    dialect: 'mysql',
    //디폴트라서 설정할 필요는 없지만 한다. 
  host: 'localhost'
});

module.exports = sequelize;
