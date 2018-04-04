import React from 'react';

import Alert from './components/Alert';
import Badge from './components/Badge';
import Button from './components/Button';
import Breadcrumb from './components/Breadcrumb';
import Card from './components/Card';
import ListGroup from './components/ListGroup';
import Progress from './components/Progress';

import Row from './components/Row';
import Column from './components/Column';

export default class App extends React.Component {
    constructor(props){
      super(props);
      
      this._test = this._test.bind(this);
    }
    
    _test() {
      console.log("Triggered!");
    }

    _alert() {
      return <Alert onDismiss={this._test}>
          <span>okok</span>
        </Alert>;
    }

    _badge() {
      return <Badge>6ix9ine</Badge>
    }

    _breadcrumb() {
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
          <Button onClick={this._test}>Click me</Button>
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
      return <Card title="ok" 
      src='https://assets.servedby-buysellads.com/p/manage/asset/id/32053'>
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
        badge: 7,
        badgeType: 'dark'
      },
      {
        title:'Go to user',
        content: 'Users',
        type: 'primary',
        onClick: this._test
      }];

      return <ListGroup cssStyles={{width: '18rem;'}} items={items}/>;
    }

    _progress() {
      return <Progress value={50} height={10} label={true} type='success' striped={true} animated={true}/>;
    }

    _rowCol() {
      return (
        <Row>
          <Column cssStyles={{backgroundColor :'blue'}}>
            Coucou la col :p
          </Column>
          <Column cssStyles={{backgroundColor :'red'}}>
            Coucou la col :p
          </Column>
        </Row>
      );
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