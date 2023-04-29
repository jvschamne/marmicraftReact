import './Option.css'

const Option = ({ img, name, id, info, onClick }) => {
    return(
        <div id={id} className="Option">
            <div className="image-container">
                <img src={img} alt="" />
            </div>
            <h3>{ name }</h3>
            {/*<Link to="/restaurant" onClick={() => onClick(id)} className='button'>ACESSAR RESTAURANTE</Link>*/}
            <button className="button">Adicionar à sacola</button>
        </div>
    )
}

export default Option