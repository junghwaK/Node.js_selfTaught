// const products = [];
const Product = require('../models/product')

//제품컨트롤러 파일에서 함수 내보내기를 하기위해 exprots를 사용. 
// 그리고 이름은 직관적으로 getAddProduct라고 wl어준다. 내맘임
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

  //products.함수가 제품에 적용되는데 아직 파일에 제품을 추가하지않아 문제발생할수있다. 
exports.postAddProduct =(req, res, next) => {
    // products.push({ title: req.body.title }); -> models 때문에 필요x
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  };

//from shop.js. 제품이 있는 페이지를 반환.렌더링한다. 
exports.getProducts= (req, res, next) => {
    // const products = adminData.products;  -> models 때문에 필요x
   Product.fetchAll( product => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
   });
  };