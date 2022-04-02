import React from 'react'
import {BsCartPlus ,BsFillInfoCircleFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const RecipeItem = ({recipe}) => {
    console.log(recipe)
    const randomPrice = Math.round(Math.random()* 30 + 10) ;
    const newRecipe = {...recipe,price:randomPrice}
  return (
    <div className='recipe-item'>
        <img src={newRecipe.strMealThumb} alt="" />
        <h4>{newRecipe.strMeal}</h4>
        <p>Price : ${newRecipe.price}</p>
        <hr />
        <div className="links">
            <Link to={`/details/${newRecipe.idMeal}`}><BsFillInfoCircleFill/></Link>
            <a href="/">
                <BsCartPlus/>
            </a>
        </div>
    </div>
  )
}

export default RecipeItem