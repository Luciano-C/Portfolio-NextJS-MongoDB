import React from 'react'
import Link from 'next/link'


export const Navbar = () => {
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
                                {/* <li><a className="dropdown-item" href="#">Español</a></li>
                                <li><a className="dropdown-item" href="#">Inglés</a></li> */}
                                <li><div><img className='img img-fluid flag-icon' src="/spain.png" alt="" />Español</div></li>
                                <li><div><img className='img img-fluid flag-icon' src="/united-kingdom.png" alt="" />Inglés</div></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

