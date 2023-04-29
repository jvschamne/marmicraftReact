import './Card.css'
import { useContext } from 'react'
import RestaurantContext from '../context/RestaurantContext'
import { Link } from 'react-router-dom'
const Card = ({ img, name, id, onClick }) => {

    const { restaurant, changeRestaurant } = useContext(RestaurantContext)

    console.log('Card id =', id)
    return(
        <div id={id} className="Card">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <h3>{ name }</h3>
            <Link to="/restaurant" onClick={() => onClick(id)} className='button'>ACESSAR RESTAURANTE</Link>
        </div>
    )
}

export default Card