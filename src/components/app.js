import React, { Component } from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Nav from '../containers/nav';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

 class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Nav />
          <div>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
      // <img className="brand"src="https://photos-1.dropbox.com/t/2/AACQYctpoGnKXY5t5zg_IpvG9QH4xkdCUqmBAnOudhbHgA/12/542838171/png/32x32/1/_/1/2/elephant-1598359_640%20(1).png/EJjpiawEGK8KIAIoAg/jbmGHmlDVaHt_HMCZv0eVeVAQYApxZwujetes4ojGb8?size_mode=5"/>
