import React, { useEffect, useState } from 'react';
import {Card} from '../components/Card'
import '../index.css'
import {FormattedMessage} from 'react-intl';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/products?q=${searchKey}`)
    .then((response) => response.json())
    .then((res) => {
        setProducts(res)
        console.log(res)
    },[searchKey])
     
      });

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id="gallery"/></h1>
        <div className='home-card'>
          {products.map((e,i)=>{
            return(
            <Card 
            key={e._id}
            name={e.name}
            picture={e.picture}
            price={e.price}
            isActive={e.isActive}
            />)
          })}
        </div>
      </div>
    </section>
  );
};
