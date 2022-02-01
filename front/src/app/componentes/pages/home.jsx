import React from 'react'

const Home = () => {
    return (

        <main className="main-content">

            <div className="main ">
                <div className="container-fluid">
                    <div className="main-title">
                        <div className="col">
                            <h1>

                                BIENVENIDOS A <span>FRIEND</span>
                            </h1>

                            
                        </div>
                    </div>

                </div>
            </div>
            <div className="container d-flex align-items-center mt-5 mb-5 justify-content-around">
                <div className="row">

                <div className="col title-section-main-content">
                    <h2>
                        Pasa una Noche inolvidable
                    </h2>
                    <p> Veni con tu grupo de amigos a disfrutar de la mejor musica y los mejores tragos, aprovecha nuestras promos  Estamos de Jueves a Domingos de 21:30 a 4:30.
                    </p>
                    <a href="/catalogo" className="btn btn-light "> Ver la carta </a>
                </div>
                <div className="col">
                    <img className="home-section-content-img" src="https://images.pexels.com/photos/2078008/pexels-photo-2078008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=300" alt="gente bailando y brindando" />
                </div >

                </div>
            </div>
        </main>


    )
}

export default Home
