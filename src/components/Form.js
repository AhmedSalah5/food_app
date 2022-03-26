import React from 'react'

function Form({getRecipes}) {
  return (
    <form onSubmit={getRecipes}>
        <input type='text' placeholder='Search for food . . .' name="recipeName" />
        <button type='submit'>Search</button>
    </form>
  )
}

export default Form