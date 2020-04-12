import React, { Component } from 'react';
import slugify from 'slugify';
import './Options.css';

class Options extends Component {
  render() {
    
    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          id={this.props.itemHash}
          className="feature__option"
          name={slugify(this.props.featureName)}
          checked={this.props.item.name === this.props.selected[this.props.featureName].name}
          onChange={e => this.props.update(this.props.featureName, this.props.item)}
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} ({this.props.currency.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}

export default Options;