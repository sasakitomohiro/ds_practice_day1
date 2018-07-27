'use strict';
const express = require('express') ;
const app = express();
const PORT = 1000;
app.get('/',  (req, res)  => res.send('Hello World'));
app.listen(PORT);
console.log(`listening on *: ${PORT}`);

// ポート番号1000番は、	cadlock, ockというサービスに割り当てられているため、新規で割り当てようとするとエラーになる