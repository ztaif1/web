var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async (req, res, next) => {
  let tags = String(req.query.tags)

  try {
    const response = await axios.get('https://montsp.github.io/data/articles.json'); // 元のプロジェクトのエンドポイントを指定
    let data = {
      articles: response.data,
      tags:tags
    };
    res.render('articles', data);
  } catch (error) {
    res.status(500).render('error'  );
  }
});

module.exports = router;