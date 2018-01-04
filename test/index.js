import React from 'react';
import { mount } from 'enzyme';
import { test } from 'tap';
import '../setupTests';
import { Button, ButtonGroup, ButtonToolbar } from '../src';

test('<Button />', (t) => {
    const wrapper = mount((
        <Button>
        </Button>
    ));
    t.equal(wrapper.find(Button).length, 1, 'should render <Button /> component');
    t.end();
});

test('<ButtonGroup />', (t) => {
    const wrapper = mount((
        <ButtonGroup>
            <Button></Button>
            <Button></Button>
        </ButtonGroup>
    ));
    t.equal(wrapper.find(ButtonGroup).length, 1, 'should render <ButtonGroup /> component');
    t.equal(wrapper.find(Button).length, 2, 'should render <Button /> component');
    t.end();
});

test('<ButtonToolbar />', (t) => {
    const wrapper = mount((
        <ButtonToolbar>
            <ButtonGroup>
                <Button></Button>
                <Button></Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button></Button>
                <Button></Button>
            </ButtonGroup>
        </ButtonToolbar>
    ));
    t.equal(wrapper.find(ButtonToolbar).length, 1, 'should render <ButtonToolbar /> component');
    t.equal(wrapper.find(ButtonGroup).length, 2, 'should render <ButtonGroup /> component');
    t.equal(wrapper.find(Button).length, 4, 'should render <Button /> component');
    t.end();
});
