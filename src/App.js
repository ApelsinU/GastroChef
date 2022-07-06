import React, {Component} from 'react';

import OrderWindow from './components/Order/OrderWindow.jsx';
import Header from './components/Header/Header.jsx';
import Footer from "./components/Footer/Footer";

export default class App extends Component {

/*  componentWillMount() {
   this.setLanguage('ru');
  }

  setLanguage(language) {
    i18next.init({
      lng: language,
      resources: require(`json!./${language}.json`)
    });

    this.props.actions.changeLanguage(i18next);
  }*/

  render() {
      return (
          <div className="page-wrapper">
              <Header/>
              {/*<OrderWindow></OrderWindow>*/}
              <Footer/>
          </div>
      )
    }
}

