import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Carousel } from '../../components/carousel'
import { usePortfolioContext } from '../../context/PortfolioContext'
import Link from 'next/link'
import Error from 'next/error'

const ProjectDetail = ({ project, error }) => {

  const router = useRouter();
  const { variables, actions } = usePortfolioContext();

  useEffect(() => {
    actions.removeAllFilters();
  }, []);

  if (error) return (
    <div className='text-white'>
      <Error statusCode={error.statusCode} title={error.statusText} backgroundColor='red'/>
    </div>

  )
  return (
    <div className='container-fluid text-white'>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <Carousel project={project} />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1 className='mt-2 mb-4'>{variables.isSpanish ? project.nombre : project.name}</h1>
          <div className='col'>
            {
              variables.isSpanish
                ? project.descripcion.split("\n").map((x, i) => {
                  return (
                    <p className="mt-0 mb-0" key={i}>{x}</p>
                  )
                })
                : project.description.split("\n").map((x, i) => {
                  return (
                    <p className="mt-0 mb-0" key={i}>{x}</p>
                  )
                })
            }
          </div>
          <span className='mt-5'>Tags: {project.tags.join(", ")}.</span>
        </div>
      </div>
      <div className="row mt-3 pb-2">
        <div className='col-12 d-flex justify-content-center'>
          <span className='me-3'>Link:</span>
          <Link href={project.link}>
            <a target="_blank">{project.nombre}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail


export const getServerSideProps = async (context) => {

  const { query: { id } } = context;

  try {
    const res = await axios.get(`${process.env.BACK_END}/projects/${id}`)
    const project = res.data;

    return {
      props: {
        project
      }
    }
  } catch (err) {
    return {
      props: {
        error: {
          statusCode: err.response.status,
          statusText: err.response.data.msg
        }
      }
    }
  }








} 