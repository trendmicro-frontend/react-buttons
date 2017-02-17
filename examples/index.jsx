import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Nav from './nav';
import ButtonStyles from './ButtonStyles';
import ButtonSizes from './ButtonSizes';
import BlockButtons from './BlockButtons';
import ButtonStates from './ButtonStates';
import ButtonGroup from './ButtonGroups';
import IconButtons from './IconButtons';
import styles from './index.styl';

class App extends React.Component {
    render() {
        const name = 'React Buttons';
        const url = 'https://github.com/trendmicro-frontend/react-buttons';

        return (
            <div>
                <Nav name={name} url={url} />
                <div className="container-fluid">
                    <div className={classNames('row', styles.container)}>
                        <div className="col-sm-12">
                            <div className="row-md-4">
                                <ButtonStyles />
                            </div>
                        </div>
                        <div className={classNames('col-md-12 col-lg-6 col-xl-4', styles.buttonSizes)}>
                            <div className="row-md-5">
                                <ButtonSizes />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-4">
                            <div className="row-md-5">
                                <ButtonStates />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-4">
                            <div className="row-md-4 row-xl-5">
                                <BlockButtons />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-4">
                            <div className="row-md-4 row-xl-6">
                                <ButtonGroup />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6 col-xl-4">
                            <div className="row-md-6">
                                <IconButtons />
                            </div>
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
