
import React from "react";

class Catalogo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://stormy-reaches-89870.herokuapp.com/api/products/catalogo")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> cargando.... </h1> </div>;

        return (
            <div className="catalogo">
                <div className="list-title">
                    <h1> PRODUCTOS </h1>  {
                        items.map((item) => (
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col">
                                        <ul className="listProducts" key={item.id} >
                                            <li>
                                                <img className="Product-img" src={item.imgUrl} alt={item.description} />
                                            </li>

                                            <li>
                                                {item.title},
                                            </li>
                                            <li>

                                                Descripcion: {item.description}
                                            </li>

                                            <li>
                                                Precio: ${item.price}
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        );
    }
}


export default Catalogo;