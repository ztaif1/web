var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async (req, res, next) => {
  let id = String(req.query.id)

  try {
    const response = await axios.get('https://montsp.github.io/data/articles.json'); // 元のプロジェクトのエンドポイントを指定
    let data = {
      articles: response.data,
      id:id
    };
    res.render('article', data);
  } catch (error) {
    res.status(500).render('error'  );
  }
});


//http://localhost:3000/?param=json

module.exports = router;
