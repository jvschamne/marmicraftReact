import { useContext } from 'react'
import RestaurantContext from '../context/RestaurantContext'

import restaurantData from '../data/data'
import Card from '../components/Card'

const RestaurantesMenu = () => {

    const { restaurant, changeRestaurant } = useContext(RestaurantContext)
    

    const handleClick = (selectedRest) => {
        console.log(selectedRest)
        
        changeRestaurant(selectedRest);
        console.log({changeRestaurant})
        console.log({restaurant})
    }


    return(
        <span>
            <h1>Restaurantes Disponíveis na sua região </h1>
            <div className="Cards">
                {
                restaurantData.map((rest, i) => (
                    <Card img={rest["img"]} name={rest["name"]} rest={rest["info"]} id={i} onClick={handleClick}></Card>
                ))
                
                }
            </div>
        </span>
    )
}

export default RestaurantesMenu

