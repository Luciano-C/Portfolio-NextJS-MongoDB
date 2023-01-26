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
              ? "¡Gracias por visitar mi portafolio! Aquí encontrarás una selección de mi trabajo y proyectos pasados que muestran mis habilidades y experiencia. Estoy constantemente actualizando mi portafolio, por lo que visítalo a menudo para ver mis últimas creaciones."
              : "Thank you for visiting my portfolio! Here you will find a selection of my past work and projects that showcase my skills and experience. I am constantly updating my portfolio, so check back often to see my latest creations."
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
                        "Los lenguajes de programación que manejo son Python y Javascript. Algunas tecnologías relevantes con las que he trabajado son React, NextJS, NumPy, Pandas y Scikit-Learn."
                        : "My name is Luciano. I'm a Chemical Engineer in transition to the IT world." + " " +
                        "I have a diploma in Python and Data Mining and a Full Stack Developer certificate." + " " +
                        "My main programming languages are Python and Javascript. Some other relevant technologies I have worked with are React, NextJS, NumPy, Pandas and Scikit-Learn."
                    }
                  </p>
                  <p className="card-text">
                    {
                      variables.isSpanish
                        ? "Actualmente estoy enfocado en mejorar mis habilidades para crear aplicaciones que funcionen en base a datos, que permitan a los usuarios tomar decisiones informadas y resolver problemas reales."
                        : "I'm currently focused on improving my skills to create data driven applications that will allow the usesr to make informed decisions and solve real problems."
                    }
                  </p>

                  <p className="card-text">
                    {
                      variables.isSpanish
                        ? "Además de mis habilidades técnicas, aprendo rápido, soy orientado a detalles, analítico, tengo un nivel avanzado de inglés y siempre aprendiendo y mejorando."
                        : "In addition to my technical skills, I'm also a fast learner, detail-oriented, analytical, I have an advanced level of english and I'm constantly learning and improving."
                    }
                  </p>

                  <p className="card-text">
                    {
                      variables.isSpanish
                        ? "Estoy emocionado de continuar mi viaje en la industria de la tecnología y estoy abierto a nuevas oportunidades para crecer y aprender. Creo que mi experiencia en ingeniería química y mi pasión por soluciones basadas en datos me convierten en un activo valioso para cualquier equipo. Tengo muchas ganas de poder usar mis habilidades y conocimientos para contribuir a proyectos significativos y tener un impacto real."
                        : "I am excited to continue my journey in the technology industry and am open to new opportunities to grow and learn. I believe that my background in chemical engineering and my passion for data-driven solutions make me a valuable asset to any team. I am looking forward to using my skills and knowledge to contribute to meaningful projects and make a real impact."
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