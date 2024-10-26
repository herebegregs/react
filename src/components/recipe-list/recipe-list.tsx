
import { useState } from 'react'
import { TabStateEnum } from '../../enums/home-enums'
type RecipeGroupType = {
    name: string,
    recipes: RecipeType[]
}

type RecipeType = {
    name: string,
    image: string,
    ingredients: string[]
    instructions: string[]
}

const RecipeList = ({recipeList}: {recipeList: RecipeGroupType[]}) => {
    const [tabState, setTabState] = useState<TabStateEnum>(TabStateEnum.starters);
    const [activeRecipe, setActiveRecipe] = useState<string | "none">("none")
    console.log(typeof TabStateEnum)
    if(recipeList != undefined ) {
        return (
            <>
            <div className="container p-8 border-solid border-b-gray-dark border-2 rounded-3xl w-full">
                <div className="flex gap-5">
                    {
                        Object.keys(TabStateEnum).map((group, i: number) => {
                            return <button className="text-2xl" key={i} onClick={() => setTabState(TabStateEnum[group])}>{TabStateEnum[group]}</button>
                        })
                    }
                </div>
                {recipeList.map((recipeGroup: RecipeGroupType, i: number) => {
                    return (
                        <div key={i} className={`flex gap-10 ${TabStateEnum[recipeGroup.name] == tabState ? "visible" : "hidden"}`} data-group={recipeGroup.name}>
                            <ul key={i} className="flex flex-col gap-5">
                                {recipeGroup.recipes.map((recipe: RecipeType, j: number) => {
                                    return (
                                    <li key={j} className="cursor-pointer" onClick={() => setActiveRecipe(recipe.name.toLocaleLowerCase())}><p>{recipe.name}</p></li>
                                )
                                })}
                            </ul>
                            {recipeGroup.recipes.map((recipe: RecipeType, j: number) => {
                                return (
                                    <figure key={j} className={`${recipe.name.toLocaleLowerCase() == activeRecipe ? "visible" : "hidden"}`}>
                                        <img src={recipe.image} alt={recipe.name}/>
                                        <figcaption className='text-center mt-4'>{recipe.name}</figcaption>
                                    </figure>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className='container p-8 border-solid border-b-gray-dark border-2 rounded-3xl w-full'>
            {recipeList.map((recipeGroup: RecipeGroupType) => {
                return recipeGroup.recipes.map((recipe: RecipeType) => {
                    return (
                        <>
                            <div className={`${recipe.name.toLocaleLowerCase() == activeRecipe ? "visible" : "hidden"}`}>
                                <h3 className='text-2xl font-semibold mb-5'>Ingredients:</h3>
                                <ul>
                                    {
                                        recipe.ingredients.map((ingredient, i: number) => {
                                            return <li key={i} className='mb-3'>{ingredient}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className={`${recipe.name.toLocaleLowerCase() == activeRecipe ? "visible" : "hidden"}`}>
                                <h3 className='text-2xl font-semibold mb-5'>Preparation:</h3>
                                <ol className='list-decimal pl-4'>
                                    {
                                        recipe.instructions.map((instruction, i: number) => {
                                            return <li key={i} className='mb-3'>{instruction}</li>
                                        })
                                    }
                                </ol>
                            </div>
                        </>
                    )
                })
            
            })
        }
            </div>
            </>
        )
    }
}

export default RecipeList