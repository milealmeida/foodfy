const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const dishes = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('pages', {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function(req, res){
    return res.render('index', { items: dishes });
});

server.get('/about', function(req, res){
    const about = {
        title: 'Sobre o Foodfy',
        subtitle01: 'Como tudo começou…',
        subtitle02: 'Nossas receitas',
        paragraphic01: 'Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vellacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue',
        paragraphic02: 'Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.',
    }
    return res.render('about', { about });
});

server.get('/dishes', function(req, res){
    return res.render('dishes', { items: dishes });
});

server.get('/recipe', function(req, res){
    const id = req.query.id;

    const dishe = dishes.find(function(dishe){
        return dishe.id == id
    });

    if(!dishe){
        return res.send('Recipe not found!');
    }

    return res.render('recipe', { items: dishe });
})

server.use(function(req, res) {
    res.status(404).render('not-found');
});

server.listen(5000, function(){
    console.log('Server is running');
});