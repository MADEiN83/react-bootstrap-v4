import React from 'react';

import Alert from './components/Alert';
import Badge from './components/Badge';
import Button from './components/Button';

export default class App extends React.Component {
    constructor(props){
      super(props);
      
      this._test = this._test.bind(this);
    }
    
    _test() {
      console.log("Triggered!");
    }

    render() {
      return (
        <main className="container">
          <Button type='warning' size="xs" onClick={this._test}>
            Salut :D
          </Button>
        </main>
      );
    }
  }