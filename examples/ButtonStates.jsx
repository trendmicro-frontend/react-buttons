import React from 'react';
import { Button } from '../src';

export default () => {
    return (
        <div>
            <h4>Button Sizes</h4>
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
