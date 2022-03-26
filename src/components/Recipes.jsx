
import RecipeItem from './RecipeItem'

function Recipes({recipesData}) {
    
    if(recipesData !== null){
        return (
            <div className='recipes'>
                {recipesData.map((i,index)=>{
                    return (
                        <RecipeItem key={index} recipe={i} />
                    )
                }
            
                )}
            </div>
          )
    }else{
        return(<div>
            Search For Data 
        </div>)
    }
  
}

export default Recipes