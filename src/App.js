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

import Table from './components/Table';
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';

import Pagination from './components/Pagination';

import Form from './components/Form';
import Input from './components/Input';
import InputPassword from './components/InputPassword';
import InputCheckbox from './components/InputCheckbox';
import InputText from './components/InputText';
import TextArea from './components/TextArea';
import Select from './components/Select';
import InputRadio from './components/InputRadio';

export default class App extends React.Component {
  constructor(props){
    super(props);
    
    this._test = this._test.bind(this);
  }
  
  _test(v) {
    console.log("Triggered! ", v);
  }

  _alert() {
    return <Alert type="danger" onDismiss={this._test}>
        <span>okok</span>
      </Alert>;
  }

  _badge() {
    return <Badge type="dark">6ix9ine</Badge>
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
        <Button
          type='success' 
          size="sm" 
          disabled={false} 
          block={false} 
          outline={true}>
          Click me
        </Button>
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
      href:'http://google.fr',
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

    return <ListGroup style={{width: '18rem;'}} items={items}/>;
  }

  _progress() {
    return <Progress value={13} height={10} label={true} type='success' striped={true} animated={true}/>;
  }

  _rowCol() {
    return (
      <Row>
        <Column style={{backgroundColor :'blue'}}>
          Coucou la col :p
        </Column>
        <Column style={{backgroundColor :'red'}}>
          Coucou la col :p
        </Column>
      </Row>
    );
  }

  _table() {
    let items = [{
      // TODO: Adding rows/cols.
    }];

    return (
      <Table striped={true} hover={true} dark={false}>
        <thead>
          <TableRow>
              <TableCell header={true}>Name</TableCell>
              <TableCell header={true}>Status</TableCell>
          </TableRow>
        </thead>

        <tbody>
          <TableRow>
            <TableCell>override</TableCell>
            <TableCell>required</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell>constructor</TableCell>
            <TableCell>not required</TableCell>
          </TableRow>
        </tbody>
      </Table>
    );
  }

  _pagination() {
    return (
      <Pagination
        currentPage={2}
        maxPages={5}
        onClick={this._test}
        />
    );
  }

  _form() {
    let selectItems = [{
      text: 'Value 1',
      value: 'value_1',
    },
    {
      text: 'Value 2',
      value: 'value_2',
    }];

    let radioItems = [{
      id: 'v1',
      text: 'Value 1',
      value: 'value_1',
    },
    {
      id: 'v2',
      text: 'Value 2',
      value: 'value_2',
      defaultChecked: true,
      disabled: false,
    }];

    return (
      <Form>
        <Input id="myForm"
                    label='Email address'
                    placeholder='Enter email'
                    type="email"
                    onChange={this._test}
                    help={<span>We will <b>never</b> share your email with anyone else.</span>}/>
          
        <InputCheckbox id="myFormCheckbox"
                    label='Email address'
                    onChange={this._test}
                    disabled={true}/>

        <TextArea id="ok" placeholder='okdzef' label='Jsaispas'/>

        <Select id="ock" onChange={this._test} items={selectItems} multiple={false} label="mylabel" />

        <Input id="kferjo" size="sm"/>
        <Input id="kferjof"/>
        <Input id="kferjoez" size="lg" readOnly={true}/>

        <InputRadio inline={true} onClick={this._test} name='nammmee' items={radioItems} />
      </Form>
    ); 
  }

  render() {
    let view = this._form();

    return (
      <main className="container">
        {view}
      </main>
    );
  }
}