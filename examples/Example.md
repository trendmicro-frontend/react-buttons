```jsx
<Example />
```

ButtonStyles

```jsx static
import React from 'react';
import { Button } from '../src';

export default () => {
    return (
        <div>
            <h4>Button Styles</h4>
            <ul>
                <li><strong>Default:</strong> Use the default style if the button does not belong to any of the category below.</li>
                <li><strong>Primary:</strong> Except for Log on, Log out, and linking buttons, use the primary style for the most important button on a UI page. For example, save and ok buttons.</li>
                <li><strong>Emphasis:</strong> Use the emphasis style for logon buttons.</li>
                <li><strong>Flat:</strong> Use the flat style for buttons that do not generally need additional attention, such as toolbar buttons or buttons in tables.</li>
                <li><strong>Linking:</strong> Use the linking style for hyperlinks or for action buttons when you want to simply the interface.</li>
            </ul>
            <div>
                <Button btnStyle="default">Default</Button>
                <Button btnStyle="primary">Primary</Button>
                <Button btnStyle="emphasis">Emphasis</Button>
                <Button btnStyle="danger">Danger (Alias of Emphasis)</Button>
                <Button btnStyle="flat">Flat</Button>
                <Button btnStyle="border">Border (Alias of Flat)</Button>
                <Button btnStyle="link">Linking</Button>
            </div>
        </div>
    );
};
```

ButtonSizes

```jsx static
import React from 'react';
import { Button } from '../src';

export default () => {
    return (
        <div>
            <h4>Button Sizes</h4>
            <div>
                <p>
                    <Button btnSize="large" style={{ width: 100 }}>Large</Button>
                    <Button btnSize="lg" btnStyle="primary" style={{ width: 100 }}>Large</Button>
                    <Button btnSize="lg" btnStyle="emphasis" style={{ width: 100 }}>Large</Button>
                    <Button btnSize="lg" btnStyle="flat" style={{ width: 100 }}>Large</Button>
                </p>
                <p>
                    <Button btnSize="medium" style={{ width: 100 }}>Medium</Button>
                    <Button btnSize="md" btnStyle="primary" style={{ width: 100 }}>Medium</Button>
                    <Button btnSize="md" btnStyle="emphasis" style={{ width: 100 }}>Medium</Button>
                    <Button btnSize="md" btnStyle="flat" style={{ width: 100 }}>Medium</Button>
                </p>
                <p>
                    <Button btnSize="small" style={{ width: 100 }}>Small</Button>
                    <Button btnSize="sm" btnStyle="primary" style={{ width: 100 }}>Small</Button>
                    <Button btnSize="sm" btnStyle="emphasis" style={{ width: 100 }}>Small</Button>
                    <Button btnSize="sm" btnStyle="flat" style={{ width: 100 }}>Small</Button>
                </p>
                <p>
                    <Button btnSize="extra-small" style={{ width: 100 }}>Extra Small</Button>
                    <Button btnSize="xs" btnStyle="primary" style={{ width: 100 }}>Extra Small</Button>
                    <Button btnSize="xs" btnStyle="emphasis" style={{ width: 100 }}>Extra Small</Button>
                    <Button btnSize="xs" btnStyle="flat" style={{ width: 100 }}>Extra Small</Button>
                </p>
            </div>
        </div>
    );
};
```

ButtonStates

