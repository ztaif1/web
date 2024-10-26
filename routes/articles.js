var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', async (req, res, next) => {
  let tag = "all"
  
  try {
    const response = await axios.get('https://ztaif1.github.io/data/articles.json'); // 元のプロジェクトのエンドポイントを指定
    const articles = response.data
    let data = {
      articles: articles,
      tag:tag,
      page: {
        name: "すべての記事",
        meta_description: "hello",
        meta_keywords: "hello"
      }
    };
    res.render('articles', data);
  } catch (error) {
    res.status(500).render('error'  );
  }
});


router.get('/:tag', async (req, res, next) => {
  let tag = String(req.params.tag)
  
  try {
    const response = await axios.get('https://ztaif1.github.io/data/articles.json'); // 元のプロジェクトのエンドポイントを指定
    let data = {
      articles: response.data,
      tag:tag,
      page: {
        name: "タグ:" + tag,
        meta_description: "",
        meta_keywords: ""
      }
    };
    res.render('articles', data);
  } catch (error) {
    res.status(500).render('error'  );
  }
});

module.exports = router;