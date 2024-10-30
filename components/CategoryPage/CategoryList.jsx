import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CategoryList = () => {

    const [results, setResults] = useState([])


    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => res.json())
        .then((data) => setResults(data.categories))
    },[]) 

const urldetay = "/detay-sayfasi/"

  return (
    <section className="categoryContainer">
        <h2>Categories</h2>
        <div className="categoryList">
        {results.map((meal) => (
            <Link to={`/meal/category/${meal.idCategory}`} key={meal.idCategory}>
                <img src={`https://www.themealdb.com/images/category/${meal.strCategory}.png`}/>
                <span>{meal.strCategory}</span>
            </Link>
        ))}
        </div>
    </section>
  )
}
export default CategoryList