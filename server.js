const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
    

app.get('/ping', function (req, res) {
    console.log("ping is hit");
 return res.send('pong');
});





app.listen(process.env.PORT || 8080);