import React from 'react';

import Alert from './components/Alert';
import Badge from './components/Badge';
import Button from './components/Button';
import Breadcrumb from './components/Breadcrumb';
import Card from './components/Card';

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

    _card() {
      return <Card title="ok" image='https://assets.servedby-buysellads.com/p/manage/asset/id/32053'>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>;
    }

    render() {
      let view = this._card();

      return (
        <main className="container">
          {view}
        </main>
      );
    }
  }