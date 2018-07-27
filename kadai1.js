'use strict';
const express = require('express') ;
const app = express();
const PORT = 7070;
app.get('/',  (req, res)  => res.send('Hello World'));
app.listen(PORT);
console.log(`listening on *: ${PORT}`);
