import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DMeta" />
                <h1>DMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/oceloamarant/">@oceloamarant</a>
                </p>
            </div>
        </header>


    )
}

export default Header