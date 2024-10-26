// import { useState } from 'react'
import PageHeader from './components/page-header/page-header';
import RecipeList from './components/recipe-list/recipe-list';

import recipeJson from './assets/recipes.json'

function App() {
  return (
    <div className='p-8 flex flex-col justify-center items-center gap-10'>
      <PageHeader title={"Recipes"} />
      <RecipeList recipeList={recipeJson.recipeList} />
    </div>
  )
}

export default App
