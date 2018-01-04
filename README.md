# react-buttons [![build status](https://travis-ci.org/trendmicro-frontend/react-buttons.svg?branch=master)](https://travis-ci.org/trendmicro-frontend/react-buttons) [![Coverage Status](https://coveralls.io/repos/github/trendmicro-frontend/react-buttons/badge.svg?branch=master)](https://coveralls.io/github/trendmicro-frontend/react-buttons?branch=master)

[![NPM](https://nodei.co/npm/@trendmicro/react-buttons.png?downloads=true&stars=true)](https://nodei.co/npm/@trendmicro/react-buttons/)

React Buttons component.

Demo: https://trendmicro-frontend.github.io/react-buttons

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-buttons](https://github.com/trendmicro-frontend/react-buttons):

  ```
  npm install --save react @trendmicro/react-buttons
  ```

2. At this point you can import `@trendmicro/react-buttons` and its styles in your application as follows:

  ```js
  import { Button, ButtonGroup, ButtonToolbar } from '@trendmicro/react-buttons';

  // Be sure to include styles at some point, probably during your bootstraping
  import '@trendmicro/react-buttons/dist/react-buttons.css';
  ```

## Recommended Setup

Create a `Buttons` component inside your common components directory:
```
components/
  Buttons/
    index.js
```

**components/Buttons/index.js**
```js
import '@trendmicro/react-buttons/dist/react-buttons.css';

export { Button, ButtonGroup, ButtonToolbar } from '@trendmicro/react-buttons';
```

Then, import `Button` component in your code:
```js
import { Button } from './components/Buttons';
```

## Usage

### Button Styles

```js
<Button btnStyle="default">Default</Button>
<Button btnStyle="primary">Primary</Button>
<Button btnStyle="emphasis">Emphasis</Button>
<Button btnStyle="danger">Danger (Alias of Emphasis)</Button>
<Button btnStyle="flat">Flat</Button>
<Button btnStyle="border">Border (Alias of Flat)</Button>
<Button btnStyle="link">Link</Button>
```

### Button Sizes

```js
<Button btnSize="lg">Large</Button>
<Button btnSize="large">Large</Button>
<Button btnSize="md">Medium</Button>
<Button btnSize="medium">Medium</Button>
<Button btnSize="sm">Small</Button>
<Button btnSize="small">Small</Button>
<Button btnSize="xs">Extra Small</Button>
<Button btnSize="extra-small">Extra Small</Button>
```

### Button States

```js
<Button>Normal</Button>
<Button hover>Hover</Button>
<Button active>Active</Button>
<Button focus>Focus</Button>
<Button disabled>Disabled</Button>
```

### Block Buttons (Full-width Buttons)

```js
<Button block>Block Button</Button>
```

### Button Groups

#### Default button group

```js
<ButtonGroup>
    <Button active>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
</ButtonGroup>
<ButtonGroup>
    <Button compact><i className="fa fa-pencil" /></Button>
    <Button compact><i className="fa fa-mail-reply" /></Button>
</ButtonGroup>
```

#### Flat button group

```js
<ButtonGroup btnStyle="flat" btnSize="md">
    <Button active>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
</ButtonGroup>
<ButtonGroup btnStyle="flat" btnSize="md">
    <Button compact><i className="fa fa-pie-chart" /></Button>
    <Button compact><i className="fa fa-line-chart" /></Button>
    <Button compact><i className="fa fa-table" /></Button>
</ButtonGroup>
```

#### Vertical button group

```js
<ButtonGroup vertical>
    <Button>Top</Button>
    <Button>Middle</Button>
    <Button>Bottom</Button>
</ButtonGroup>
```

### Button Toolbar

```js
<ButtonToolbar>
    <ButtonGroup>
        <Button>Button Group 1</Button>
        <Button>Button Group 1</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button>Button Group 2</Button>
        <Button>Button Group 2</Button>
    </ButtonGroup>
</ButtonToolbar>
```

### Button (w/ Icon)

#### Static (default)

```js
<Button>
    <i className="fa fa-download" />
    Download
</Button>
<Button btnStyle="primary">
    <i className="fa fa-plus" />
    Add Account
</Button>
```

### Progressing

```js
<Button disabled>
    <i className="fa fa-circle-o-notch fa-spin" />
    Uploading
</Button>
<Button btnStyle="primary" disabled>
    <i className="fa fa-circle-o-notch fa-spin" />
    Uploading
</Button>
```

#### Static (flat)

```js
<Button btnStyle="flat">
    <i className="fa fa-pencil fa-fw" />
    Edit
</Button>
<Button btnStyle="flat">
    <i className="fa fa-trash-o fa-fw" />
    Delete
</Button btnStyle="flat">
<Button>
    <i className="fa fa-book fa-fw" />
    Library
</Button>
```

#### Compact

```js
<Button compact>
    <i className="fa fa-comment" />
</Button>
<Button btnStyle="primary" compact>
    <i className="fa fa-plus" />
</Button>
<Button btnStyle="emphasis" compact>
    <i className="fa fa-search" />
</Button>
<Button btnStyle="flat" compact>
    <i className="fa fa-cog" />
</Button>
```

## API

### Properties

#### Button

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
componentClass | Function or String | 'button' |
type | One of:<br/>'button'<br/>'reset'<br/>'submit' | 'button' |
btnSize | One of:<br/>'lg'<br/>'md'<br/>'sm'<br/>'xs'<br/>'large'<br/>'medium'<br/>'small'<br/>'extra-small' | 'md' |
btnStyle | One of:<br/>'default'<br/>'primary'<br/>'danger'<br/>'emphasis'<br/>'border'<br/>'flat'<br/>'link'<br/> | 'default' |
active | Boolean | false |
hover | Boolean | false |
focus | Boolean | flase |
disabled | Boolean | flase |
block | Boolean | false |
compact | Boolean | false |

#### ButtonGroup

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
btnSize | One of:<br/>'lg'<br/>'md'<br/>'sm'<br/>'xs'<br/>'large'<br/>'medium'<br/>'small'<br/>'extra-small' | |
btnStyle | One of:<br/>'default'<br/>'primary'<br/>'danger'<br/>'emphasis'<br/>'border'<br/>'flat'<br/>'link'<br/> | |
vertical | Boolean | false |

#### ButtonToolbar

Name | Type | Default | Description 
:--- | :--- | :------ | :----------

## License

MIT
