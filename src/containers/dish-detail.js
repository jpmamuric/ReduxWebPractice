import React, { Component } from 'react';
import { connect } from 'react-redux';

class DishDetail extends Component {
  renderDetails(){
    const { name, description } = this.props.activeDish;
    return (
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    );
  }

  render() {
    switch (!this.props.activeDish) {
      case true:
      return (
        <div> Loading...</div>
      );
      default:
      return (
        <div>
          {this.renderDetails()}
        </div>
      );
    }
  }
}

function mapStateToProps({activeDish}) {
  return {activeDish};
}

export default connect(mapStateToProps)(DishDetail);
