import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Reklama() {
   const [meals, setMeals] = useState({})
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(json => 
            setMeals(json.meals[0])
            )
    }, [])
    return (
        <a  target='_blank' href={meals.strYoutube}>
        <div className="card w-100">
            <div className='bg-light'>
              <h4>REKLAMA</h4>
            </div>
            <img src={meals.strMealThumb} alt="reklama-img" className='img-fluid'  />
            <h5  className='text-end p-2'> {meals.strCategory}</h5>
        </div>
        
        
        </a>
    )
}

export default Reklama
