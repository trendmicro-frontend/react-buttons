import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Nav from './Nav';
import Section from './Section';
import ButtonStyles from './ButtonStyles';
import ButtonSizes from './ButtonSizes';
import BlockButtons from './BlockButtons';
import ButtonStates from './ButtonStates';
import ButtonGroup from './ButtonGroups';
import IconButtons from './IconButtons';

class App extends React.Component {
    render() {
        const name = 'React Buttons';
        const url = 'https://github.com/trendmicro-frontend/react-buttons';

        return (
            <div>
                <Nav name={name} url={url} />
                <div className="container-fluid" style={{ padding: '20px 20px 0' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <Section className="row-md-4">
                                <ButtonStyles />
                            </Section>
                        </div>
                        <div className={classNames('col-md-12 col-lg-6 col-xl-4')}>
                            <Section className="row-md-5">
                                <ButtonSizes />
                            </Section>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-4">
                            <Section className="row-md-5">
                                <ButtonStates />
                            </Section>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-4">
                            <Section className="row-md-4 row-xl-5">
                                <BlockButtons />
                            </Section>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-4">
                            <Section className="row-md-4 row-xl-6">
                                <ButtonGroup />
                            </Section>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-4">
                            <Section className="row-md-6">
                                <IconButtons />
                            </Section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
