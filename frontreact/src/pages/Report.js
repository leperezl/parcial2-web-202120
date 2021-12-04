import React, { useState, useEffect } from 'react';
import {FormattedMessage} from 'react-intl';
import MyChart from "../components/MyChart"

export const Report = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/products?q=`)
    .then((response) => response.json())
    .then((res) => {
        setProducts(res)
        console.log(res)
    },[])
  });

  return (
    <section id='report'>
      <div className='report-container'>
        <h1><FormattedMessage id="inventory"/></h1>
        <MyChart data={products} />
      </div>
    </section>
  );
};
