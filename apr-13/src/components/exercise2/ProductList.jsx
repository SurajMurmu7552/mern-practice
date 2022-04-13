import React, { Component } from "react";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getProductsList();
  }

  getProductsList = async () => {
    let res = await fetch("https://reqres.in/api/products");
    let products = await res.json();

    this.setState({ data: products.data });
  };
  render() {
    return (
      <div className="productList">
        <h3 style={{ textAlign: "left" }}>Product list</h3>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Color</th>
            <th>Pantone Val</th>
            <th>Year</th>
          </tr>
          {this.state.data.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <div
                  className="color"
                  style={{
                    backgroundColor: `${product.color}`,
                  }}
                ></div>
              </td>
              <td>{product.pantone_value}</td>
              <td>{product.year}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
