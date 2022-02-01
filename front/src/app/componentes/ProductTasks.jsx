import React, { Component } from 'react';
const comunication = "https://stormy-reaches-89870.herokuapp.com/"
class ProductsTasks extends Component {

  constructor() {
    super();
    this.state = {
      category: '',
      title: '',
      description: '',
      imgUrl: '',
      price: '',
      _id: '',
      amount: '',
      products: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addProduct(e) {
    e.preventDefault();
    if (this.state._id) {
      fetch(`https://stormy-reaches-89870.herokuapp.com/api/products/${this.state._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          category: this.state.category,
          title: this.state.title,
          description: this.state.description,
          imgUrl: this.state.imgUrl,
          price: this.state.price,
          amount: this.state.amount,
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({ html: 'Product Updated' });
          this.setState({ _id: '', title: '', description: '', category: '', price: '', imgUrl: '', amount: '' });
          this.fetchProducts();
        });
    } else {
      fetch('https://stormy-reaches-89870.herokuapp.com/api/products/add', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          window.M.toast({ html: 'Product Saved' });
          this.setState({ _id: '', title: '', description: '', category: '', price: '', imgUrl: '', amount: '' });
          this.fetchProducts();
        })
        .catch(err => console.error(err));
    }

  }

  deleteProduct(id) {
    if (window.confirm('Are you sure you want to delete it?')) {
      fetch(`https://stormy-reaches-89870.herokuapp.com/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);

          this.fetchProducts();
        });
    }
  }

  editProduct(id) {
    fetch(`https://stormy-reaches-89870.herokuapp.com/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          category: data.category,
          title: data.title,
          description: data.description,
          price: data.price,
          imgUrl: data.imgUrl,
          amount: data.amount,
          _id: data._id

        });
      });
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    fetch('https://stormy-reaches-89870.herokuapp.com/api/products/catalogo')
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data });
        console.log(this.state.products);
      });
  }

  render() {
    return (
      <div>
        <div className="col-6 mt-5">

          <h3>Agregar Productos</h3>

          <form onSubmit={this.addProduct}>
            <div className="card-inputs">
              {/*Categoria*/}
              <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupSelect01">Categoria</label>
                <select className="form-select" name="category" onChange={this.handleChange} value={this.state.category} id="inputGroupSelect01">
                  <option selected>Elegir Categoria</option>
                  <option value="Espumantes">Espumantes</option>
                  <option value="Espirituosas">Espirituosas</option>
                  <option value="Aperitivos">Aperitivos</option>
                  <option value="Tragos">Tragos</option>
                  <option value="Vinos">Vinos</option>
                  <option value="Bebidas Sin Alcohol y Energizantes">Bebidas Sin Alcohol y Energizantes</option>
                  <option value="Comidas">Comidas</option>
                </select>
              </div>
              {/*Titulo*/}
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Producto</span>
                <input type="text" className="form-control" name='title' onChange={this.handleChange} value={this.state.title} placeholder="Ingrese Nombre del Producto" aria-label="Product Name" aria-describedby="basic-addon2" />
              </div>
              {/*Descripcion*/}
              <div className="input-group mb-3">
                <span className="input-group-text">Descripcion</span>
                <textarea name="description" onChange={this.handleChange} value={this.state.description} className="form-control" aria-label="Descripcion"></textarea>
              </div>
              {/*ImgUrl*/}
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Imagen</span>
                <input type="text" className="form-control" name='imgUrl' onChange={this.handleChange} value={this.state.imgUrl} placeholder="Ingrese Url del a Imagen" aria-label="imgUrl" aria-describedby="basic-addon2" />
              </div>
              {/*Precio*/}
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input type="text" name="price" onChange={this.handleChange} value={this.state.price} className="form-control" aria-label="Amount (to the nearest dollar)" />
                <span className="input-group-text">.00</span>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Enviar
              </button>
            </div>
          </form>

        </div>

        <div className="col-12 overflow-scroll mt-5">

          <h3>Lista de Productos</h3>

          <table class="table">
            <thead>
              <tr>
                <th>category</th>
                <th>Img</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.products.map(product => {
                  return (
                    <tr key={product._id}>
                      <td>{product.category}</td>
                      <td><img src={product.imgUrl} alt={product.description}/></td>
                      <td>{product.title}</td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>
                      <td>
                        <button onClick={() => this.deleteProduct(product._id)} className="btn btn-danger">
                          Eliminar
                        </button>
                        <button onClick={() => this.editProduct(product._id)} className="btn btn-secondary" style={{ margin: '4px' }}>
                          Editar
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>)



  }
}

export default ProductsTasks;