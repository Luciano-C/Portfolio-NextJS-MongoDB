import { usePortfolioContext } from "../context/PortfolioContext"



export default function Home({ technologies }) {

  const { variables, actions } = usePortfolioContext();

  return (
    <div className="container-fluid text-white p-0">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <img
            src={variables.isSpanish
              ? "https://res.cloudinary.com/dpfjfmvzs/image/upload/v1659825429/Portfolio/General/Banner_Portfolio_esp_paafmf.png"
              : "https://res.cloudinary.com/dpfjfmvzs/image/upload/v1659825433/Portfolio/General/Banner_Portfolio_ing_nmljiw.png"
            }
            className="banner-foto img img-fluid"
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="m-3">
            {variables.isSpanish ? "Acerca de" : "About"}
          </h2>
          <p className="m-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quae dolores eius cupiditate perferendis aliquam alias corporis deleniti adipisci molestias,
            fugit delectus voluptatibus exercitationem ab cum pariatur blanditiis totam, quidem voluptatem illum eaque provident ad officiis quis quaerat!
            Accusantium rerum repudiandae quia dolore aliquid dicta quos labore harum nobis nemo impedit ipsam praesentium hic sapiente omnis,
            et magni ut rem consequatur itaque pariatur eius. Dolore, aliquam id?
            Consequatur atque minima aut quibusdam explicabo nisi recusandae debitis sapiente, tempora cumque repellendus quos a?
            Facilis numquam tenetur, et debitis quasi amet, impedit libero fugiat neque deleniti quis pariatur non, in est nemo inventore minima unde recusandae nulla corporis laborum soluta odit nesciunt consectetur?
            Dolores dignissimos repellat blanditiis sequi voluptatem numquam pariatur consequuntur dicta laudantium nulla, perspiciatis veniam? Eos magnam dolore accusantium hic harum blanditiis fugit,
            exercitationem incidunt vel deleniti officiis numquam, esse qui ab libero dolores dignissimos minus omnis tempore quisquam quo cumque! Architecto tenetur, reiciendis quia ipsum,
            itaque error voluptatibus cumque a ad eveniet beatae omnis doloremque officia optio.
            Eius quia adipisci tempore sunt fugit unde non veritatis nostrum nihil accusamus velit veniam dicta blanditiis amet suscipit eligendi sed temporibus voluptatem earum reprehenderit animi, libero harum explicabo quas? Corporis laborum cumque asperiores!
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h2 className="m-3">
            {variables.isSpanish ? "Tecnologías" : "Technologies"}
          </h2>
          <p className="m-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Expedita excepturi corrupti optio voluptatem sunt! Ipsa, provident eveniet. Beatae, numquam ipsum.
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
          <p className="m-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Expedita excepturi corrupti optio voluptatem sunt! Ipsa, provident eveniet. Beatae, numquam ipsum.
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

  const res = await fetch("http://localhost:3000/api/technologies");
  const technologies = await res.json();


  return {
    props: {
      technologies
    }
  }
}