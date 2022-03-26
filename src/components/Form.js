import React from "react"
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
        <button type='submit'>Search</button>
    </form>
  )
}

export default Form