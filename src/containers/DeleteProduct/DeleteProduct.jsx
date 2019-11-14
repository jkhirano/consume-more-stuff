import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsDeleteProduct } from "../../actions";

class DeleteProduct extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data:[
                //test data
                {id:1, name: 'Hi'},
                {id:2, name: 'Hello'},
                {id:3, name: 'How are you'},
                {id:4, name: '?'}
            ]
        }
    }

    delete(){
        this.props.deleteProduct(this.state.data[0].id);
    }

    render() {
        const listItem = this.state.data.map((item)=>{
            return <div key={item.id}>
            <span>{item.name}</span> <button onClick={this.delete}>Delete</button>
            </div>
        })
        return <div>
            {listItem}
        </div>  
    }
};

const mapStateToProps = store => {
    return {
      removeProduct: store.removeProduct
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      deleteProduct: (data) => {
        return dispatch(actionsDeleteProduct(data));
      }
    };
  };

DeleteProduct = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteProduct);

export default DeleteProduct;