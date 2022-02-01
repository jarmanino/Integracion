import ProductsTasks from "../ProductTasks"
const administrator = () => {
    return (
        <div className="container">
            <div className="div">
                <h1>Portal del Administrador</h1>
                <h2>Desde esta seccion podra agregar, editar y eliminar productos del catalogo</h2>
               
                <div className="row">
                    <div className="col">
                       <>
                       <ProductsTasks/>
                       </>
                       
                    </div>
                </div>
            </div>

        </div>
    )
}


export default administrator