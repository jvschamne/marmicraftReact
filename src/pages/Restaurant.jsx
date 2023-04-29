import { useContext, useEffect } from "react"
import RestaurantContext from "../context/RestaurantContext"

import './Restaurant.css'

import Option from "../components/Option"
import restaurantData from "../data/data"

const Restaurant = ( ) => {

    const { restaurant, setRestaurant } = useContext(RestaurantContext)


    console.log(restaurantData[restaurant]["options"][0]["title"])

    return(
        <div className="Restaurant">   
            <div className="Restaurant-info">
                <img src={restaurantData[restaurant]["img"]}/>
                <div className="aux">
                    <h1>{restaurantData[restaurant]["name"]}</h1>
                    <h3>{restaurantData[restaurant]["info"]}</h3>
                </div>
                
            </div>
            
            
            <div className="options">
                <Option img={restaurantData[restaurant]["options"][0]["image"]} name={restaurantData[restaurant]["options"][0]["title"]} id={1}></Option>
                <Option img={restaurantData[restaurant]["options"][1]["image"]} name={restaurantData[restaurant]["options"][1]["title"]} id={2}></Option>
                <Option img={restaurantData[restaurant]["options"][2]["image"]} name={restaurantData[restaurant]["options"][2]["title"]} id={3}></Option>
            </div>
        </div>
    )
}

export default Restaurant
