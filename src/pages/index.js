import { usePortfolioContext } from "../context/PortfolioContext"
import axios from "axios"
import { useEffect } from "react";




export default function Home({ technologies }) {

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
            {variables.isSpanish ? "¡Hola!" : "Hi!"}
          </h2>
          <p className="ms-3 me-3">
            {
            variables.isSpanish
              ? "¡Gracias por visitar mi portafolio! Aquí encontrarás una selección de mi trabajo y proyectos pasados que muestran mis habilidades y experiencia. Estoy constantemente actualizando mi portafolio, por lo que te invito a visitarlo con frecuencia para ver mis últimos proyectos."
              : "Thank you for visiting my portfolio! Here you will find a selection of my past work and projects that showcase my skills and experience. I am constantly updating my portfolio, so I invite you to come back often to see my latest projects."
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
                        ? "Mi nombre es Luciano. Soy un Ingeniero Civil Químico en transición al mundo de la tecnología." + " " +
                        "Tengo un diplomado en Python y Minería de Datos y un certificado de Desarrollador Full Stack." + " " +
                        "Los lenguajes de programación que manejo son Python y JavaScript. Algunas tecnologías con las que he trabajado son Django, React, NextJS, NumPy, Pandas y Scikit-Learn."
                        : "My name is Luciano. I'm a Chemical Engineer in transition to the IT world." + " " +
                        "I have a diploma in Python and Data Mining and a Full Stack Developer certificate." + " " +
                        "My main programming languages are Python and JavaScript. Some other technologies I have worked with are Django, React, NextJS, NumPy, Pandas and Scikit-Learn."
                    }
                  </p>
                  <p className="card-text">
                    {
                      variables.isSpanish
                        ? "Actualmente estoy enfocado en mejorar mis habilidades para crear aplicaciones que funcionen en base a datos, que permitan a los usuarios tomar decisiones informadas y resolver problemas reales."
                        : "I'm currently focused on improving my skills to create data driven applications that will allow the users to make informed decisions and solve real problems."
                    }
                  </p>

                  <p className="card-text">
                    {
                      variables.isSpanish
                        ? "Además de mis habilidades técnicas, destaco por mi capacidad para aprender rápidamente y mi atención al detalle. Soy un pensador analítico y siempre estoy buscando maneras de mejorar mis habilidades y conocimientos. También cuento con un nivel avanzado de inglés, lo que me permite comunicarme eficazmente en un entorno internacional y trabajar con equipos distribuidos en diferentes partes del mundo."
                        : "In addition to my technical skills, I stand out for my ability to learn quickly and my attention to detail. I am an analytical thinker and always looking for ways to improve my skills and knowledge. I also have an advanced level of English, which allows me to communicate effectively in an international environment and work with teams distributed in different parts of the world."
                    }
                  </p>

                  <p className="card-text">
                    {
                      variables.isSpanish
                        ? "Estoy entusiasmado de continuar mi viaje en la industria de la tecnología y siempre estoy buscando nuevas oportunidades para crecer y aprender. Con mi experiencia en ingeniería química y mi interés en soluciones basadas en datos, creo que puedo aportar valor a cualquier equipo. Espero poder utilizar mis habilidades y conocimientos para contribuir a proyectos interesantes y desafiantes."
                        : "I am excited to continue my journey in the tech industry and always looking for new opportunities to grow and learn. With my background in chemical engineering and interest in data-driven solutions, I believe I can bring value to any team. I look forward to using my skills and knowledge to contribute to interesting and challenging projects."
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


export const getServerSideProps = async (context) => {

  const { data: technologies } = await axios.get(`${process.env.BACK_END}/technologies?api_key=${process.env.API_SECRET_KEY}`);
  

  return {
    props: {
      technologies
    }
  }
}