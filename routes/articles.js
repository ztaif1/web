var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/:tag', async (req, res, next) => {
  let tag = String(req.params.tag)

  try {
    const response = await axios.get('https://ztaif1.github.io/data/articles.json'); // 元のプロジェクトのエンドポイントを指定
    let data = {
      articles: response.data,
      tags:tag,
    };
    res.render('articles', data);
  } catch (error) {
    res.status(500).render('error'  );
  }
});

module.exports = router;