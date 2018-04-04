import React from 'react';

import Alert from './components/Alert';
import Badge from './components/Badge';
import Button from './components/Button';
import Breadcrumb from './components/Breadcrumb';
import Card from './components/Card';
import ListGroup from './components/ListGroup';

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
      return (
        <div>
          <Button type='success'>Click me</Button>
          <br />
          <Button type='success' block={false} outline={false}>Click me</Button>
          <br />
          <Button type='danger' block={true} outline={false}>Click me</Button>
          <br />
          <Button type='dark' block={true} outline={true}>Click me</Button>
        </div>
      );
    }

    _card() {
      return <Card title="ok" image='https://assets.servedby-buysellads.com/p/manage/asset/id/32053'>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
        </Card>;
    }

    _ListGroup() {
      let items = [{
        title:'Go to home page',
        content: <span style={{color:'red'}}>Hoome</span>,
      },
      {
        title:'Go to user',
        content: 'Users',
        url:'http://google.fr',
        type: 'danger',
      },
      {
        title:'Go to user',
        content: 'Users',
        type: 'primary',
      }];

      return <ListGroup cssStyles={{width: '18rem;'}} items={items}/>;
    }

    render() {
      let view = this._ListGroup();

      return (
        <main className="container">
          {view}
        </main>
      );
    }
  }