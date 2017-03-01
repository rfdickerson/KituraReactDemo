import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBarExampleIcon from "./AppBarExampleIcon.jsx";
import MyAwesomeReactComponent from './MyAwesomeReactComponent.jsx';
import BadgeExampleSimple from './BadgeExampleSimple.jsx';
import CardExampleExpandable from './CardExampleExpandable.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';

const styles = {
  container: {
    
  },
};


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import {render} from 'react-dom';

const App = () => (
  <MuiThemeProvider>
      <div style={styles.container}>
      <AppBarExampleIcon/>
      <CardExampleExpandable/>
      <CardExampleExpandable/>
      <CardExampleExpandable/>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

//import AwesomeComponent from './AwesomeComponent.jsx';

/*class App extends React.Component {
    render () {
        return (
            <div className="container">
                <AwesomeComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));*/