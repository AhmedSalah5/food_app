import React from "react"
import {BsSearch} from "react-icons/bs"

function Form({getRecipes,categories}) {
  return (
    <form onSubmit={getRecipes}>
        <input type='text' placeholder='Search for food . . .' name="recipeName" />
        <select name='category'>
          <option>--Choose a Category--</option>
          {categories.map((category,index)=>{
            return (<option key={index} value={category.strCategory}>{category.strCategory}</option>)
          })}

        </select>
        <button type='submit'><BsSearch/> </button>
    </form>
  )
}

export default Form