import { usePortfolioContext } from "../context/PortfolioContext"


export default function Home() {

  const { variables, actions } = usePortfolioContext();

  return (
    <div className="container-fluid bg-black text-white">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <img
            src={variables.isSpanish
              ? "https://res.cloudinary.com/dpfjfmvzs/image/upload/v1659722152/Portfolio/General/Banner_LinkedIn_wn1nq9.png"
              : "https://res.cloudinary.com/dpfjfmvzs/image/upload/v1659723320/Portfolio/General/Banner_LinkedIn_eng_oaayxh.png"
            }
            className="banner-foto img-fluid"
          />
        </div>
      </div>

      <div className="row">
            <div className="col">
              <h2 className="m-3">
                Acerca de
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


    </div>
  )
}
