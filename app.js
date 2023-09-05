const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(express.static("./public"));

const objects = require('./data/data.json');

app.get('/', (req, res) => {
    res.render('index', {objects});
});

app.get('/:name', (req, res) => {
    const objectRequest = req.params.name;
    const foundObject = objects.find(object => object.name === objectRequest);
    res.render('planet', {foundObject});
});

app.listen(PORT, () => {
    console.log(`Server now running at port: ${PORT}`);
});