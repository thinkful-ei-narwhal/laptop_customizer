import React, { Component } from 'react';
import ItemsInCart from './ItemsInCart';
import './Cart.css';

class Cart extends Component {
  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {Object.keys(this.props.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          return <ItemsInCart 
                  key={featureHash}
                  featureName={feature}
                  idx={idx}
                  currency={this.props.currency}
                  selected={this.props.selected}
                  />
        })
        }
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.currency.format(total)}
          </div>
        </div>
      </section>
    );
  }
}

export default Cart