const models = require('../model');

//등록한 데이터 가져오기
exports.register = async (req, res) => {
    let result = await models.Surf.findAll();
    //id 찾기
    // console.log("result[0] : ", result[0]);
    res.render("index", {data: result});
}

//검색하기(정보가져오기)-mysql쿼리문이용
exports.getInfo = async (req, res) => {
    let query =`select * from pr where name like '%${req.query.surf}%' or symbol like '%${req.query.surf}%'`;
    let result = await models.sequelize.query(query);
    // console.log(result[0]);
    res.render("result",{data : result[0]} );

}

//데이터 추가하기
exports.postInsert = async (req, res) => {
    // console.log(req.body);
    let object = {
        name: req.body.name,
        symbol: req.body.symbol
    };
    let result = await models.Surf.create(object);
    console.log(result);
    res.send(result);
}


exports.destroy = async (req, res) => {
    let result = await models.Surf.destroy({where :{id: req.body.id}});
    res.send('삭제되었습니다');
}