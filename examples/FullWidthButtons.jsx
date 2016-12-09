import React from 'react';
import { Button } from '../src';

export default () => {
    return (
        <div>
            <h4>Full-width Buttons</h4>
            <Button btnSize="lg" btnStyle="default" block>Full-width Button</Button>
            <Button btnSize="lg" btnStyle="primary" block>Full-width Button</Button>
            <Button btnSize="lg" btnStyle="emphasis" block>Full-width Button</Button>
        </div>
    );
};
