const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

const router = require("./routes");
// const useRouter = require("./routes/admin");

//.Surf로 연결해줘서 surf가 뜬다. 만약 /로 만들어주면 그냥 8000쳐도 나옴
// app.use('/Surf', router);
app.use('/', router);


app.listen(port, () => {
    console.log("Server Port : ", port);
});