
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';


function App() {
  const [search,setSearch] = useState("chicken")
  const [recipesData,setRecipesData] = useState([])
  const getRecipes = (e)=>{
    e.preventDefault();
    let searchWord = e.target.elements.recipeName.value
    setSearch(searchWord);
    getData(searchWord)
  }

    const getData = (text)=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${text}`).then(res =>{
            setRecipesData(res.data.meals)
        })
    }
    useEffect(()=>{
        getData(search)
    },[])
  return (
    <div className="App">
      <Navbar />
      <Form getRecipes={getRecipes} />
      <Recipes recipesData={recipesData} />
    </div>
  );
}

export default App;
