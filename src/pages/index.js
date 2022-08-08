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

          <div className="card mb-3 bg-transparent" style={{ maxWidth: "98%" }}>
            <div className="row g-0">
              <div className="col-md-9">
                <div className="card-body">
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nisi voluptas. Eaque incidunt reprehenderit eveniet quasi architecto, possimus voluptatum quos iusto laudantium, voluptatem error ex quam minima totam maiores ratione. 
                  Voluptatibus repellendus corrupti id! Architecto optio repudiandae odio, facere cumque, minima officia illum harum eius nisi excepturi aliquid nam distinctio labore. Soluta ad atque rerum deserunt fugiat debitis praesentium optio necessitatibus iste sit voluptas dicta nobis quam reprehenderit hic dolore, 
                  quo totam alias voluptatum ipsam aut. Sed at eaque molestias, distinctio consequuntur perspiciatis in. Eos, adipisci quibusdam dolores perferendis asperiores, libero distinctio, repellat blanditiis sit laboriosam ut quaerat similique accusantium sed sunt in perspiciatis reprehenderit cupiditate aperiam explicabo magni eaque temporibus quasi nisi? Eum architecto dolorum aliquid voluptatem molestias, 
                  quod nostrum libero inventore minima debitis voluptates voluptatibus molestiae. Deleniti enim quia rerum velit dolor ut asperiores optio fugit consectetur qui iure, quis, perspiciatis expedita. Quos reiciendis atque suscipit minima, aut ex. Excepturi ex quaerat quia harum labore pariatur est asperiores, 
                  voluptas alias dolore eum molestiae dignissimos deleniti sint maiores quam enim quod consequatur a possimus nulla aperiam minus neque nobis! Esse doloribus illo corrupti minus? Sed culpa, illo expedita ipsa dolore consequuntur rem quibusdam labore placeat ea id? Quas, explicabo?</p>
                </div>
              </div>
              <div className="col-md-3">
                <img src="https://res.cloudinary.com/dpfjfmvzs/image/upload/v1659924675/Portfolio/General/Foto_CV_mustab.jpg" class="img-fluid rounded" alt="..." />
              </div>
            </div>
          </div>



          {/* <p className="m-3">
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
          </p> */}
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