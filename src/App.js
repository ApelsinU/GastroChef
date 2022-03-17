import React, {Component} from 'react';

import OrderWindow from './components/Order/OrderWindow';
import Header from './components/Header/Header';

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
          <div>
              <Header/>
              {/*<OrderWindow></OrderWindow>*/}
              <div className="scroll"></div>
          </div>
      )
    }
}

