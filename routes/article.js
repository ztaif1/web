var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/:id', async (req, res, next) => {
  let id = String(req.params.id)
  
  try {
    const response = await axios.get('https://ztaif1.github.io/data/articles.json'); // 元のプロジェクトのエンドポイントを指定
    const articles = response.data

    // article.idが変数idと等しいものを探す
    const foundArticle = articles.find(article => article.id === id);
    let name = "";
    let meta_description = "";
    let meta_keywords = "";
    if (foundArticle) {
      name = foundArticle.name;
      meta_description = foundArticle.meta_description;
      meta_keywords = foundArticle.meta_keywords;
    }

    let data = {
      articles: response.data,
      id:id,
      page: {
        name: name,
        meta_description: meta_description,
        meta_keywords: meta_keywords
      }
    };
    res.render('article', data);
  } catch (error) {
    res.status(500).render('error'  );
  }
});


//http://localhost:3000/?param=json

module.exports = router;
