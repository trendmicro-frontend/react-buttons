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
