
import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details';


function App() {
  const [search,setSearch] = useState("chicken")
  const [categories,setCategories] = useState([])
  const [recipesData,setRecipesData] = useState([])
  const getRecipes = (e)=>{
    e.preventDefault();
    let searchWord = e.target.elements.recipeName.value
    let selected = e.target.elements.category.value
    setSearch(searchWord)
    if(selected !== ""){
      getData(selected)
    }else if(searchWord !== ""){
      getData(searchWord)
    }else{
      getData("chicken")
    }
    //getData(selected)
  }

    const getData = (text)=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${text}`).then(res =>{
            setRecipesData(res.data.meals)
        })
    }

    const getCategories = ()=>{     
      axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then(res=>{
        setCategories(res.data.categories)
      })
    } 
    

    useEffect(()=>{
        getData(search)
        getCategories()
    },[])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={
          <div>
          <Form getRecipes={getRecipes} categories={categories} />
          <Recipes recipesData={recipesData} />
          </div>
        }/>

        <Route path='/details/:id' element={ <Details/> } />
      </Routes>
      
    </div>
  );
}

export default App;
