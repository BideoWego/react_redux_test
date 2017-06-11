import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';


const Header = (props) => (
  <h1 className="Header" { ...props }>
    { props.children }
  </h1>
);


class App extends React.Component {
  render() {
    const style = {
      fontFamily: 'Monaco',
      color: 'blue'
    };

    return (
      <Router>
        <Header style={ style }>
          <ul>
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={{ pathname: '/about' }}>
                About
              </NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
          </Switch>
        </Header>
      </Router>
    );
  }
}


export default App;




