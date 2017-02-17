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
