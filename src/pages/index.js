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
              ? "En esta página encontrarás información acerca de mí, de los proyectos en los que he trabajado y algunas de las tecnologías que he utilizado."
              : "In this page you will find information about me, the projects I have worked on and some of the technologies I have used."
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
                        ? "Mi nombre es Luciano. Soy un ex Ingeniero Civil Químico que aprendió a programar de manera autodidacta el 2020. Posteriormente realicé un Diplomado en Python y Minería de Datos, seguido de un bootcamp de Desarrollo Full Stack. Hoy me encuentro liderando el equipo de desarrollo en mi empresa actual."
                        : "My name is Luciano. I am a former Chemical Engineering who self-taught programming in 2020. Subsequently, I completed a Diploma in Python and Data Mining, followed by a Full Stack Development bootcamp. Today, I am leading the development team at my current company."
                    }
                  </p>

                  <p className="card-text mt-4">
                    {
                      variables.isSpanish
                        ? "Entre mis éxitos destacan el lanzamiento de la plataforma E-Commerce de mi empresa actual y el desarrollo de una aplicación para optimizar las ventas, permitiendo realizar ofertas personalizadas basadas en historiales de compras de los clientes y precio de compra de los productos a proveedores."
                        : "Among my notable achievements are the launch of the E-Commerce platform at my current company and the development of an application to optimize sales, enabling the creation of personalized offers based on customers' purchase histories and the purchase price of products from suppliers."
                    }
                  </p>
                  
                  <p className="card-text mt-4">
                    {
                      variables.isSpanish
                        ? "Mi experiencia está focalizada principalmente al desarrollo back-end con Python, desarrollo front-end con React y despliegue de aplicaciones utilizando AWS. Me gusta participar en proyectos que permitan generar valor a través de los datos, especialmente aquellos que involucren técnicas de Machine Learning o Deep Learning."
                        : "My experience is primarily focused on back-end development with Python, front-end development with React, and deploying applications using AWS. I enjoy participating in projects that allow generating value through data, especially those involving Machine Learning or Deep Learning techniques."
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