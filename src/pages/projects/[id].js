import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Carousel } from '../../components/carousel'
import { usePortfolioContext } from '../../context/PortfolioContext'

const ProjectDetail = ({ project }) => {

  const router = useRouter();
  const { variables, actions } = usePortfolioContext();

  return (
    <div className='container-fluid text-white'>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <Carousel project={project} />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1>{variables.isSpanish ? project.nombre : project.name}</h1>
          <p style={{height: "30vh"}}>{variables.isSpanish ? project.descripcion : project.description}</p>
          <span>Tags: {project.tags.join(", ")}.</span>
          <span>Link: {project.link}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail


export const getServerSideProps = async (context) => {

  const { query: { id } } = context;

  const res = await axios.get(`http://localhost:3000/api/projects/${id}`)

  const project = res.data;


  return {
    props: {
      project
    }
  }

} 