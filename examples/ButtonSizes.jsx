import React from 'react';
import { Button } from '../src';

export default () => {
    return (
        <div>
            <h4>Button Sizes</h4>
            <div>
                <Button btnSize="large">Large</Button>
                <Button btnSize="lg" btnStyle="primary">Large</Button>
                <Button btnSize="lg" btnStyle="emphasis">Large</Button>
                <Button btnSize="lg" btnStyle="flat">Large</Button>
                <br /><br />
                <Button btnSize="medium">Medium</Button>
                <Button btnSize="md" btnStyle="primary">Medium</Button>
                <Button btnSize="md" btnStyle="emphasis">Medium</Button>
                <Button btnSize="md" btnStyle="flat">Medium</Button>
                <br /><br />
                <Button btnSize="small">Small</Button>
                <Button btnSize="sm" btnStyle="primary">Small</Button>
                <Button btnSize="sm" btnStyle="emphasis">Small</Button>
                <Button btnSize="sm" btnStyle="flat">Small</Button>
                <br /><br />
                <Button btnSize="extra-small">Extra Small</Button>
                <Button btnSize="xs" btnStyle="primary">Extra Small</Button>
                <Button btnSize="xs" btnStyle="emphasis">Extra Small</Button>
                <Button btnSize="xs" btnStyle="flat">Extra Small</Button>
            </div>
        </div>
    );
};
