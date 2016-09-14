import React, { Component } from 'react';
import { Link } from 'react-router';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = { open : false };
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open});
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
        <AppBar
            title="Pampanga Master Grill"
            onLeftIconButtonTouchTap={this.handleToggle}
            >
            <Drawer
              open={this.state.open}
              width={300}
              onRequestChange={(open) => this.setState({open})}>
              <AppBar
                showMenuIconButton={false}
                iconElementRight={
                  <IconButton onTouchTap={this.handleToggle}>
                    <NavigationClose />
                  </IconButton>}
                >
              </AppBar>
              <ul className="list-group">
                <Link className="list-group-item btn" to="/" onTouchTap={this.handleClose}>Home</Link>
                <Link className="list-group-item btn" to="/menu" onTouchTap={this.handleClose}>Menu</Link>
                <Link className="list-group-item btn" to="/location" onTouchTap={this.handleClose}>Location</Link>
                <Link className="list-group-item btn" to="/about_us" onTouchTap={this.handleClose}>About</Link>
                <Link className="list-group-item btn" to="/contact" onTouchTap={this.handleClose}>Contact Us</Link>
                <Link className="list-group-item btn" to="/catering" onTouchTap={this.handleClose}>Catering</Link>
              </ul>
            </Drawer>
          </AppBar>
    );
  }
}

export default Nav;
