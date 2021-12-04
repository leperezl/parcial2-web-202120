var express = require('express');
var router = express.Router();
const cont = require('../controllers/product')

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
//const allPersons = await cont.findAll()
/*
  const filteredProds = data.filter(prod => {
    for (key in filters) {
      console.log(key, prod[key], filters[key]);
      isValid = isValid && prod[key] == filters[key];
    }
    return isValid;
  });
  console.log(filteredProds);*/
router.get('/', async function (req, res, next) {
  const filters = req.params.q;
  const data = cont.getProducts(req.query.q)
  res.send(data);
});

module.exports = router;
