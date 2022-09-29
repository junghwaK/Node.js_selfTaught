// const Products = [];
const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
);

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            return cb([]);
        } else{
            cb(JSON.parse(fileContent));
        }
        
    });
}

//옆과 같은 형태인데 class 사용버전 module.exports = function Product(){}
module.exports = class Product{
    constructor(t) {
        this.title = t;
    };

    //function 키워드가 빠진걸 제외하면 함수랑 동일하다. 
    save(){
        //여기는 자체 논리가 있으므로 콜백을 포워딩하지 않는다.
        getProductsFromFile(products =>{
            products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
            console.log(err);
            });
        });
        //contents전체를 읽어온다.  fileContent : data임
        // fs.readFile(p, (err, fileContent) => {
        
        // });
    }

    //fetchAll을 호출하는것은 함수를 전달할 수 있고, 이후 반환하려는 데이터의 호출을 인식한다. 
    static fetchAll(cb){
        getProductsFromFile(cb);
    }
};