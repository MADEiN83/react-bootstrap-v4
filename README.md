# react-bootstrap-v4 [![Build Status](https://travis-ci.org/MADEiN83/react-bootstrap-v4.svg?branch=master)](https://travis-ci.org/MADEiN83/react-bootstrap-v4) [![npm version](https://badge.fury.io/js/%40madein83%2Freact-bootstrap-v4.svg)](https://badge.fury.io/js/%40madein83%2Freact-bootstrap-v4) [![Maintainability](https://api.codeclimate.com/v1/badges/d7ae41d8f3d85744faea/maintainability)](https://codeclimate.com/github/MADEiN83/react-bootstrap-v4/maintainability)

### To-Do List
- [x] Init Github project
- [ ] Finish Pagination Component
- [ ] Add all form Components
- [ ] ...

### Installation

```
npm i @madein83/react-bootstrap-v4 --save
```

### Usage
```js
import { Alert, Badge } from '@madein83/react-bootstrap-v4';

...

<Alert type="danger">
  It <b>works</b>!
</Alert>
```

### Demo
```bash
npm run demo
```

# Table of contents
   * [Table of contents](#table-of-contents)
   * [Default HTML properties](#default-html-properties)
   * [Components](#components)
      * [Alert](#alert)
          * [Properties](#alert-properties)
          * [Events](#alert-events)
          * [Example](#alert-example)
      * [Badge](#badge)
          * [Properties](#badge-properties)
          * [Events](#badge-events)
          * [Example](#badge-example)
      * [Breadcrumb](#breadcrumb)
          * [Properties](#breadcrumb-properties)
          * [Events](#breadcrumb-events)
          * [Example](#breadcrumb-example)
      * [Button](#button)
          * [Properties](#button-properties)
          * [Events](#button-events)
          * [Example](#button-example)
      * [Card](#card)
          * [Properties](#card-properties)
          * [Events](#card-events)
          * [Example](#card-example)
      * [ListGroup](#listgroup)
          * [Properties](#listgroup-properties)
          * [Events](#listgroup-events)
          * [Example](#listgroup-example)
      * [Pagination](#pagination)
          * [Properties](#pagination-properties)
          * [Events](#pagination-events)
          * [Example](#pagination-example)
      * [Progress](#progress)
          * [Properties](#progress-properties)
          * [Events](#progress-events)
          * [Example](#progress-example)
      * [Row](#row)
          * [Properties](#row-properties)
          * [Events](#row-events)
          * [Example](#row-example)
      * [Table](#table)
          * [Properties](#table-properties)
          * [Events](#table-events)
          * [Example](#table-example)

# Default HTML properties
Default HTML properties can be use with all components below.

name | type | comment | example
-- | -- | -- | --
`title` | `string` | HTML `title` attribute | `title='My Title'`
`style` | `object` | HTML `style` attribute | `style='{{ color: 'red' }}'`
`className` | `string` | HTML `class` attribute | `className='custom-class'`
`onClick` | `event` | HTML `onClick` attribute | `onClick='this.myHandler'`
`disabled` | `boolean` | HTML `disabled` attribute | `disabled={true/false}`
`href` | `string` | HTML `href` attribute | `href='your_url'`
`min` | `number` | HTML `min` attribute | `min={0}`
`max` | `number` | HTML `max` attribute | `max={100}`
`value` | `number` | HTML `value` attribute | `value={50}`
`src` | `string` | HTML `src` attribute | `src='your_url'`
`alt` | `string` | HTML `alt` attribute | `alt='Image alt attr'`

# Default events
Default events can be use with all components below.

name | type | comment
-- | -- | --
`onClick` | onClick HTML event | 
`onChange` | onChange HTML event |

# Components

## Alert
### Alert properties

name | type | default | comment
-- | -- | -- | -- 
`type` | `string` | `primary` | Must be: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`
`closeLabel` | `string` | close | ARIA label for the close button

[See default HTML properties](#default-html-properties)

### Alert events
name | type | comment
-- | -- | --
 `onDismiss` | event | Handler for the close button 

### Alert example

```js
ReactDOM.render(
  <Alert type='danger' onDismiss={this._onDismissHandler}>
    <p>Your content here</p>
  </Alert>,
  document.getElementById('root')
);
```

## Badge
### Badge properties

name | type | default | comment
-- | -- | -- | -- 
`type` | `string` | `primary` | Must be: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`

[See default HTML properties](#default-html-properties)

### Badge events
name | type | comment
-- | -- | --
 `-` | - | -

### Badge example

```js
ReactDOM.render(
  <Badge type='danger' onClick={this._onClickHandler}>
    <p>Your content here</p>
  </Badge>,
  document.getElementById('root')
);
```

## Breadcrumb
### Breadcrumb properties

name | type | default | comment
-- | -- | -- | -- 
`items` | - |  | Object array of objects type { text: string, title: string, url: string}

[See default HTML properties](#default-html-properties)

### Breadcrumb events
name | type | comment
-- | -- | --
 `-` | - | -

### Breadcrumb example

```js
const items = [{
  title:'Go to home page',
  text: 'Home',
  url:'http://google.fr'
},
{
  title:'Users page',
  text: 'Users',
}];

ReactDOM.render(
  <Breadcrumb items={items} />,
  document.getElementById('root')
);
```

## Button
### Button properties

name | type | default | comment
-- | -- | -- | --
`type` | `string` | `primary` | Must be: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`
`size` | `string` |  | Must be: `sm`, `lg`
`block` | `boolean` | `false` | Render the button with block styles
`outline` | `boolean` | `false` | Render the button with outline styles
`disabled` | `boolean` | `false` | If the button is disabled

[See default HTML properties](#default-html-properties)

### Button events
name | type | comment
-- | -- | --
 `-` | - | -

### Button example

```js
ReactDOM.render(
  <Button
    type='success' 
    size="sm" 
    disabled={false} 
    block={false} 
    outline={true}>
    Click here
  </Button>,
  document.getElementById('root')
);
```

## Card
### Card properties

name | type | default | comment
-- | -- | -- | -- 
`title` | `string` | | The Card title

[See default HTML properties](#default-html-properties)

### Card events
name | type | comment
-- | -- | --
 `-` | - | -

### Card example

```js
ReactDOM.render(
  <Card title="My Card title" 
        src='[ImageUrl]'>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </Card>,
  document.getElementById('root')
);
```

## ListGroup
### ListGroup properties

name | type | default | comment
-- | -- | -- | -- 
`-` | - | `-` | -

[See default HTML properties](#default-html-properties)

### ListGroup events
name | type | comment
-- | -- | --
 `-` | - | -

### ListGroup example

```js
console.log('todo');
```

## Pagination
### Pagination properties

name | type | default | comment
-- | -- | -- | -- 
`-` | - | `-` | -

[See default HTML properties](#default-html-properties)

### Pagination events
name | type | comment
-- | -- | --
 `-` | - | -

### Pagination example

```js
console.log('todo');
```

## Progress
### Progress properties

name | type | default | comment
-- | -- | -- | -- 
`-` | - | `-` | -

[See default HTML properties](#default-html-properties)

### Progress events
name | type | comment
-- | -- | --
 `-` | - | -

### Progress example

```js
console.log('todo');
```

## Row
### Row properties

name | type | default | comment
-- | -- | -- | -- 
`-` | - | `-` | -

[See default HTML properties](#default-html-properties)

### Row events
name | type | comment
-- | -- | --
 `-` | - | -

### Row example

```js
console.log('todo');
```

## Table
### Table properties

name | type | default | comment
-- | -- | -- | -- 
`-` | - | `-` | -

[See default HTML properties](#default-html-properties)

### Table events
name | type | comment
-- | -- | --
 `-` | - | -

### Table example

```js
console.log('todo');
```
