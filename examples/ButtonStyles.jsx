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
