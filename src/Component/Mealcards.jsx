
import React from 'react';
import './Mealcards.css';

const Mealcards = ({ data = [] }) => {

  return (
    <div className="Mealcards">

      {data && data.length > 0 ? (
        data.map((d, index) => (
          <div className="meal-card" key={d.idMeal}>

            <div className="meal-image-wrapper">
              <img
                className="Dishimg"
                src={d.strMealThumb}
                alt={d.strMeal}
                loading="lazy"
              />

              <span className="meal-category">
                {d.strCategory || 'Delicious'}
              </span>
            </div>

            <div className="meal-content">

              <h3>{d.strMeal}</h3>

              <p className="meal-area">
                {d.strArea || 'World Cuisine'}
              </p>

              <button
                className="info-btn"
                onClick={() =>
                  window.open(d.strSource || d.strYoutube || 
                  `https://www.themealdb.com/meal/${d.idMeal}`,
                  '_blank')
                }
              >
                View Recipe <span>↗</span>
              </button>

            </div>

          </div>
        ))
      ) : (
        <div className="empty-state">
          <h2>🍽️ Discover Something Delicious</h2>
          <p>Search your favourite dish to explore recipes.</p>
        </div>
      )}

    </div>
  );
};

export default Mealcards;
