# react-bootstrap-v4

# Table of contents

   * [Table of contents](#table-of-contents)
   * [Alert](#alert)
      * [Properties](#alert-properties)
      * [Events](#alert-events)
      * [Example](#alert-example)


## Alert

### Properties

test | type | default | comment
-- | -- | -- | -- 
`type` | string | `primary` | Must be: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`
`cssStyle` | string | | Custom CSS style 
`closeLabel` | string | close | ARIA label for the close button 

### Events
name | type | comment
-- | -- | --
 `onDismiss` | event | Handler for the close button 

### Example

```js
ReactDOM.render(<Alert type='danger' />,
  document.getElementById('root')
);
```

gh-md-toc
=========

ok
