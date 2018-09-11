import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import React from 'react';
import Section from './Section';
import ButtonStyles from './ButtonStyles';
import ButtonSizes from './ButtonSizes';
import BlockButtons from './BlockButtons';
import ButtonStates from './ButtonStates';
import ButtonGroup from './ButtonGroups';
import IconButtons from './IconButtons';

const Example = () => (
    <div>
        <div className="container-fluid" style={{ padding: '20px 20px 0' }}>
            <div className="row">
                <div className="col-md-12">
                    <Section className="row-md-4">
                        <ButtonStyles />
                    </Section>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4">
                    <Section className="row-md-6">
                        <ButtonSizes />
                    </Section>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4">
                    <Section className="row-md-6">
                        <ButtonStates />
                    </Section>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4">
                    <Section className="row-md-6">
                        <ButtonGroup />
                    </Section>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4">
                    <Section className="row-md-6">
                        <IconButtons />
                    </Section>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-4">
                    <Section className="row-md-6">
                        <BlockButtons />
                    </Section>
                </div>
            </div>
        </div>
    </div>
);

export default Example;
