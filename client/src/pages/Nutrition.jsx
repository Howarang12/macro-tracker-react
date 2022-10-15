import { useState } from "react"
import Food from "../components/Food"

const Nutrition = () => {
  const [searchText, setSearchText] = useState('')
  const [foods, setFoods] = useState([])

  const params = {
    api_key: 'kSoKHldy0rVKdhIIBnitlmMwqtXUlRvybKvcCH9s',
    query: searchText,
    dataType: ['Survey (FNDDS)'],
    pagesize: 24
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`

    try{
      const response = await fetch(api_url)
      const data = await response.json()
      
      setFoods(data.foods)
      console.log(foods[0].description)
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="container mt-5">
      <form>
        <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          name="search"
          placeholder="Look up a food, values are per 100g serving of food" 
          aria-label="Look up a food" 
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="input-group-append">
          <button 
            className="btn btn-secondary" 
            onClick={(e) => handleSearch(e)}
          >
            Search
          </button>
        </div>
        </div>
      </form>
      <div className="row">
        {foods.map((food) => <Food key={food.fdcId} food={food}/> )}
      </div>
    </div>
  )
}

export default Nutrition