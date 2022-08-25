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
        <div className="col d-flex flex-column justify-content-start align-items-center">
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
              ? "En esta página encontrarás información acerca de mí y de los proyectos en los que he trabajado. En la barra de navegación están las opciones de visitar la página con los proyectos, descargar mi CV en pdf o cambiar el lenguaje de la página."
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
                        ? "Mi nombre es Luciano. Soy Desarrollador Full Stack, tengo algunos conocimientos de Minería de Datos y además soy Ingeniero Civil Químico." + " " +
                        "Mi interés por la programación empezó durante la pandemia. Me vi forzado a cerrar el proyecto que estaba desarrollando en el momento y buscando alternativas de carrera que se pudieran hacer de manera remota decidí explorar la Minería de Datos." + " " +
                        "Comenzé por aprender Python y luego realizé el diplomado \"Python y Minería de Datos\" de la Universidad Católica de Chile. Posteriormente, decidí complementar mis estudios con desarollo web, lo que me llevó a realizar el curso de \"Desarrollador Full Stack\" en 4Geeks Academy."
                        : "My name is Luciano. I'm a Full Stack Developer, I have some knowledge in Data Mining and I'm also a Chemical Engineer." + " " +
                        "My interest in programming began during the pandemic. I was forced to close the project I was working on and while searching for career alternatives that would allow me to work remotely I decided to explore Data Mining." + " " +
                        "First thing I did was learning Python and then I completed the diploma \"Python and Data Mining\" at Universidad Católica de Chile. Afterwards, I decided to complement my studies with web development, which lead me to complete the course \"Full Stack Developer\" at 4Geeks Academy."
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
                          ? "Trabajar con estructuras de datos y procesarlas para obtener resultados deseados (arrays/listas, objetos/diccionarios, etc)."
                          : "Working with data structures and process them to obtain desired results (arrays/lists, objects/dictionaries, etc)."
                      }
                    </li>
                    <li>
                      {
                        variables.isSpanish
                          ? "Procesar datos y sacar conclusiones relevantes para resolver un problema."
                          : "Process data and draw relevant conclusions to solve a problem."
                      }
                    </li>
                    <li>
                      {
                        variables.isSpanish
                          ? "Obtener datos de otras páginas (consumir APIs, webscraping, etc)."
                          : "Get data from other websites (consuming APIs, webscraping, etc)."
                      }
                    </li>
                  </ul>
                  <p>
                    {
                      variables.isSpanish
                        ? "Mis lenguajes de programación favoritos son Python y Javascript."
                        : "My favorite programming languages are Python and Javascript"
                    }
                  </p>
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
                ? "Estas son algunas de las tecnologías con las que he tenido trabajado"
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

  const { data: technologies } = await axios.get(`${process.env.BACK_END}/technologies`);
  

  return {
    props: {
      technologies
    }
  }
}