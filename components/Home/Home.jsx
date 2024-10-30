import { useState } from "react"
import CategoryList from "../CategoryPage/CategoryList";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";


const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [result, setResult] = useState([])
    const params = useParams();


    const handleSearchTerm = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value)
    }

    const handleSearchResult = (e) => {
        e.preventDefault();
        const fetchUrl =  `https://www.themealdb.com/api/json/v1/1/search.php?s=`
        if(searchTerm != ""){
            fetch(`${fetchUrl}${searchTerm}`)
            .then((Response) => Response.json())
            .then((data) => setResult(data.meals))
        }
    }

  return (
    <div className="anasayfa">
        <Navbar/>
        <div className="hero">
            <div className="searchArea">

                <input type="text" placeholder="yemek ara" onChange={(e) => handleSearchTerm(e)} />

                <button onClick={handleSearchResult}>Yemek Ara</button>
                
            </div>
        </div>
        
        <section className="searchResult">
                
            <div className="searchList">
                {result.map((meal)=>(
                    <Link to={`/detay-sayfasi/${meal.idMeal}`} key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal}/>
                        <h3 key={meal.idMeal} className="ali">{meal.strArea}<strong>{meal.strMeal}</strong></h3>
                    </Link>
                ))}
            </div>        
                
            
        </section>

        <CategoryList />

    </div>
  )
}
export default Home