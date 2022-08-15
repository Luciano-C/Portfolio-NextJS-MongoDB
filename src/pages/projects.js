import React, { useState } from 'react'
import axios from 'axios'
import { Filter } from '../components/filter'
import { usePortfolioContext } from '../context/PortfolioContext'

const Projects = ({ projects }) => {

  const { variables, actions } = usePortfolioContext();
  const [filteredProjects, setFilteredProjects] = useState(projects);


  // Chequea si los tags de un proyecto incluyen todos los filtros
  const checkFilters = (filters, tags) => {
    return filters.every(filter => tags.includes(filter));
  }
  
  // Aplica la función de chequear filtros a cada proyecto, devuelve los que lo cumplen y ajusta el arreglo para el mapeo
  const applyFilters = () => {
    setFilteredProjects(projects.filter(x => checkFilters(variables.filters, x.tags)));
  }

  return (
    <div className='container-fluid text-white p-0'>

      <div className="row">
        <div className="col d-flex flex-column align-items-center">
          <h1>Proyectos</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, doloremque consectetur perferendis explicabo similique dolorem?</p>
          <div className="d-flex">
            <span>Filtros:</span>
            <ul>
              {variables.filters.map((x, i) => {
                return (
                  <button key={i}>
                    {x}
                  </button>
                )
              })}
            </ul>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-2 d-none d-lg-flex flex-column align-items-center" style={{ border: "solid 1px white" }}>
          <Filter />
          <button className='btn btn-primary' onClick={applyFilters}>Filter</button>
        </div>
        <div className="col-10">
          <ul className='d-flex row align-items-center justify-content-start'>
            {filteredProjects.map(x => {
              return (
                <div className="col-md-3 m-2" key={x._id}>
                  <div className="card bg-black" style={{ width: "90%" }}>
                    <img src={x.imagenes.card} className="card-img-top project-card-img" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{x.nombre}</h5>
                      <p className="card-text">{x.descripcion}</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
      </div>



    </div>
  )
}

export default Projects

export const getServerSideProps = async (context) => {
  const { data: projects } = await axios.get("http://localhost:3000/api/projects");


  return {
    props: {
      projects
    }
  }
}