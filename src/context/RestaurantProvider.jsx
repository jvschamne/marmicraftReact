import { useState } from "react"
import RestaurantContext from "./RestaurantContext"

const RestaurantProvider = ( { children } ) => {
    const [restaurant, setRestaurant] = useState(0)

    const changeRestaurant = (rest) => {
        console.log(rest)
        setRestaurant(rest)
    }

    return(
        <RestaurantContext.Provider value={{restaurant, changeRestaurant}}>
            {children}
        </RestaurantContext.Provider>
    )
}

export default RestaurantProvider