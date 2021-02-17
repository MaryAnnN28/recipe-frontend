import React from 'react'; 
import './Recipes.css';
import { Box } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';
// import RecipeShowPage from './RecipeShowPage'; 

function RecipeComponent({recipe, chooseRecipe}) {
  
  const history = useHistory();
  const handleClick = () => {
    chooseRecipe(recipe)
    history.push('/EditRecipeForm')
  };
  
    return (
      <Box onClick={handleClick}>

            <div className="card" >
            <img class="card-img-top" src={recipe.image_url} class="card-img-top" width="100%" alt=""/>
              <div class="card-body">
                <center><h5 class="card-title">{recipe.name}</h5></center>
                <p class="card-text">
                  <center> <strong>{recipe.category}</strong>  </center>
                  <br />
                  <strong>Level: </strong>{recipe.difficulty} &nbsp; &nbsp; &nbsp;
              
                <strong>Rating: </strong> {recipe.rating}
                <br />
                Cook Time &nbsp; <strong>{recipe.cook_time}</strong>
                </p>
              
              </div>
          </div>
{/*           
          <Route path={`${match.url}/:recipeID`} render={routerProps => <RecipeShowPage {...routerProps} recipe={recipe} />} />
           */}
        </Box> 
      );
}

export default RecipeComponent; 