```jsx static
import React from 'react';
import { Button } from '../src';

export default () => {
    return (
        <div>
            <h4>Button States</h4>
            <div>
                <Button>Normal</Button>
                <Button btnStyle="primary">Normal</Button>
                <Button btnStyle="emphasis">Normal</Button>
                <Button btnStyle="flat">Normal</Button>
                <br /><br />

                <Button hover>Hover</Button>
                <Button hover btnStyle="primary">Hover</Button>
                <Button hover btnStyle="emphasis">Hover</Button>
                <Button hover btnStyle="flat">Hover</Button>
                <br /><br />

                <Button active>Active</Button>
                <Button active btnStyle="primary">Active</Button>
                <Button active btnStyle="emphasis">Active</Button>
                <Button active btnStyle="flat">Active</Button>
                <br /><br />

                <Button focus>Focus</Button>
                <Button focus btnStyle="primary">Focus</Button>
                <Button focus btnStyle="emphasis">Focus</Button>
                <Button focus btnStyle="flat">Focus</Button>
                <br /><br />

                <Button disabled>Disabled</Button>
                <Button disabled btnStyle="primary">Disabled</Button>
                <Button disabled btnStyle="emphasis">Disabled</Button>
                <Button disabled btnStyle="flat">Disabled</Button>
            </div>
        </div>
    );
};
```

ButtonGroup

```jsx static
import React from 'react';
import { Button, ButtonGroup } from '../src';

export default () => {
    return (
        <div>
            <h4>Button Groups</h4>
            <p>Group related buttons to improve clarity and imply relavance.</p>
            <div>
                <p><strong>Default button group</strong></p>
                <ButtonGroup>
                    <Button active>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button compact><i className="fa fa-pencil" /></Button>
                    <Button compact><i className="fa fa-mail-reply" /></Button>
                </ButtonGroup>
                <br /><br />

                <p><strong>Flat button group</strong></p>
                <ButtonGroup btnSize="md" btnStyle="flat">
                    <Button active>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup btnSize="md" btnStyle="flat">
                    <Button compact><i className="fa fa-pie-chart" /></Button>
                    <Button compact><i className="fa fa-line-chart" /></Button>
                    <Button compact><i className="fa fa-table" /></Button>
                </ButtonGroup>

                <br /><br />
                <p><strong>Vertical button group</strong></p>
                <div className="row">
                    <div className="col-xs-4">
                        <ButtonGroup vertical btnStyle="flat">
                            <Button active>Left</Button>
                            <Button>Middle</Button>
                            <Button>Right</Button>
                        </ButtonGroup>
                    </div>
                    <div className="col-xs-4">
                        <ButtonGroup vertical btnStyle="flat">
                            <Button compact><i className="fa fa-pie-chart" /></Button>
                            <Button compact><i className="fa fa-line-chart" /></Button>
                            <Button compact><i className="fa fa-table" /></Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};
```

IconButtons

```jsx static
import React from 'react';
import { Button } from '../src';
import Loader from './Loader';

export default () => {
    return (
        <div>
            <h4>Icon Buttons</h4>
            <div>
                <p><strong>Static (default)</strong></p>
                <Button>
                    <i className="fa fa-download" />
                    Download
                </Button>
                <Button btnStyle="primary">
                    <i className="fa fa-plus" />
                    Add Account
                </Button>
                <br /><br />

                <p><strong>Progressing</strong></p>
                <Button disabled>
                    <Loader size="small" />
                    Uploading
                </Button>
                <Button btnStyle="primary" disabled>
                    <Loader size="small" />
                    Uploading
                </Button>
                <br /><br />

                <p><strong>Static (flat)</strong></p>
                <Button btnStyle="flat">
                    <i className="fa fa-wrench" />
                    Settings
                </Button>
                <Button btnStyle="flat">
                    <i className="fa fa-trash" />
                    Remove
                </Button>
                <Button btnStyle="flat">
                    <i className="fa fa-repeat" />
                    Refresh
                </Button>
                <br /><br />

                <p><strong>Icon</strong></p>
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
            </div>
        </div>
    );
};
```

BlockButtons

```jsx static
import React from 'react';
import { Button } from '../src';

export default () => {
    return (
        <div>
            <h4>Block Buttons</h4>
            <p>
                <Button btnSize="lg" btnStyle="default" block>Block Button</Button>
            </p>
            <p>
                <Button btnSize="lg" btnStyle="primary" block>Block Button</Button>
            </p>
            <p>
                <Button btnSize="lg" btnStyle="emphasis" block>Block Button</Button>
            </p>
        </div>
    );
};
```