import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mappedFields: {
        name: "Hello",
        description: "",
        manufacturer: "",
        model: "",
        price: "",
        dimensions: ""
      },
      unmappedFields: {
        condition_id: undefined,
        category_id: undefined
      }
    };
  }

  handleInput = event => {
    const { value, name } = event.target;
    const state = { ...this.state };
    state.mappedFields[name] = value;
    this.setState({ state });
  };

  render() {
    return (
      <div>
        <form>
          <ul>
            {Object.keys(this.state.mappedFields).map(key => {
              return (
                <li>
                  <label htmlFor={key}>
                    {key[0].toUpperCase() + key.slice(1) + ": "}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={this.state.mappedFields[key]}
                    onChange={this.handleInput}
                  />
                </li>
              );
            })}
            <li>
              <label htmlFor="condition">Condition: </label>
              <select name="condition_id">
                <option value="1">Chronic</option>
                <option value="2">Learned</option>
                <option value="3">Obsessive</option>
              </select>
            </li>
            <li>
              <label htmlFor="category">Category: </label>
              <select name="category_id">
                <option value="1">Work</option>
                <option value="2">Hygiene</option>
                <option value="3">Social</option>
                <option value="4">Home</option>
              </select>
            </li>
            <li>
              <label htmlFor="url">Image URL: </label>
              <input type="file " name="url" />
            </li>
          </ul>
          <button onClick={this.testInput}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
