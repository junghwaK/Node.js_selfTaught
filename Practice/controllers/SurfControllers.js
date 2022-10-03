const models = require('../model');

//등록한 데이터 가져오기
exports.register = async (req, res) => {
    let result = await models.Surf.findAll();
    //id 찾기
    console.log("result[0] : ", result[0]);
    // console.log("id : ", result[0].id);
    res.render("index", {data: result});
}

exports.getInfo = async (req, res) => {
    let query =`select * from pr where name like '%${req.query.surf}%' or symbol like '%${req.query.surf}%'`;
    let result = await models.sequelize.query(query);
    // console.log(result[0]);
    res.render("result",{data : result[0]} );

}

exports.postInsert = async (req, res) => {
    console.log(req.body);
    let object = {
        name: req.body.name,
        symbol: req.body.symbol
    };
    let result = await models.Surf.create(object);
    console.log(result);
    res.send(result);
}
