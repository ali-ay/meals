import { useParams } from "react-router-dom"
import CategoryList from "../CategoryPage/CategoryList"
import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"

const DetailPage = () => {

    const [productDetail, setProductDetail] = useState([]);
    const params = useParams()

    const fetchUrl =  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`

    useEffect(()=>{
        if(params.id != ""){
            fetch(`${fetchUrl}${params.id}`)
            .then((Response) => Response.json())
            .then((data) => setProductDetail(data.meals))
        }
    },[])
    

  return (
    <>
        <Navbar />
        <section className="productDetailContainer">
            <div className="detailContainer">
                {console.log(productDetail)}
                {productDetail.map((product)=>(
                    <div>
                        <div className="productIngredients">
                            <img src={product.strMealThumb} />
                            <div className="productIngredientsInfo">
                                <h2>{product.strMeal}</h2>
                                <h4>Category: {product.strCategory}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CategoryList />
        </section>
    </>
  )
}
export default DetailPage