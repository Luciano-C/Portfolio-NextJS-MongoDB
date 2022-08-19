import React from 'react'

export const Carousel = ({ project }) => {
    return (

        <div id="carouselExampleControls" className="carousel slide w-100" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={project.imagen_card} className="d-block carousel-img" alt="..." />
                </div>
                {project.imagenes_carousel.map((x, i) => {
                    return (
                        <div key={i} className="carousel-item">
                            <img src={x} className="d-block carousel-img" alt="..." />
                        </div>
                    )
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

