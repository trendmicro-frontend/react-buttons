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
                <ButtonGroup>
                    <Button btnStyle="flat" active>Left</Button>
                    <Button btnStyle="flat">Middle</Button>
                    <Button btnStyle="flat">Right</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button btnStyle="flat" compact><i className="fa fa-pie-chart" /></Button>
                    <Button btnStyle="flat" compact><i className="fa fa-line-chart" /></Button>
                    <Button btnStyle="flat" compact><i className="fa fa-table" /></Button>
                </ButtonGroup>
            </div>
        </div>
    );
};
