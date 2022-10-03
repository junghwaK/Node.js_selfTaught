const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
//소문자s를 쓴 sequlize객체를 불러온다. 
const sequelize = require('./util/database');
//둘은 연관 지을 수 잇다. 
const Product = require('./models/product');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//onDelete: 'CASCADE' 설정으로 사용자를 삭제할경우 사용자에 관련된 가격도 모두 사라진다. 
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

//sync로 호출하고 then에 result 입력해서 result로 어떤 응답,값이 오나 확인
sequelize
//force true로 정보확정
// .sync({force : true})
.sync()
.then(result => {
    return User.findByPk(1);
    // 시작할때마다 긴 객체 안보이게 하기위함
    // console.log(result); 
    // app.listen(3000);
})
.then(user => {
    if(!user) {
        return User.create({name: 'Jay', email: 'test@test.com'});
    }
    //즉시 사용자 확인하는 promise
    // return Promise.resolve(user);
    return user;
})
.then(user => {
    console.log(user);
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});

//그리고 여기있던 서버를 시퀄라이즈 싱크로 옮기면 어떻게 되는지 본다. 
// app.listen(3000);