import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Details() {

    const params = useParams()
    const ID = params.id;
    const [recipe,setRecipe] = useState({})

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`).then(res => {
            console.log(setRecipe(res.data.meals[0]))
        })
    },[ID])
    //www.themealdb.com/api/json/v1/1/lookup.php?i=52772
  return (
    <div style={{padding:'20px 0'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={recipe.strMealThumb} style={{width:'90%',margin:'20px 0'}} alt="" />
                </div>
                <div className="col-md-6">
                    <h2>{recipe.strMeal}</h2>
                    <h3>Category : {recipe.strCategory}</h3>
                    <h5>Area : {recipe.strArea}</h5>
                    <div style={{marginTop:'20px'}}>
                        <h3>Instructions : </h3>
                        <p style={{textAlign:'center'}}>{recipe.strInstructions}</p>
                    </div>
                    <Link className='btn btn-primary' to="/">Back</Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Details