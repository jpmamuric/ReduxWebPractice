import React , { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDish } from '../actions/index';
require('../../style/container-dish-list.css');

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

const customStyleWidth = {
  width: '90%',
  maxWidth: 'none'
};

class DishList extends Component {

  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  renderDishItems(){
    return this.props.dishes.map(dish => {
      const { description, id, name } = dish;
      return (
          <Card
            onTouchTap={this.handleTouchTap}
            key={id}
            className="card"
            onClick={()=>this.props.fetchDish(dish)}>
            <img />
            <CardTitle title={name}/>
          </Card>
      );
    });
  }

  renderDetails(){
    const { name, description } = this.props.activeDish;
    return (
      <div>
        <p>{description}</p>
      </div>
    );
  }

  render() {
    const { name, description } = this.props.activeDish;
    const actions = [
      <RaisedButton label="Close" onTouchTap={this.handleClose}></RaisedButton>
    ];

    switch (!this.props.dishes || !this.props.activeDish) {
      case true:
      return (
        <div>
          <CircularProgress />
        </div>
      );
        break;
      default:
      return (
        <div>
          <section
            className="dish-container" >
            {this.renderDishItems()}
          </section>
          <Dialog
            open={this.state.open}
            title={name}
            onRequestClose={this.handleClose}
            actions={actions}
            contentStyle={customStyleWidth}
            >
            {this.renderDetails()}
          </Dialog>
        </div>
      );
    }
  }
}

function mapStateToProps({dishes, activeDish }) {
  return { dishes, activeDish };
}

export default connect(mapStateToProps, {fetchDish})(DishList)
