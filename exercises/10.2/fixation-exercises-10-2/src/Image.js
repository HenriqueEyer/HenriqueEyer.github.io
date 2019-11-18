import React from 'react';

class Image extends React.Component {
  render(props) {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;
