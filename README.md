# react-bootstrap-v4

   * [gh-md-toc](#gh-md-toc)
   * [Table of contents](#table-of-contents)
   * [Installation](#installation)
   * [Usage](#usage)
      * [STDIN](#stdin)
      * [Local files](#local-files)
      * [Remote files](#remote-files)
      * [Multiple files](#multiple-files)
      * [Combo](#combo)
      * [Auto insert and update TOC](#auto-insert-and-update-toc)
   * [Tests](#tests)
   * [Dependency](#dependency)


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
