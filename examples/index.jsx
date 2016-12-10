import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ButtonStyles from './ButtonStyles';
import ButtonSizes from './ButtonSizes';
import FullWidthButtons from './FullWidthButtons';
import ButtonStates from './ButtonStates';
import ButtonGroup from './ButtonGroups';
import IconButtons from './IconButtons';
import DropdownButtons from './DropdownButtons';
import styles from './index.styl';

class App extends React.Component {
    render() {
        return (
            <div
                className={classNames(
                    'row',
                    styles.container
                )}
            >
                <div className="col-sm-12">
                    <ButtonStyles />
                </div>
                <div
                    className={classNames(
                        'col-sm-12 col-md-6 col-lg-4',
                        styles['button-sizes']
                    )}
                >
                    <ButtonSizes />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <FullWidthButtons />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ButtonStates />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <ButtonGroup />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <IconButtons />
                </div>
                <div
                    className={classNames(
                        'col-sm-12 col-md-6 col-lg-4',
                        styles['dropdown-buttons']
                    )}
                >
                    <DropdownButtons />
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
