import React from 'react';

import Alert from './components/Alert';
import Badge from './components/Badge';
import Button from './components/Button';
import Breadcrumb from './components/Breadcrumb';

export default class App extends React.Component {
    constructor(props){
      super(props);
      
      this._test = this._test.bind(this);
    }
    
    _test() {
      console.log("Triggered!");
    }

    _generateBreadcrumb() {
      let items = [{
        title:'Go to home page',
        text: 'Home',
        url:'http://google.fr'
      },
      {
        title:'Go to user',
        text: 'Users',
        url:'http://google.fr'
      }];

      return (
        <Breadcrumb items={items}>
          Salut
        </Breadcrumb> 
      );
    }

    _button() {
      return <Button type='success' block={false} outline={false}>Click me</Button>;
    }

    render() {
      let view = this._button();

      return (
        <main className="container">
          {view}
        </main>
      );
    }
  }