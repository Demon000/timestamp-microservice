const express = require('express');
const moment = require('moment');

const app = express();

app.get('/:date', (req, res) => {
    var date;
    var r = {
        natural: null,
        unix: null
    };
    if(!isNaN(req.params.date)) {
        date = moment.unix(req.params.date);
    } else {
        date = moment(req.params.date);
    }
    if(date.isValid()) {
        r.natural = date.format('MMMM D, YYYY');
        r.unix = date.format('X');
        
    }
    res.json(r);
});

app.listen(process.env.PORT);