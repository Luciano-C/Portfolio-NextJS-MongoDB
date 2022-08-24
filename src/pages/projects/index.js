import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Filter } from '../../components/filter'
import { usePortfolioContext } from '../../context/PortfolioContext'
import { DropDownFilter } from '../../components/dropDownFilter'
import { useRouter } from 'next/router'



const Projects = ({ projects }) => {

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




  return (
    <div className='container-fluid text-white p-0'>

      <div className="row">
        <div className="col-md-9 offset-md-2 d-flex flex-column align-items-center justify-content-center">
          <h1 className='w-100 text-center mt-3'>{variables.isSpanish ? "Proyectos" : "Projects"}</h1>
          <p className='ms-2 me-2'>
            {
              variables.isSpanish
                ? "Aquí encontrarás algunos de los proyectos en los que he trabajado. En \"Leer más\" podrás ver algunas capturas de los proyectos, una breve descripción y un link al repositorio GitHub. También hay un filtro que permite mostrar sólo los proyectos que involucran las tecnologías seleccionadas."
                : "Here you will find some of the projects I have worked on. In \"Read more\" you will be able to see some screenshots, a brief description and a link to the GitHub repository. There is also a filter that allows to show only the projects in which the selected technologies are involved. "
            }
          </p>
          <div className="col d-lg-none">
            <DropDownFilter filterFunction={applyFilters} projects={projects} setFilteredProjects={setFilteredProjects} />
          </div>
        </div>
      </div>


      <div className="row">
        <div className="col-2 d-none d-lg-block">
          <Filter filterFunction={applyFilters} projects={projects} setFilteredProjects={setFilteredProjects} />
        </div>

        <div className="col-10">
          <ul className='d-flex row align-items-center justify-content-start'>
            {filteredProjects.map(x => {
              return (
                <div className="col-md-3 mt-2 mb-2 ms-3 d-flex justify-content-center ms-md-5" key={x._id}>
                  <div className="card bg-black" style={{ width: "90%", height: "26rem", border: "solid 2px blue" }}>
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
  const { data: projects } = await axios.get(`http://localhost:3000/api/projects`);
  return {
    props: {
      projects
    }
  }
}