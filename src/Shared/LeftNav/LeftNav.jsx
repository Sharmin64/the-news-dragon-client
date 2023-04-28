import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftVeiw from '../LeftVeiw/LeftVeiw';

const LeftNav = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:8000/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
    .catch(error=>console.error(error))
  },[])
  return (
    <div>
      <h3>All Categories</h3>
      <div className='ps-4'>
      {
        categories.map(category => <p key={category.id}>
          <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
        </p>)
      }
      </div>
      <div>
        <LeftVeiw></LeftVeiw>
      </div>
    </div>
  );
};

export default LeftNav;