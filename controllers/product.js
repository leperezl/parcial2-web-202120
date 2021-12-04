const data = require('../assets/data');

function getProducts(query) {
  if(query !== undefined){
    return(
      data.filter((e) => e.name.toLowerCase().includes(query.toLowerCase())
      ))
    
} 
  return data};


module.exports = { getProducts };
