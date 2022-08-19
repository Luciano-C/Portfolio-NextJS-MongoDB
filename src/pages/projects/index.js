import React, { useState, useEffect } from 'react'
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
  }

  useEffect(() => {
    actions.removeAllFilters();
  }, []);


  if (error) return <Error statusCode={error.statusCode} title={error.statusText} />

  return (
    <div className='container-fluid text-white p-0'>

      <div className="row">
        <div className="col-md-9 offset-md-2 d-flex flex-column align-items-center justify-content-center">
          <h1 className='w-100 text-center'>{variables.isSpanish ? "Proyectos" : "Projects"}</h1>
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
                <div className="col-md-3 mt-2 mb-2 ms-3 d-flex justify-content-center ms-md-5" key={x._id}>
                  <div className="card bg-black" style={{ width: "90%", height: "26rem",  border: "solid 2px blue"  }}>
                    <img src={x.imagen_card} className="card-img-top project-card-img pe-3 ps-3 pt-3 pb-3" alt="..." />
                    <div className="card-body bg-dark d-flex flex-column align-items-center justify-content-between">
                      <h5 className="card-title">{variables.isSpanish ? x.nombre : x.name}</h5>
                      <span className="card-text text-center h-25">Tags: {x.tags.join(", ")}.</span>
                      <button className='btn btn-primary w-50' onClick={() => { buttonClick(x) }}>{variables.isSpanish ? "Leer más" : "Read more"}</button>
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