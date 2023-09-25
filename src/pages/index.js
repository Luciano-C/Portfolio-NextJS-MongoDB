import { usePortfolioContext } from "../context/PortfolioContext"
import axios from "axios"
import { useEffect } from "react";




const Perfil = ({ technologies }) => {

  const { variables, actions } = usePortfolioContext();

  useEffect(() => {
    actions.removeAllFilters();
  }, []);

  return (
    <div className="container-fluid text-white p-0">
      <div className="row">
        <div className="col d-flex flex-column justify-content-start align-items-center p-0">
          <img
            src={
              variables.isSpanish
                ? "https://res.cloudinary.com/dpfjfmvzs/image/upload/v1659825429/Portfolio/General/Banner_Portfolio_esp_paafmf.png"
                : "https://res.cloudinary.com/dpfjfmvzs/image/upload/v1659825433/Portfolio/General/Banner_Portfolio_ing_nmljiw.png"
            }
            className="banner-foto img"
            alt="..."
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="mt-0 ms-3">
            {variables.isSpanish ? "Hola!" : "Hi!"}
          </h2>
          <p className="ms-3 me-3" style={{ height: "7em" }}>{
            variables.isSpanish
              ? "En esta página encontrarás información acerca de mí y de los proyectos en los que he trabajado. En la barra de navegación están las opciones de visitar la página con los proyectos, descargar mi CV en pdf o cambiar el idioma de la página."
              : "In this page you will find information about me and the projects I have worked on. With the navigation bar you can visit the page with the projects, download my CV or change the language of the website. "
          }
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="ms-3 mt-3">
            {variables.isSpanish ? "Acerca de mí" : "About me"}
          </h2>
          <div className="card mb-3 bg-transparent border-0" style={{ maxWidth: "98%" }}>
            <div className="row g-0">
              <div className="col-md-9">
                <div className="card-body">
                  <p className="card-text mt-3">
                    {
                      variables.isSpanish
                        ? "Mi nombre es Luciano. Soy Desarrollador Full Stack con un gran interés en Minería de Datos y Machine Learning." + " " +
                        "Entre mis estudios tengo un Diplomado en \"Python y Minería de Datos\" de la Universidad Católica de Chile, un certificado de \"Desarrollador Full Stack\" en 4Geeks Academy y un título de Ingeniero Civil Químico de la Universidad Católica de Valparaíso."
                        : "My name is Luciano. I am a Full Stack Developer with a strong interest in Data Mining and Machine Learning." + " " +
                        "Among my educational credentials are a diploma in \"Python and Data Mining\" from Universidad Católica de Chile, a \"Full Stack Developer\" certificate from 4Geeks Academy, and a degree in Chemical Engineering from Universidad Católica de Valparaíso."
                    }
                  </p>

                  <p>
                    {
                      variables.isSpanish
                        ? "Mis lenguajes de programación principales son Python y Javascript. Algunas tecnologías con las que me gusta trabajar incluyen Django, FastAPI, React y NextJS."
                        : "My main programming languages are Python and Javascript. Some technologies that I like to work with include Django, FastAPI, React and NextJS."
                    }
                  </p>

                  <p className="card-text">
                    {
                      variables.isSpanish
                        ? "Los proyectos más interesantes para mí incluyen:"
                        : "The most interesting projects for me include:"
                    }
                  </p>
                  <ul>
                    <li>
                      {
                        variables.isSpanish
                          ? "Integración de modelos de aprendizaje automático en aplicaciones web."
                          : "Working with data structures and process them to obtain desired results (arrays/lists, objects/dictionaries, etc)."
                      }
                    </li>
                    
                    <li>
                      {
                        variables.isSpanish
                          ? "Desarrollo de APIs robustas en el backend para soluciones escalables."
                          : "Developing robust backend APIs for scalable solutions."
                      }
                    </li>

                    <li>
                      {
                        variables.isSpanish
                          ? "Análisis y procesamiento de datos para extraer insights significativos."
                          : "Data analysis and processing to extract meaningful insights."
                      }
                    </li>

                    <li>
                      {
                        variables.isSpanish
                          ? "Despliegue de aplicaciones en entornos de nube como AWS y Digital Ocean."
                          : "Deploying applications in cloud environments like AWS and Digital Ocean."
                      }
                    </li>

                    <li>
                      {
                        variables.isSpanish
                          ? "Trabajar con contenedores Docker para facilitar el desarrollo y la distribución."
                          : "Working with Docker containers to streamline development and distribution."
                      }
                    </li> 
                  </ul>
                  
                  <p>
                    {
                      variables.isSpanish
                        ? "Me gusta trabajar con código limpio, fácil de leer y mantener."
                        : "I like to work with clean code, easy to read and maintain."
                    }
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <img src="https://res.cloudinary.com/dpfjfmvzs/image/upload/v1661275299/Portfolio/General/Untitled_design_l9sufs.png" className="profile-photo rounded ms-1 me-1" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="m-3">
            {variables.isSpanish ? "Tecnologías" : "Technologies"}
          </h2>
          <p className="m-3">
            {
              variables.isSpanish
                ? "Estas son algunas de las tecnologías con las que he trabajado."
                : "These are some of the technologies I have worked with."
            }
          </p>
          <ul className="d-flex overflow-auto justify-content-between p-2 m-3">
            {technologies.filter(x => x.status === "learned").map((x, i) => {
              return (
                <div key={i} className="m-3 d-flex flex-column align-items-center">
                  <div className="technology-background d-flex justify-content-center align-items-center">
                    <img src={x.link} className="img technologies" />
                  </div>
                  <span>{x.name}</span>
                </div>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="m-3">
            {variables.isSpanish ? "Actualmente aprendiendo" : "Currently learning"}
          </h2>
          <p className="m-3">
            {
              variables.isSpanish
                ? "Estas son algunas de las tecnologías que estoy aprendiendo actualmente."
                : "These are some of the technologies I'm currently learning."
            }
          </p>
          <ul className="d-flex overflow-auto justify-content-start p-2 m-3">
            {technologies.filter(x => x.status === "learning").map((x, i) => {
              return (
                <div key={i} className="m-4 d-flex flex-column align-items-center">
                  <div className="technology-background d-flex justify-content-center align-items-center">
                    <img src={x.link} className="img technologies" />
                  </div>
                  <span>{x.name}</span>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Perfil


export const getServerSideProps = async (context) => {

  const { data: technologies } = await axios.get(`${process.env.BACK_END}/technologies?api_key=${process.env.API_SECRET_KEY}`);
  

  return {
    props: {
      technologies
    }
  }
}