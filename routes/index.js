var express = require('express');
var router = express.Router();
var axios = require('axios');




router.get('/', async (req, res, next) => {
  try {
    const response = await axios.get('https://ztaif1.github.io/data/articles.json'); // 元のプロジェクトのエンドポイントを指定
    let data = {
      articles: response.data,
      page: {
        name: "ホーム",
        meta_description: "hello",
        meta_keywords: "hello"
      }
    };
    res.render('index', data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

router.get('/ja', async (req, res, next) => {
    res.redirect('/');
});

router.get('/about', (req, res, next) => {
  const page = {
    name: "About",
    meta_description: "",
    meta_keywords: "",
  }
  res.render('about', {page});
});

router.get('/policy', (req, res, next) => {
  const page = {
    name: "プライバシーポリシー",
    meta_description: "",
    meta_keywords: "",
  }
  res.render('policy', {page});
});

router.get('/sitemap', (req, res, next) => {
  const page = {
    name: "サイトマップ",
    meta_description: "",
    meta_keywords: "",
  }
  res.render('sitemap', {page});
});

router.get('/contact', (req, res, next) => {
  const page = {
    name: "お問い合わせ",
    meta_description: "",
    meta_keywords: "",
  }
  res.render('contact', {page});
});

//http://localhost:3000/?param=json

module.exports = router;
