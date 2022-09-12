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
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
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
                                <a className="nav-link active" aria-current="page">
                                    {variables.isSpanish ? "Inicio" : "Home"}
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/projects">
                                <a className="nav-link active" aria-current="page">
                                    {variables.isSpanish ? "Proyectos" : "Projects"}
                                </a>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href={variables.isSpanish ? "https://drive.google.com/file/d/1sQC0ioZu48cL94S0AbFA2lXkdtKc-saa/view?usp=sharing" : "https://drive.google.com/file/d/17iPSFi3NOf-SStHQ52P6EsqkLD2eiefZ/view?usp=sharing"}>
                                <a target="_blank" className="nav-link active" aria-current="page">
                                    {variables.isSpanish ? "Descargar CV" : "Download CV"}
                                </a>
                            </Link>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {variables.isSpanish ? "Idioma" : "Language"}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><div onClick={() => setLanguage("esp")} role="button" className='m-1'><img className='img img-fluid flag-icon' src="/spain.png" alt="" />{variables.isSpanish ? "Español" : "Spanish"}</div></li>
                                <li><div onClick={() => setLanguage("ing")} role="button" className='m-1'><img className='img img-fluid flag-icon' src="/united-kingdom.png" alt="" />{variables.isSpanish ? "Inglés" : "English"}</div></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

