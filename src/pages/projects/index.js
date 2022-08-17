import React, { useState } from 'react'
import axios from 'axios'
import { Filter } from '../../components/filter'
import { usePortfolioContext } from '../../context/PortfolioContext'
import { DropDownFilter } from '../../components/dropDownFilter'
import { useRouter } from 'next/router'
import Error from "next/error"


const Projects = ({ projects, error }) => {

  const { variables, actions } = usePortfolioContext();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const router = useRouter();


  // Chequea si los tags de un proyecto incluyen todos los filtros
  const checkFilters = (filters, tags) => {
    return filters.every(filter => tags.includes(filter));
  }

  // Aplica la función de chequear filtros a cada proyecto, devuelve los que lo cumplen y ajusta el arreglo para el mapeo
  const applyFilters = () => {
    setFilteredProjects(projects.filter(x => checkFilters(variables.filters, x.tags)));
  }


  const buttonClick = (project) => {
    router.push(`/projects/${project._id}`);
    actions.removeAllFilters();
  }

  if (error) return <Error statusCode={error.statusCode} title={error.statusText} />

  return (
    <div className='container-fluid text-white p-0'>

      <div className="row">
        <div className="col d-flex flex-column align-items-center">
          <h1>{variables.isSpanish ? "Proyectos" : "Projects"}</h1>
          <p className='ms-2 me-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, doloremque consectetur perferendis explicabo similique dolorem?</p>
          <div className="col d-lg-none">
            <DropDownFilter filterFunction={applyFilters} />
          </div>
          {/* <div className="d-flex align-items-center w-50" style={{border: "solid white 1px"}}>
            <span className='ms-5'>Filtros:</span>
            <ul>
              {variables.filters.map((x, i) => {
                return (
                  <button className='filter-button btn btn-primary me-1 mb-1' key={i}>
                    {x}
                  </button>
                )
              })}
            </ul>
          </div> */}
        </div>
      </div>


      <div className="row">
        <div className="col-2 d-none d-lg-block">
          <Filter filterFunction={applyFilters} />
        </div>

        <div className="col-10">
          <ul className='d-flex row align-items-center justify-content-start'>
            {filteredProjects.map(x => {
              return (
                <div className="col-md-3 m-2" key={x._id}>
                  <div className="card bg-black" style={{ width: "90%" }}>
                    <img src={x.imagenes.card} className="card-img-top project-card-img" alt="..." />
                    <div className="card-body d-flex flex-column align-items-center">
                      <h5 className="card-title">{variables.isSpanish ? x.nombre : x.name}</h5>
                      <span className="card-text">Tags: {x.tags.join(", ")}.</span>
                      <button className='btn btn-primary mt-1 w-50' onClick={() => { buttonClick(x) }}>{variables.isSpanish ? "Leer más" : "Read more"}</button>
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