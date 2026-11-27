import React, { useState } from 'react'
import Mealcards from './Mealcards';
import './Mainpage.css'
const Mainpage = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    
    const myFun = async () => {
  if (!search.trim()) return;

  const get = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(search)}`
  );

  const jsonData = await get.json();
  setData(jsonData.meals || []);
};
  return (
    <>
    <div className="container">
        <div className="searchbar">
            <input type="text" placeholder='Enter Your Favourite Dish' onChange={(e)=> setSearch(e.target.value)} />
            <button onClick={myFun}>Search</button>
        </div>
    </div>
        <div className='Mealcards-container'>
            <Mealcards data={data} />
        </div>
    </>
  )
}

export default Mainpage