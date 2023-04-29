import './NavBar.css'

const NavBar = () => {
    return(
        <div className="NavBar">
            <h1>Marmicraft</h1>
            <nav>
                <ul>
                    <li className='nav-item'>
                        <a href="/">
                            <i className="fas fa-home"></i>Restaurantes
                        </a>
                    </li>
                    <li className='nav-item'><a href="conta"><i className="fas fa-user"></i>Minha conta</a></li>
                    <li className='nav-item'><a href="sair"><i className="fas fa-arrow-alt-circle-left"></i>Sair</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar