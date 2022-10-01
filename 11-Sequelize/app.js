const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

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

//sync로 호출하고 then에 result 입력해서 result로 어떤 응답,값이 오나 확인
sequelize
.sync()
.then(result => {
    // console.log(result); ->시작할때마다 긴 객체 안보이게 하기위함
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});

//그리고 여기있던 서버를 시퀄라이즈 싱크로 옮기면 어떻게 되는지 본다. 
// app.listen(3000);