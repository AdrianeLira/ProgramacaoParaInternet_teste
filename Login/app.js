const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const routers = require('./routers/routers');
app.use(routers);

const hostname = 'localhost';
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Servidor iniciado em http://${hostname}:${port} (Clique Ctrl+C)`);
});