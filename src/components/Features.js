import React, { Component } from 'react';
import Options from './Options';
import slugify from 'slugify';
import './Features.css';

class Features extends Component {
  render() {

    const options = this.props.feature.map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return <Options 
              key={itemHash}
              itemHash={itemHash}
              item={item}
              featureName={this.props.featureName}
              feature={this.props.feature}
              selected={this.props.selected}
              update={this.props.update}
              currency={this.props.currency}
              />
    });
    

    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.featureName}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default Features;
