import React from 'react'
import Link from 'next/link'
import { usePortfolioContext } from '../context/PortfolioContext'




export const Navbar = () => {

    const { variables, actions } = usePortfolioContext();

    const setLanguage = (language) => {
        switch (true) {
            case language === "esp" && variables.isSpanish:
                break;
            case language === "esp" && !variables.isSpanish:
                actions.toggleLanguage();
                break;
            case language === "ing" && variables.isSpanish:
                actions.toggleLanguage();
                break;
            case language === "ing" && !variables.isSpanish:
                break;
            default:
                break;
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">
                        <img className='d-inline-block align-text-top lcf-logo' src="/logo.png" alt="" />
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page">Home</a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/projects">
                                <a className="nav-link active" aria-current="page">Projects</a>
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Lenguaje
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><div onClick={() => setLanguage("esp")} className="language-div"><img className='img img-fluid flag-icon' src="/spain.png" alt="" />Español</div></li>
                                <li><div onClick={() => setLanguage("ing")} className="language-div"><img className='img img-fluid flag-icon' src="/united-kingdom.png" alt="" />Inglés</div></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

