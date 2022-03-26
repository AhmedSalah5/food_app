import React from 'react'
import {BsCartPlus,BsCartCheck ,BsFillInfoCircleFill} from 'react-icons/bs'

const RecipeItem = ({recipe}) => {
    const randomPrice = Math.round(Math.random()* 30 + 10) ;
    const newRecipe = {...recipe,price:randomPrice}
  return (
    <div className='recipe-item'>
        <img src={newRecipe.strMealThumb} alt="" />
        <h4>{newRecipe.strMeal}</h4>
        <p>Price : ${newRecipe.price}</p>
        <hr />
        <div className="links">
            <a href="">
                <BsFillInfoCircleFill/>
            </a>
            <a href="">
                <BsCartPlus/>
            </a>
        </div>
    </div>
  )
}

export default RecipeItem