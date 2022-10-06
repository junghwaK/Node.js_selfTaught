const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
//mongoConnect이름은 내맘대로 정해도 상관없다. 
const mongoConnect = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//이 미들웨어를 다시 추가하려면 admin라우트도 다시 임포트 해야함. admin 컨트롤러 가보셈 그럼 product모델이 사용됨
const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  // User.findById(1)
  //   .then(user => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch(err => console.log(err));
});

//1번째로 살린 라우트 그리고 이 미들웨어를 다시 추가하려면 admin라우트도 다시 임포트 해야함.(위의 const adminRoutes)
app.use('/admin', adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);

//1.콜백, 즉 연결한 뒤에 실행될 함수를 전달해야한다. 따라서 여기에서는 클라이언트 객체로 접근할 권한을 얻는다. 
//1.app.listen을 실행하고 db에 연결한 뒤에 node.js서버를 불러올수있도록하고, 클라이언트를 console로 열람할 수 있게 해준다. 
// mongoConnect(client => {
//   console.log(client);
//   app.listen(3000);
// });

//2. 콜백으로 더이상 반환하지 않으므로 거부될일이 없다. 따라서 client로 보내줄 필요가 없으니 지워준다. models의 procuct.js로 가준다. 
mongoConnect(()=> {
  console.log();
  app.listen(3000);
});