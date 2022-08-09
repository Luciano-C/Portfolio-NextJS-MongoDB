import React from 'react'
import axios from 'axios'

const Projects = ({ projects }) => {
  return (
    <div className='container-fluid text-white p-0'>
      <div className="row">
        <div className="col">
          <ul className='d-flex row align-items-center justify-content-center'>
            {projects.map(x => {
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