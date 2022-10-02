const models = require('../model');

//등록한 데이터 가져오기
exports.register = (req, res) => {
    models.Surf.findAll()
    .then((result) => {
        //id 찾기
        console.log("result[0] : ", result[0]);
        console.log("id : ", result[0].id);
        res.render("admin", {data: result});
    });
}