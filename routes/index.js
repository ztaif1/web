var express = require('express');
var router = express.Router();
var axios = require('axios');




router.get('/', async (req, res, next) => {

  try {
    const response = await axios.get('https://montsp.github.io/data/articles.json'); // 元のプロジェクトのエンドポイントを指定
    let data = {
      articles: response.data,
    };
    res.render('index', data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

router.get('/ja', async (req, res, next) => {

  try {
    const response = await axios.get('https://montsp.github.io/data/articles.json'); // 元のプロジェクトのエンドポイントを指定
    let data = {
      articles: response.data,
    };
    res.render('index', data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

router.get('/about', (req, res, next) => {
  res.render('about');
});

router.get('/policy', (req, res, next) => {
  res.render('policy');
});

//http://localhost:3000/?param=json

module.exports = router;
