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
          <h2 className="ms-3 mt-3">
            {variables.isSpanish ? "Acerca de mí" : "About me"}
          </h2>
          <div className="card mb-3 bg-transparent border-0" style={{ maxWidth: "98%" }}>
            <div className="row g-0">
              <div>
                <div className="card-body">
                  <p className="card-text mt-3">
                    {
                      variables.isSpanish
                        ? "¡Hola! Soy Luciano, Desarrollador Full Stack e Ingeniero Químico, orientado a resolver problemas complejos con un enfoque analítico."
                        : "Hi! I'm Luciano, a Full Stack Developer and Chemical Engineer oriented toward solving complex problems with an analytical approach."
                    }
                  </p>

                  <p className="card-text mt-3">
                    {
                      variables.isSpanish
                        ? "Tras hacer la transición desde la ingeniería hacia el desarrollo de software, realicé un Diplomado en Python y Minería de Datos, seguido de un bootcamp de Desarrollo Full Stack."
                        : "After shifting from engineering to software development, I completed a Diploma in Python and Data Mining and later a Full Stack Development bootcamp."
                    }
                  </p>
                  
                  <p className="card-text mt-3">
                    {
                      variables.isSpanish
                        ? "Desde entonces, he trabajado en proyectos enfocados en el desarrollo back-end, incluyendo la creación de APIs, integraciones con sistemas ERP y el despliegue de aplicaciones utilizando tecnologías como FastAPI, Django, Docker y AWS."
                        : "Since then, I've worked on backend-focused projects involving API development, ERP integrations, and deployment using technologies like FastAPI, Django, Docker, and AWS."
                    }
                  </p>

                  <p className="card-text mt-3">
                    {
                      variables.isSpanish
                        ? "Actualmente estoy enfocado en el desarrollo back-end con Python y me interesan los proyectos que involucren Machine Learning, Deep Learning y Ciencia de Datos."
                        : "I'm currently focused on Python-based back-end development and interested in projects involving Machine Learning, Deep Learning, and Data Science."
                    }
                  </p>
                </div>
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
                ? "Estas son algunas de las tecnologías que he utilizado o que estoy explorando actualmente."
                : "These are some of the technologies I’ve worked with or am currently exploring."
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