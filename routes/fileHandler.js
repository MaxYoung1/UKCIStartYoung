var express = require('express');

var router = express.Router();

const fs = require('fs');

const content = 'Some content!';


function write(content) {
    console.log(content)
    var fileData = JSON.parse(read());
    fileData.queries.push(content)
    fs.writeFileSync('./public/files/queries.json', JSON.stringify(fileData), err => {
        if (err) {
            return err;
        } else {
            return "good";
        }
        // file written successfully
    });
}

function read() {
    try {
        const data = fs.readFileSync('./public/files/queries.json', 'utf8');
        return data;
    } catch (err) {
        return err;
    }
}
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(read());
});

router.post('/', function (req, res, next) {
    res.send(write(req.body));
});

module.exports = router;
