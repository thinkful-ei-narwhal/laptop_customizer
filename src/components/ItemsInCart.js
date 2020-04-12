import React, { Component } from 'react';
import './Items.css';

class ItemsInCart extends Component {
  render() {
    const selectedOption = this.props.selected[this.props.featureName];
  
    return (
      <div className="summary__option" key={this.props.featureHash}>
        <div className="summary__option__label">{this.props.featureName} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {this.props.currency.format(selectedOption.cost)}
        </div>
      </div>
    );
  }
};

export default ItemsInCart;

