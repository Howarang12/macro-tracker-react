import { useState, useEffect } from "react"

const Food = ({food}) => {
  const [servingSize, setServingSize] = useState(100)
  const [proteinPerServing, setProteinPerServing] = useState(food.foodNutrients[0].value)
  const [fatPerServing, setFatPerServing] = useState(food.foodNutrients[1].value)
  const [carbohydratePerServing, setCarbohydratePerServing] = useState(food.foodNutrients[2].value)
  const [caloriesPerServing, setCaloriesPerServing] = useState(food.foodNutrients[3].value)

  const [totalProtein, setTotalProtein] = useState(proteinPerServing)
  const [totalFat, setTotalFat] = useState(fatPerServing)
  const [totalCarbohydrate, setTotalCarbohydrate] = useState(carbohydratePerServing)
  const [totalCalories, setTotalCalories] = useState(caloriesPerServing)

  const handleClick = (e) => {
    e.preventDefault()
    console.log(totalProtein, totalFat, totalCarbohydrate, totalCalories)
  }

  useEffect(() => {
    const servingMultiplier = servingSize / 100 
    const protein = (proteinPerServing * servingMultiplier).toFixed(2)
    const fat = (fatPerServing * servingMultiplier).toFixed(2)
    const carbohydrate = (carbohydratePerServing * servingMultiplier).toFixed(2)
    const calories = (caloriesPerServing * servingMultiplier).toFixed(2)
    setTotalProtein(protein)
    setTotalFat(fat)
    setTotalCarbohydrate(carbohydrate)
    setTotalCalories(calories)
  }, [servingSize])

  return (
    <div className="container-fluid mt-5 px-5 col-lg">
      <form className="my-5 mx-3 py-5 border rounded bg-light">

        <h5 className="text-center mb-3">{food.description}</h5>

        <div className="form-row mx-5">
          <div className="mb-3 form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text"  
              name="name" 
              value= {food.description}
              className="form-control" 
              readOnly
            />
          </div>
          <div className="form-group mb-3 mx-5">
            <label htmlFor="serving">Serving</label>
            <div className="input-group">
              <input 
                type="number"  
                name= "serving" 
                value={servingSize}
                min='0'
                step={1}
                className="serving form-control" 
                onChange={(e) => setServingSize(e.target.value)}
              />
              <div className="input-group-append">
                <span className="input-group-text">G</span>
              </div>
            </div>
          </div>
        </div>

      <div className="form-group mb-3 row mx-5">
        <label htmlFor="protein">Protein</label>
        <div className="input-group">
          <input 
            type="text" 
            className="protein form-control" 
            name="protein" 
            placeholder={proteinPerServing}
            value={totalProtein} 
            readOnly
          />
          <div className="input-group-append">
            <span className="input-group-text">{food.foodNutrients[0].unitName }</span>
          </div>
        </div>
      </div>

      <div className="form-group mb-3 row mx-5">
        <label htmlFor="fat">Fat</label>
        <div className="input-group">
          <input 
            type="text" 
            className="fat form-control" 
            name="fat" 
            value= {totalFat} 
            readOnly
          />
          <div className="input-group-append">
            <span className="input-group-text">{food.foodNutrients[1].unitName}</span>
          </div>
        </div>
      </div>

      <div className="form-group mb-3 row mx-5">
        <label htmlFor="carbohydrate">Carbohydrate</label>
        <div className="input-group">
          <input 
            type="text" 
            className="carbohydrate form-control" 
            name="carbohydrate" 
            value={totalCarbohydrate} 
            readOnly
          />
          <div className="input-group-append">
            <span className="input-group-text">{food.foodNutrients[2].unitName} </span>
          </div>
        </div>
      </div>

      <div className="form-group mb-3 row mx-5">
        <label htmlFor="calories">Calories</label>
        <div className="input-group col-lg-3">
          <input 
            type="text" 
            className="calories form-control" 
            name="calories" 
            value={totalCalories} 
            readOnly
          />
          <div className="input-group-append">
            <span className="input-group-text">{food.foodNutrients[3].unitName} </span>
          </div>
        </div>
      </div>

      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button 
          className="btn btn-secondary btn-lg" 
          onClick={handleClick}
        >
          Add food
        </button>
      </div>

      </form>
    </div>
  )
}

export default Food